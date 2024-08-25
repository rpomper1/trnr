import {
  Button,
  DatePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  SelectSection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { formatDate } from "~/utils/dateUtils";

export default function CompleteWorkoutModal({
  onClose,
  traineeId,
  workout,
  path
}) {
  const exercises = useLoaderData().exercises;
  const [workoutInstances, setWorkoutInstances] = useState([
    ...workout.data.map((item) => ({
      exerciseId: item.exerciseId,
      exerciseName: item.exerciseName,
      sets: item.sets,
      reps: item.reps,
      weight: item.weight,
      instanceId: item.id
    }))
  ]);
  return (
    <Modal isOpen={true} onClose={onClose} size="4xl">
      <ModalContent>
        {(onClose) => (
          <Form method="post" action={path}>
            <ModalHeader className="flex flex-col gap-1">
              Complete Workout
            </ModalHeader>
            <ModalBody>
              <Input
                className="hidden"
                name="formRequest"
                id="formRequest"
                value={"completeWorkout"}
              ></Input>
              <Input
                name="traineeId"
                id="traineeId"
                className="hidden"
                value={traineeId}
              />
              <Input
                name="workoutId"
                id="workoutId"
                className="hidden"
                value={workout.id}
              />
              <Input
                className="hidden"
                name="trainingInstances"
                id="trainingInstances"
                value={JSON.stringify(workoutInstances)}
              />
              <span>
                {workout.name} - {formatDate(workout.scheduled_date)}
              </span>
              {workoutInstances && (
                <>
                  <Table>
                    <TableHeader>
                      <TableColumn className="w-[20rem]">Exercise</TableColumn>
                      <TableColumn>Sets</TableColumn>
                      <TableColumn>Reps</TableColumn>
                      <TableColumn>Weight</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {workoutInstances.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="w-[20rem]">
                            {item.exerciseName}
                          </TableCell>
                          <TableCell>
                            <Input
                              name={`sets-${index}`}
                              id={`sets-${index}`}
                              type="number"
                              placeholder="Enter sets"
                              defaultValue={item.sets}
                              onChange={(e) => {
                                const newWorkoutInstances = [
                                  ...workoutInstances
                                ];
                                newWorkoutInstances[index].sets = Number(
                                  e.target.value
                                );
                                newWorkoutInstances[index].modified = true;
                                setWorkoutInstances(newWorkoutInstances);
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              name={`reps-${index}`}
                              id={`reps-${index}`}
                              type="number"
                              placeholder="Enter reps"
                              defaultValue={item.reps}
                              onChange={(e) => {
                                const newWorkoutInstances = [
                                  ...workoutInstances
                                ];
                                newWorkoutInstances[index].reps = Number(
                                  e.target.value
                                );
                                newWorkoutInstances[index].modified = true;
                                setWorkoutInstances(newWorkoutInstances);
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              name={`weight-${index}`}
                              id={`weight-${index}`}
                              type="number"
                              placeholder="Enter weight"
                              defaultValue={item.weight}
                              onChange={(e) => {
                                const newWorkoutInstances = [
                                  ...workoutInstances
                                ];
                                newWorkoutInstances[index].weight = Number(
                                  e.target.value
                                );
                                newWorkoutInstances[index].modified = true;
                                setWorkoutInstances(newWorkoutInstances);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <button
                type="submit"
                className="w-fit z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover btn btn-primary"
              >
                Complete Workout
              </button>
            </ModalFooter>
          </Form>
        )}
      </ModalContent>
    </Modal>
  );
}
