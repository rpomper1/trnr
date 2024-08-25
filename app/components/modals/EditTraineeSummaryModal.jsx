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
  SelectItem
} from "@nextui-org/react";
import { Form } from "@remix-run/react";
const goalOptions = [
  { label: "Lose weight", value: "lose_weight" },
  { label: "Gain muscle", value: "gain_muscle" },
  { label: "Maintain weight", value: "maintain_weight" }
];
export default function EditTraineeSummaryModal({ trainee, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <Form method="post" action={`/trainer/trainee/${trainee.id}`}>
            <ModalHeader className="flex flex-col gap-1">
              Edit Trainee
            </ModalHeader>
            <ModalBody>
              <Input
                className="hidden"
                name="formRequest"
                id="formRequest"
                value={"editTraineeSummary"}
              ></Input>
              <Input
                className="hidden"
                name="traineeId"
                id="traineeId"
                value={trainee.id}
              ></Input>
              <Select
                label="Select your goal"
                name="goal"
                variant="bordered"
                defaultSelectedKeys={[trainee.goal]}
              >
                {goalOptions.map((goalOption) => (
                  <SelectItem key={goalOption.value}>
                    {goalOption.label}
                  </SelectItem>
                ))}
              </Select>
              <Input
                name="targetCalories"
                id="targetCalories"
                type="number"
                label="Target calories"
                defaultValue={trainee.target_calories}
              />
              <Input
                name="targetProtein"
                id="targetProtein"
                type="number"
                label="Target protein"
                defaultValue={trainee.target_protein}
              />
              <Input
                name="targetCarbs"
                id="targetCarbs"
                type="number"
                label="Target carbs"
                defaultValue={trainee.target_carbs}
              />
              <Input
                name="targetFats"
                id="targetFats"
                type="number"
                label="Target fats"
                defaultValue={trainee.target_fats}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <button
                type="submit"
                className="w-fit z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover btn btn-primary"
              >
                Edit
              </button>
            </ModalFooter>
          </Form>
        )}
      </ModalContent>
    </Modal>
  );
}
