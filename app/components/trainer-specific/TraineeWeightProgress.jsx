import { Button, Chip } from "@nextui-org/react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { getCurrentWeekData } from "~/utils/dailyLogs";
import TraineeEditDailyWeightLogModal from "../modals/TraineeUpdateDailyWeightLogModal";
import TraineeInsertDailyWeightLogModal from "../modals/TraineeInsertDailyWeightLog";

const TraineeWeightProgress = () => {
  const trainee = useLoaderData().trainee;
  const dailyWeight = useLoaderData().dailyWeight;
  const dailyWeightLogs = useLoaderData().dailyWeightLogs;
  const currentWeekLogs = getCurrentWeekData(dailyWeightLogs);
  const [showInsertWeightModal, setShowInsertWeightModal] = useState(false);
  const [showEditWeightModal, setShowEditWeightModal] = useState(false);
  const navigate = useNavigate();
  const difference = (
    currentWeekLogs?.averageWeight - trainee?.start_weight
  ).toFixed(1);
  const diffPercentage = ((difference / trainee?.start_weight) * 100).toFixed(
    2
  );

  const onClickSeeProgress = () => {
    navigate("/trainer/trainee/weight-progress/" + trainee?.id);
  };
  return (
    <>
      {showEditWeightModal && (
        <TraineeEditDailyWeightLogModal
          onClose={() => setShowEditWeightModal(false)}
          traineeId={trainee?.id}
          logId={dailyWeight?.id}
        />
      )}
      {showInsertWeightModal && (
        <TraineeInsertDailyWeightLogModal
          traineeId={trainee?.id}
          onClose={() => setShowInsertWeightModal(false)}
        />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2>Weight Progress</h2>
          <Button
            auto
            color="primary"
            onClick={onClickSeeProgress}
            disabled={typeof difference === Number ? false : true}
          >
            View details
          </Button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span>Start: {trainee?.start_weight} kg</span>
            <span className="text-3xl font-bold">
              Week Average:{" "}
              {typeof currentWeekLogs?.averageWeight === Number
                ? `${currentWeekLogs.averageWeight} kg`
                : `${trainee?.start_weight} kg`}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span>{difference <= 0 ? "Total lost:" : "Total gained:"}</span>
            <span className="text-3xl font-bold">
              {typeof difference === Number ? difference : "0"} kg
            </span>
            <Chip color="success" variant="bordered">
              {typeof diffPercentage === Number ? diffPercentage : "0"} %
            </Chip>
          </div>
        </div>
        {dailyWeight ? (
          <Button
            auto
            variant="bordered"
            color="primary"
            onClick={() => setShowEditWeightModal(true)}
          >
            Edit today's weight ({dailyWeight?.value.toFixed(1)} kg)
          </Button>
        ) : (
          <Button
            auto
            variant="bordered"
            color="primary"
            onClick={() => setShowInsertWeightModal(true)}
          >
            Enter today's weight
          </Button>
        )}
      </div>
    </>
  );
};
export default TraineeWeightProgress;
