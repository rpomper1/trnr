import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import WorkoutTable from "../tables/WorkoutTable";
import { formatDate } from "~/utils/dateUtils";
import CompleteWorkoutModal from "../modals/CompleteWorkoutModal";

const UpcomingWorkouts = () => {
  const navigate = useNavigate();
  const trainee = useLoaderData().trainee;
  const upcomingWorkouts = useLoaderData().upcomingWorkouts;
  const [showCompleteWorkoutModal, setShowCompleteWorkoutModal] =
    useState(false);
  const [selectedWorkoutForCompletion, setSelectedWorkoutForCompletion] =
    useState(null);
  return (
    <>
      {showCompleteWorkoutModal && (
        <CompleteWorkoutModal
          path={"/trainee?index"}
          onClose={() => setShowCompleteWorkoutModal(false)}
          traineeId={trainee.id}
          workout={selectedWorkoutForCompletion}
        />
      )}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h2>Upcoming Workouts</h2>
          <Button color="primary" onClick={() => navigate("/trainee/workouts")}>
            View all
          </Button>
        </div>

        {upcomingWorkouts.length > 0 ? (
          <div className="flex flex-col gap-2">
            {upcomingWorkouts.map((workout) => (
              <div key={workout.id} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-semibold">
                      {workout.name}
                    </span>
                    <span>{formatDate(workout.scheduled_date)}</span>
                  </div>
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
                </div>
                <WorkoutTable data={workout.data} />
              </div>
            ))}
          </div>
        ) : (
          <div>No upcoming workouts!</div>
        )}
      </div>
    </>
  );
};
export default UpcomingWorkouts;
