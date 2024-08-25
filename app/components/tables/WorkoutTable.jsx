import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";

const WorkoutTable = ({ data }) => {
  const columns = [
    { key: "exercise", label: "Exercise" },
    { key: "sets", label: "Sets" },
    { key: "reps", label: "Reps" },
    { key: "weight", label: "Weight" }
  ];
  return (
    <Table className="workout-table border-b-4 mb-5">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.exerciseName}</TableCell>
            <TableCell>{row.sets}</TableCell>
            <TableCell>{row.reps}</TableCell>
            <TableCell>{row.weight}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default WorkoutTable;
