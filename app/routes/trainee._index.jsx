import { Card, CardBody } from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import UpcomingWorkouts from "~/components/trainee-specific/UpcomingWorkout";
import WeeklySummary from "~/components/trainee-specific/WeeklySummary";
import WeightProgress from "~/components/trainee-specific/WeightProgress";
import {
  completeWorkout,
  editDailyWeightLog,
  getDailyWeightLogs,
  getTodayWeightLog,
  getUpcomingWorkouts,
  insertDailyWeightLog,
  updateWorkoutInstance
} from "~/db/db.server";
import { getSession } from "~/sessions";
export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const sessionUser = session.get("user");
  const trainee = session.get("trainee");
  console.log("trainee: ", trainee);
  const dailyWeight = await getTodayWeightLog(trainee.id);
  const dailyWeightLogsRaw = await getDailyWeightLogs(trainee.id);
  const dailyWeightLogs = dailyWeightLogsRaw.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  const upcomingWorkouts = await getUpcomingWorkouts(trainee.id);

  return {
    sessionUser,
    trainee,
    dailyWeight,
    dailyWeightLogs,
    upcomingWorkouts
  };
}
export async function action({ request }) {
  const formData = await request.formData();
  const formRequest = String(formData.get("formRequest"));

  if (formRequest === "completeWorkout") {
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
  } else if (formRequest === "insertDailyWeightLog") {
    const traineeId = Number(formData.get("traineeId"));
    const weight = Number(formData.get("weight"));
    const result = await insertDailyWeightLog(traineeId, weight);
  } else if (formRequest === "editDailyWeightLog") {
    const logId = Number(formData.get("logId"));
    const weight = Number(formData.get("weight"));
    const result = await editDailyWeightLog(logId, weight);
  }
  return null;
}
const TraineeDashboard = () => {
  const sessionUser = useLoaderData().sessionUser;
  const trainee = useLoaderData().trainee;
  console.log("trainee dashboard: ", sessionUser, trainee);
  return (
    <main className="flex flex-col gap-10">
      <section>
        <h1>Trainee Dashboard</h1>
        <p>Welcome {sessionUser?.firstName}!</p>
      </section>
      <section>
        <Card className="p-4">
          <CardBody>
            <WeeklySummary />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardBody>
            <WeightProgress />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardBody>
            <UpcomingWorkouts />
          </CardBody>
        </Card>
      </section>
    </main>
  );
};

export default TraineeDashboard;
