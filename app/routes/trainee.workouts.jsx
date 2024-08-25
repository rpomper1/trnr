import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useState } from "react";
import CompleteWorkoutModal from "~/components/modals/CompleteWorkoutModal";
import WorkoutTable from "~/components/tables/WorkoutTable";
import { getWorkouts } from "~/db/db.server";
import { getSession } from "~/sessions";
import { formatDate } from "~/utils/dateUtils";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const sessionUser = session.get("user");
  const trainee = session.get("trainee");
  const workouts = await getWorkouts(Number(trainee.id));
  return { workouts, trainee };
}
const WorkoutsPage = () => {
  const navigate = useNavigate();
  const trainee = useLoaderData().trainee;
  const workouts = useLoaderData().workouts;
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);
  const [showCompleteWorkoutModal, setShowCompleteWorkoutModal] =
    useState(false);
  const [selectedWorkoutForCompletion, setSelectedWorkoutForCompletion] =
    useState(null);
  const handleSearch = (e) => {
    const search = e.target.value;
    const filteredWorkouts = workouts.filter((workout) =>
      workout.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredWorkouts(filteredWorkouts);
  };
  return (
    <>
      {showCompleteWorkoutModal && (
        <CompleteWorkoutModal
          path={"/trainee/workouts"}
          onClose={() => setShowCompleteWorkoutModal(false)}
          traineeId={trainee.id}
          workout={selectedWorkoutForCompletion}
        />
      )}
      <div className="flex flex-col gap-5">
        <Button color="primary" className="w-fit" onClick={() => navigate(-1)}>
          Back
        </Button>
        <div className="flex justify-between items-center">
          <h1>My Workouts</h1>
        </div>
        <Card className="flex flex-col gap-2 p-4">
          <CardBody>
            <Input
              placeholder="Search"
              className="w-1/3 mb-5"
              onChange={handleSearch}
            />
            {filteredWorkouts.length > 0 ? (
              <>
                {filteredWorkouts.map((workout) => (
                  <div key={workout.id} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <span className="text-2xl font-semibold">
                          {workout.name}
                        </span>
                        <span>{formatDate(workout.scheduled_date)}</span>
                      </div>
                      {!workout.completed ? (
                        <Button
                          color="primary"
                          variant="bordered"
                          onClick={() => {
                            setShowCompleteWorkoutModal(true);
                            setSelectedWorkoutForCompletion(workout);
                          }}
                        >
                          Mark as completed
                        </Button>
                      ) : (
                        <span className="font-semibold">Completed✅</span>
                      )}
                    </div>
                    <WorkoutTable data={workout.data} />
                  </div>
                ))}
              </>
            ) : (
              <div className="flex justify-center items-center min-h-40 text-xl">
                No workouts found.
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default WorkoutsPage;
