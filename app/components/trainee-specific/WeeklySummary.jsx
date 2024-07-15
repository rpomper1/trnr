import { Button } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";

const WeeklySummary = () => {
  const navigate = useNavigate();
  const weeklySummary = {
    goal: "Lose weight",
    weekCycle: 7,
    scheduledWorkouts: 3,
    completedWorkouts: 2,
    targetCalories: 2000,
    targetProtein: 150,
    targetCarbs: 200,
    targetFat: 50
  };
  const handleClick = (weekCycle) => {
    navigate(`/trainee/week/${weekCycle}`);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <span className="text-foreground-500">
            Goal: {weeklySummary.goal}
          </span>
          <span className="text-4xl font-bold">
            Week {weeklySummary.weekCycle}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            auto
            color="primary"
            onClick={() => handleClick(weeklySummary.weekCycle)}
          >
            View Details
          </Button>
          {weeklySummary.weekCycle !== 1 && (
            <Button
              auto
              color="primary"
              variant="bordered"
              onClick={() => handleClick(weeklySummary.weekCycle - 1)}
            >
              View Previous Week
            </Button>
          )}
        </div>
      </div>
      <div className="flex justify-between py-10 px-5 items-center">
        <div className="flex flex-col gap-2 items-center">
          <span>Workouts completed </span>
          <span className="text-5xl font-bold">
            {weeklySummary.completedWorkouts} /{" "}
            {weeklySummary.scheduledWorkouts}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span>Target Calories</span>
          <span className="text-5xl font-bold">
            {weeklySummary.targetCalories}kcal
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span>Target Macros</span>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold">
              P {weeklySummary.targetProtein}g
            </span>
            <span className="text-2xl font-bold">
              C {weeklySummary.targetCarbs}g
            </span>
            <span className="text-2xl font-bold">
              F {weeklySummary.targetFat}g
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between items-center">
        <span>{getTodaysDate()}</span>
        <Button auto>Enter Today's Weight</Button>
      </div> */}
    </div>
  );
};
export default WeeklySummary;
