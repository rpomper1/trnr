import { Button } from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import EditTraineeSummaryModal from "../modals/EditTraineeSummaryModal";
const goalOptions = [
  { label: "Lose weight", value: "lose_weight" },
  { label: "Gain muscle", value: "gain_muscle" },
  { label: "Maintain weight", value: "maintain_weight" }
];
const TraineeWeeklySummary = () => {
  const traineeDetails = useLoaderData().trainee;
  const [showEditTraineeSummaryModal, setShowEditTraineeSummaryModal] =
    useState(false);

  return (
    <>
      {showEditTraineeSummaryModal && (
        <EditTraineeSummaryModal
          trainee={traineeDetails}
          onClose={() => setShowEditTraineeSummaryModal(false)}
        />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-semibold">
              Goal:{" "}
              {
                goalOptions.find((goal) => goal.value === traineeDetails?.goal)
                  ?.label
              }
            </span>
          </div>
          <Button
            color="primary"
            className="w-fit"
            onClick={() => setShowEditTraineeSummaryModal(true)}
          >
            Edit
          </Button>
        </div>
        <div className="flex justify-between py-10 px-5 items-center">
          <div className="flex flex-col gap-2 items-center">
            <span>Target Calories</span>
            <span className="text-5xl font-bold">
              {traineeDetails?.target_calories} kcal
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span>Target Protein</span>
            <span className="text-5xl font-bold">
              {traineeDetails?.target_protein} g
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span>Target Carbs</span>
            <span className="text-5xl font-bold">
              {traineeDetails?.target_carbs} g
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span>Target Fats</span>
            <span className="text-5xl font-bold">
              {traineeDetails?.target_fats} g
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default TraineeWeeklySummary;
