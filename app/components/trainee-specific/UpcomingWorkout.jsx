import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";

const UpcomingWorkout = () => {
  const workout = {
    name: "Leg Day",
    completed: false,
    exercises: [
      { name: "Squats", sets: 4, reps: 6, rpe: 7, weight: 100 },
      { name: "Deadlifts", sets: 4, reps: 6, rpe: 7, weight: 140 },
      { name: "Leg Press", sets: 3, reps: 10, rpe: 7, weight: 160 },
      { name: "Leg Curls", sets: 2, reps: 6, rpe: 10, weight: 60 },
      { name: "Leg Extensions", sets: 2, reps: 12, rpe: 10, weight: 50 },
      { name: "Calf Raises", sets: 4, reps: 15, rpe: 10, weight: 75 }
    ]
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2>Upcoming Workout</h2>
        <Button auto color="primary">
          View all
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-0">
          <span className="text-xl font-semibold text-slate-600">
            {workout.name}
          </span>
          <Table className="workout-table">
            <TableHeader>
              <TableColumn>Name</TableColumn>
              <TableColumn>Sets</TableColumn>
              <TableColumn>Reps</TableColumn>
              <TableColumn>Weight</TableColumn>
              <TableColumn>RPE</TableColumn>
            </TableHeader>
            <TableBody>
              {workout.exercises.map((exercise, index) => (
                <TableRow key={index}>
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell>{exercise.sets}</TableCell>
                  <TableCell>{exercise.reps}</TableCell>
                  <TableCell>{exercise.weight} kg</TableCell>
                  <TableCell>{exercise.rpe}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {!workout.completed && (
          <Button auto variant="bordered" color="primary">
            Mark as completed
          </Button>
        )}
      </div>
    </div>
  );
};

export default UpcomingWorkout;
