import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";

const WorkoutsPage = () => {
  const myWorkouts = [
    {
      name: "Push Day",
      exercises: [
        { name: "Bench press" },
        {
          name: "Incline dumbbell press"
        },
        {
          name: "Seated shoulder press"
        },
        { name: "Triceps pushdown" },
        { name: "Shoulder flies" },
        {
          name: "Overhead triceps extension"
        }
      ]
    },
    {
      name: "Leg Day",
      exercises: [
        { name: "Squats" },
        { name: "Deadlifts" },
        { name: "Leg Press" },
        { name: "Leg Curls" },
        { name: "Leg Extensions" },
        { name: "Calf Raises" }
      ]
    }
  ];
  return (
    <div>
      <h1>Workouts</h1>
      <div className="flex gap-5">
        {myWorkouts.map((workout, index) => (
          <div key={index} className="flex flex-col flex-grow-1 gap-3">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-0">
                <span className="text-xl font-semibold text-slate-600">
                  {workout.name}
                </span>
                <Table className="workout-table">
                  <TableHeader>
                    <TableColumn>Name</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {workout.exercises.map((exercise, index) => (
                      <TableRow key={index}>
                        <TableCell>{exercise.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsPage;
