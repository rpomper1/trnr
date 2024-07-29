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
import { formatDate } from "~/utils/dateUtils";

const subscriptionPlans = [
  { value: "basic", label: "Basic", key: "basic" },
  { value: "premium", label: "Premium", key: "premium" }
];
const statusOptions = [
  { value: "active", label: "Active", key: "active" },
  { value: "inactive", label: "Inactive", key: "inactive" },
  { value: "paused", label: "Paused", key: "paused" }
];

export default function EditTrainerModal({ trainer, onClose }) {
  console.log("trainer", trainer);
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <Form method="post" action="/admin?index">
            <ModalHeader className="flex flex-col gap-1">
              Edit Trainer: {trainer.name}
            </ModalHeader>
            <ModalBody>
              <Input
                className="hidden"
                name="trainerId"
                id="trainerId"
                value={trainer.id}
              ></Input>
              <div>
                <Select
                  label="Subscription Plan"
                  placeholder="Select a plan"
                  defaultSelectedKeys={[
                    trainer.subscription_plan.toLowerCase()
                  ]}
                  name="subscription_plan"
                  id="subscription_plan"
                >
                  {subscriptionPlans.map((option) => (
                    <SelectItem key={option.key}>{option.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <DatePicker
                  name="paid_until"
                  id="paid_until"
                  granularity="day"
                  label="Subscribed until"
                  defaultValue={parseAbsoluteToLocal(trainer.paid_until)}
                />
              </div>
              <div>
                <Select
                  name="status"
                  id="status"
                  label="Status"
                  placeholder="Select a status"
                  defaultSelectedKeys={[trainer.status.toLowerCase()]}
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
