import { Button, Chip } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";

const WeightProgress = () => {
  const navigate = useNavigate();
  const data = {
    startingWeight: 125.6,
    previousWeek: 6,
    previousWeekAverageWeight: 116.5,
    hasLoggedWeightToday: false
  };
  const difference = (
    data.previousWeekAverageWeight - data.startingWeight
  ).toFixed(2);
  const diffPercentage = ((difference / data.startingWeight) * 100).toFixed(2);

  const onClickSeeProgress = () => {
    console.log("See progress clicked");
    navigate("/trainee/weight-progress");
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h2>Weight Progress</h2>
        <Button auto color="primary" onClick={onClickSeeProgress}>
          View all
        </Button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span>Start: {data.startingWeight} kg</span>
          <span className="text-3xl font-bold">
            Week {data.previousWeek}: {data.previousWeekAverageWeight} kg
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span>{difference < 0 ? "Total lost:" : "Total gained:"}</span>
          <span className="text-3xl font-bold">{difference} kg</span>
          <Chip color="success" variant="bordered">
            {diffPercentage} %
          </Chip>
        </div>
      </div>
      <Button auto variant="bordered" color="primary">
        {!data.hasLoggedWeightToday
          ? "Enter today's weight"
          : "Edit today's weight"}
      </Button>
    </div>
  );
};
export default WeightProgress;
