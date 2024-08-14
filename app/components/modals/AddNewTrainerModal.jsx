import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Snippet
} from "@nextui-org/react";

export default function AddNewTrainerModal({ onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose} size="xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add Trainer
            </ModalHeader>
            <ModalBody>
              <h4>Send this link to your client to signup as trainer!</h4>
              <Snippet>{`${window.location.origin}/signup/trainer`}</Snippet>
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
