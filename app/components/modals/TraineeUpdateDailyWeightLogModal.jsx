import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { Form } from "@remix-run/react";

export default function TraineeEditDailyWeightLogModal({
  logId,
  traineeId,
  onClose
}) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <Form method="POST" action={"/trainer/trainee/" + Number(traineeId)}>
            <ModalHeader className="flex flex-col gap-1">
              Edit Daily Weight Log for {new Date().toLocaleDateString()}
            </ModalHeader>
            <ModalBody>
              <Input
                className="hidden"
                name="formRequest"
                id="formRequest"
                value={"editDailyWeightLog"}
              ></Input>
              <Input
                className="hidden"
                name="logId"
                id="logId"
                value={logId}
              ></Input>
              <Input
                name="weight"
                id="weight"
                type={"number"}
                label={"Weight (kg)"}
              ></Input>
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
