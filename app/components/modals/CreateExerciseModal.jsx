import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea
} from "@nextui-org/react";
import { Form } from "@remix-run/react";
import { useState } from "react";

export default function CreateExerciseModal({ userId, onClose }) {
  const [isPrivateSelected, setIsPrivateSelected] = useState(false);

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <Form method="post" action="/trainer/exercises">
            <ModalHeader className="flex flex-col gap-1">
              Create Exercise
            </ModalHeader>
            <ModalBody>
              <Input
                className="hidden"
                name="userId"
                id="userId"
                value={userId}
              ></Input>
              <Input
                name="name"
                id="name"
                type={"text"}
                label={"Name"}
                placeholder={"Enter exercise name"}
              ></Input>
              <Textarea
                label="Description"
                placeholder="Enter exercise description"
                id="description"
                name="description"
              ></Textarea>
              <Input
                name="videoUrl"
                id="videoUrl"
                type={"text"}
                label={"Video URL"}
                placeholder={"Enter exercise video URL"}
              ></Input>
              <div className="flex flex-col gap-1">
                <Checkbox
                  isSelected={isPrivateSelected}
                  onValueChange={setIsPrivateSelected}
                  value={isPrivateSelected}
                  name="isPrivate"
                  id="isPrivate"
                >
                  Private
                </Checkbox>
                <p className="text-default-500 text-sm ps-7">
                  {isPrivateSelected
                    ? "This exercise will be private and it will be used by you."
                    : "This exercise will be public and everyone will be able to use it."}
                </p>
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
                Create
              </button>
            </ModalFooter>
          </Form>
        )}
      </ModalContent>
    </Modal>
  );
}
