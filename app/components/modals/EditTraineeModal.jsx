import { parseAbsoluteToLocal } from "@internationalized/date";
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
const statusOptions = [
  { value: "active", label: "Active", key: "active" },
  { value: "inactive", label: "Inactive", key: "inactive" },
  { value: "paused", label: "Paused", key: "paused" }
];
export default function EditTraineeModal({ trainee, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <Form method="post" action="/trainer?index">
            <ModalHeader className="flex flex-col gap-1">
              Edit Trainee
            </ModalHeader>
            <ModalBody>
              <Input
                className="hidden"
                name="traineeId"
                id="traineeId"
                value={trainee.id}
              ></Input>
              <div>
                <DatePicker
                  name="paid_until"
                  id="paid_until"
                  granularity="day"
                  label="Subscribed until"
                  defaultValue={parseAbsoluteToLocal(trainee.subscribed_until)}
                />
              </div>
              <div>
                <Select
                  name="status"
                  id="status"
                  label="Status"
                  placeholder="Select a status"
                  defaultSelectedKeys={[trainee.status.toLowerCase()]}
                >
                  {statusOptions.map((option) => (
                    <SelectItem key={option.key}>{option.label}</SelectItem>
                  ))}
                </Select>
              </div>
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
