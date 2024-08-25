import { useLoaderData, useNavigate } from "@remix-run/react";
import { Button, Card, CardBody } from "@nextui-org/react";
import {
  createWorkout,
  createWorkoutInstance,
  getDailyWeightLogs,
  getPrivateExercises,
  getPublicExercises,
  getTodayWeightLog,
  getTrainee,
  updateTraineeSummary,
  getUpcomingWorkouts,
  completeWorkout,
  updateWorkoutInstance,
  editDailyWeightLog,
  insertDailyWeightLog
} from "~/db/db.server";
import TraineeWeeklySummary from "~/components/trainer-specific/TraineeWeeklySummary";
import { getSession } from "~/sessions";
import { parseDateTimeFromTimezone } from "~/utils/dateUtils";
import TraineeWeightProgress from "~/components/trainer-specific/TraineeWeightProgress";
import TraineeUpcomingWorkouts from "~/components/trainer-specific/TraineeUpcomingWorkouts";
export async function loader({ request, params }) {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");
  const publicExercises = await getPublicExercises();
  const privateExercises = await getPrivateExercises(user.id);
  const exercises = [...publicExercises, ...privateExercises];
  const trainee = await getTrainee(Number(params.id));
  const dailyWeight = await getTodayWeightLog(trainee[0].id);
  const dailyWeightLogsRaw = await getDailyWeightLogs(trainee[0].id);
  const dailyWeightLogs = dailyWeightLogsRaw.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  const upcomingWorkouts = await getUpcomingWorkouts(trainee[0].id);

  return {
    trainee: trainee[0],
    dailyWeight,
    dailyWeightLogs,
    exercises,
    upcomingWorkouts
  };
}
export async function action({ request }) {
  const formData = await request.formData();
  const formRequest = String(formData.get("formRequest"));
  if (formRequest === "editTraineeSummary") {
    const traineeId = Number(formData.get("traineeId"));
    const goal = String(formData.get("goal"));
    const targetCalories = Number(formData.get("targetCalories"));
    const targetProtein = Number(formData.get("targetProtein"));
    const targetCarbs = Number(formData.get("targetCarbs"));
    const targetFats = Number(formData.get("targetFats"));

    const result = await updateTraineeSummary(
      traineeId,
      goal,
      targetCalories,
      targetProtein,
      targetCarbs,
      targetFats
    );
    return null;
  } else if (formRequest === "addTraineeWorkout") {
    const traineeId = Number(formData.get("traineeId"));
    const workoutName = String(formData.get("workoutName"));
    const scheduledDate = formData.get("workoutDate");
    const trainingInstances = JSON.parse(formData.get("trainingInstances"));
    const workout = await createWorkout(
      workoutName,
      traineeId,
      parseDateTimeFromTimezone(scheduledDate)
    );
    console.log("addTraineeWorkout result: ", workout);
    trainingInstances.forEach(async (instance) => {
      const exerciseId = Number(instance.exerciseId);
      const sets = Number(instance.sets);
      const reps = Number(instance.reps);
      const weight = Number(instance.weight);
      const result = await createWorkoutInstance(
        workout.id,
        exerciseId,
        sets,
        reps,
        weight
      );
    });
    return null;
  } else if (formRequest === "completeWorkout") {
    const traineeId = Number(formData.get("traineeId"));
    const workoutId = Number(formData.get("workoutId"));
    const trainingInstances = JSON.parse(formData.get("trainingInstances"));
    console.log("completeWorkout: ", traineeId, workoutId, trainingInstances);
    await completeWorkout(workoutId);
    trainingInstances.forEach(async (instance) => {
      if (instance.modified) {
        const instanceId = Number(instance.instanceId);
        const sets = Number(instance.sets);
        const reps = Number(instance.reps);
        const weight = Number(instance.weight);
        await updateWorkoutInstance(instanceId, sets, reps, weight);
      }
    });
    return null;
  } else if (formRequest === "editDailyWeightLog") {
    const logId = Number(formData.get("logId"));
    const weight = Number(formData.get("weight"));
    const result = await editDailyWeightLog(logId, weight);
    return null;
  } else if (formRequest === "insertDailyWeightLog") {
    const traineeId = Number(formData.get("traineeId"));
    const weight = Number(formData.get("weight"));
    const result = await insertDailyWeightLog(traineeId, weight);
    return null;
  }
  return null;
}

export default function DetailedTrainerPage() {
  const traineeDetails = useLoaderData().trainee;
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col gap-5">
        <Button
          color="primary"
          onClick={() => navigate("/trainer")}
          className="w-fit"
        >
          Back
        </Button>
        <section>
          <h1>
            {`${traineeDetails?.first_name} ${traineeDetails?.last_name}`}{" "}
            Dashboard
          </h1>
          <p>Welcome to the trainee dashboard!</p>
        </section>
        <section>
          <Card className="p-4">
            <CardBody>
              <TraineeWeeklySummary />
            </CardBody>
          </Card>
        </section>
        <section>
          <Card className="p-4">
            <CardBody>
              <TraineeWeightProgress />
            </CardBody>
          </Card>
        </section>
        <section>
          <Card className="p-4">
            <CardBody>
              <TraineeUpcomingWorkouts />
            </CardBody>
          </Card>
        </section>
      </main>
    </>
  );
}
