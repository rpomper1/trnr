import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { formatDate } from "~/utils/dateUtils";

export default function EditTraineeModal({ trainee, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit Trainee
            </ModalHeader>
            <ModalBody>
              <div>
                <p>Name: {trainee.name}</p>
              </div>
              <div>
                <p>Email: {trainee.email}</p>
              </div>
              <div>
                <p>Subscription plan: {trainee.subscription_plan}</p>
              </div>
              <div>
                <p>Subscribed until: {formatDate(trainee.subscribed_until)}</p>
              </div>
              <div>
                <p>Status: {trainee.status}</p>
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
