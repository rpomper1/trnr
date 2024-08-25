import {
  Button,
  Card,
  CardBody,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import ExerciseItem from "~/components/general/ExerciseItem";
import CreateExerciseModal from "~/components/modals/CreateExerciseModal";
import { createExercise, getPrivateExercises } from "~/db/db.server";
import { getSession } from "~/sessions";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");
  const exercises = await getPrivateExercises(user.id);
  return { userId: user.id, exercises };
}

export async function action({ request }) {
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const description = String(formData.get("description"));
  const videoUrl = String(formData.get("videoUrl"));
  const isPrivate = Boolean(formData.get("isPrivate"));
  const userId = Number(formData.get("userId"));
  console.log(name, description, videoUrl, isPrivate, userId);
  await createExercise(name, description, videoUrl, isPrivate, userId);
  return null;
}

const WorkoutsPage = () => {
  const userId = useLoaderData().userId;
  const exercises = useLoaderData().exercises;
  const [showCreateExerciseModal, setShowCreateExerciseModal] = useState(false);

  return (
    <>
      {showCreateExerciseModal && (
        <CreateExerciseModal
          userId={userId}
          onClose={() => setShowCreateExerciseModal(false)}
        />
      )}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1>My Exercises</h1>
          <Button
            color="primary"
            onClick={() => setShowCreateExerciseModal(true)}
          >
            Create Exercise
          </Button>
        </div>
        <Card>
          <CardBody>
            {exercises.length > 0 ? (
              <div className="flex flex-col p-3 gap-10">
                {exercises.map((exercise) => (
                  <ExerciseItem key={exercise.id} exercise={exercise} />
                ))}
              </div>
            ) : (
              <div>
                <h2>No Exercises Found</h2>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default WorkoutsPage;
