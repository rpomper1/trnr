import { Button } from "@nextui-org/react";

const ExerciseItem = ({ exercise }) => {
  console.log("exercise item: ", exercise);
  console.log(exercise.video_link);
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-semibold text-2xl">{exercise.name}</h3>
      <span>{exercise.description}</span>
      {exercise?.video_link && (
        <Button
          color="primary"
          variant="bordered"
          onClick={() => handleClick(exercise.video_link)}
        >
          View exercise
        </Button>
      )}
    </div>
  );
};

export default ExerciseItem;
