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

export default function AddWorkoutModal({ onClose, traineeId }) {
  const exercises = useLoaderData().exercises;
  const exerciseOptions = separateExercisesByPrivacy(exercises);

  const [workoutInstances, setWorkoutInstances] = useState([
    { exerciseId: null, sets: null, reps: null, weight: null }
  ]);
  const handleAddRow = () => {
    setWorkoutInstances([
      ...workoutInstances,
      { exerciseId: null, sets: null, reps: null, weight: null }
    ]);
  };
  function separateExercisesByPrivacy(exercises) {
    const publicExercises = { title: "Public exercises", data: [] };
    const privateExercises = { title: "My exercises", data: [] };

    exercises.forEach((item) => {
      const exercise = {
        label: item.name,
        value: item.id
      };

      if (item.is_private) {
        privateExercises.data.push(exercise);
      } else {
        publicExercises.data.push(exercise);
      }
    });

    return [privateExercises, publicExercises];
  }
  return (
    <Modal isOpen={true} onClose={onClose} size="4xl">
      <ModalContent>
        {(onClose) => (
          <Form method="post" action={"/trainer/trainee/" + traineeId}>
            <ModalHeader className="flex flex-col gap-1">
              Add Workout
            </ModalHeader>
            <ModalBody>
              <Input
                className="hidden"
                name="formRequest"
                id="formRequest"
                value={"addTraineeWorkout"}
              ></Input>
              <Input
                name="traineeId"
                id="traineeId"
                className="hidden"
                value={traineeId}
              />
              <Input
                className="hidden"
                name="trainingInstances"
                id="trainingInstances"
                value={JSON.stringify(workoutInstances)}
              />
              <Input
                name="workoutName"
                id="workoutName"
                label="Workout name"
                placeholder="Enter workout name"
              />
              <DatePicker
                name="workoutDate"
                id="workoutDate"
                label="Scheduled workout date"
              />
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
                      {workoutInstances.map((instance, index) => (
                        <TableRow key={index}>
                          <TableCell className="w-[20rem]">
                            <Select
                              name="exerciseOption"
                              id="exerciseOption"
                              placeholder="Select exercise"
                              onChange={(e) => {
                                const value = e.target.value;
                                const newInstances = [...workoutInstances];
                                newInstances[index].exerciseId = value;
                                setWorkoutInstances(newInstances);
                              }}
                            >
                              {exerciseOptions.map((exerciseOption, index) => (
                                <SelectSection
                                  title={exerciseOption.title}
                                  key={index}
                                >
                                  {exerciseOption.data.map((exercise) => (
                                    <SelectItem key={exercise.value}>
                                      {exercise.label}
                                    </SelectItem>
                                  ))}
                                </SelectSection>
                              ))}
                            </Select>
                          </TableCell>
                          <TableCell>
                            <Input
                              name={`sets-${index}`}
                              id={`sets-${index}`}
                              type="number"
                              placeholder="Enter sets"
                              onChange={(e) => {
                                const value = e.target.value;
                                const newInstances = [...workoutInstances];
                                newInstances[index].sets = value;
                                setWorkoutInstances(newInstances);
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              name={`reps-${index}`}
                              id={`reps-${index}`}
                              type="number"
                              placeholder="Enter reps"
                              onChange={(e) => {
                                const value = e.target.value;
                                const newInstances = [...workoutInstances];
                                newInstances[index].reps = value;
                                setWorkoutInstances(newInstances);
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              name={`weight-${index}`}
                              id={`weight-${index}`}
                              type="number"
                              placeholder="Enter weight"
                              onChange={(e) => {
                                const value = e.target.value;
                                const newInstances = [...workoutInstances];
                                newInstances[index].weight = value;
                                setWorkoutInstances(newInstances);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button onClick={handleAddRow}>Add row</Button>
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
                Submit
              </button>
            </ModalFooter>
          </Form>
        )}
      </ModalContent>
    </Modal>
  );
}
