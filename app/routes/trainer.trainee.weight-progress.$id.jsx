import { Button } from "@nextui-org/react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import WeightProgressChart from "~/components/charts/WeightProgressChart";
import { getDailyWeightLogs, getTrainee } from "~/db/db.server";
import { getChartData } from "~/utils/chartUtils";
export async function loader({ request, params }) {
  const traineeId = params.id;
  const trainee = await getTrainee(Number(traineeId));
  const dailyWeightLogs = await getDailyWeightLogs(trainee[0].id);
  return { trainee, dailyWeightLogs };
}
const WeightProgressPage = () => {
  const navigate = useNavigate();
  const dailyWeightLogs = useLoaderData().dailyWeightLogs;
  const data = getChartData(dailyWeightLogs);
  return (
    <div>
      <Button color="primary" onClick={() => navigate(-1)}>
        Back
      </Button>
      <h1>Weight Progress</h1>
      <WeightProgressChart data={data} />
    </div>
  );
};

export default WeightProgressPage;
