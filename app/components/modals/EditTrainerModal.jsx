import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { formatDate } from "~/utils/dateUtils";

export default function EditTrainerModal({ trainer, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit Trainer
            </ModalHeader>
            <ModalBody>
              <div>
                <p>Name: {trainer.name}</p>
              </div>
              <div>
                <p>Email: {trainer.email}</p>
              </div>
              <div>
                <p>Subscription plan: {trainer.subscription_plan}</p>
              </div>
              <div>
                <p>Subscribed until: {formatDate(trainer.subscribed_until)}</p>
              </div>
              <div>
                <p>Status: {trainer.status}</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
