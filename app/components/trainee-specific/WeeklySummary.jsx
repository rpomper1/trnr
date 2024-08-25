import { useLoaderData } from "@remix-run/react";
const goalOptions = [
  { label: "Lose weight", value: "lose_weight" },
  { label: "Gain muscle", value: "gain_muscle" },
  { label: "Maintain weight", value: "maintain_weight" }
];
const WeeklySummary = () => {
  const trainee = useLoaderData().trainee;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">
            Goal:{" "}
            {goalOptions.find((goal) => goal.value === trainee?.goal)?.label}
          </span>
        </div>
      </div>
      <div className="flex justify-between py-10 px-5 items-center">
        <div className="flex flex-col gap-2 items-center">
          <span>Target Calories</span>
          <span className="text-5xl font-bold">
            {trainee?.target_calories} kcal
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span>Target Protein</span>
          <span className="text-5xl font-bold">
            {trainee?.target_protein} g
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span>Target Carbs</span>
          <span className="text-5xl font-bold">{trainee?.target_carbs} g</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span>Target Fats</span>
          <span className="text-5xl font-bold">{trainee?.target_fats} g</span>
        </div>
      </div>
    </div>
  );
};
export default WeeklySummary;
