import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Snippet
} from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";

export default function AddNewTraineeModal({ onClose }) {
  const trainerId = useLoaderData().sessionTrainer.id;
  return (
    <Modal isOpen={true} onClose={onClose} size="xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add Trainee
            </ModalHeader>
            <ModalBody>
              <h4>Send this link to your client to signup as your trainee!</h4>
              <Snippet>{`${window.location.origin}/signup/trainee?trainerId=${trainerId}`}</Snippet>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
