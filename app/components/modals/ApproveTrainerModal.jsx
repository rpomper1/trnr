import {
  Button,
  DatePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { Form } from "@remix-run/react";

const ApproveTrainerModal = ({ onClose, trainer }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Approve</ModalHeader>
            <Form method="post" action="/admin/trainer-requests">
              <ModalBody>
                <Input
                  className="hidden"
                  name="trainerId"
                  id="trainerId"
                  value={trainer.id}
                ></Input>
                <p>{trainer.name}</p>
                <DatePicker
                  name="subscribed_until"
                  id="subscribed_until"
                  label="Paid until"
                  className="max-w-[284px]"
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
                  Approve
                </button>
              </ModalFooter>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ApproveTrainerModal;
