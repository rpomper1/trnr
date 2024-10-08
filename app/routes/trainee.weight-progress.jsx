import { Button } from "@nextui-org/react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import WeightProgressChart from "~/components/charts/WeightProgressChart";
import { getDailyWeightLogs } from "~/db/db.server";
import { getSession } from "~/sessions";
import { getChartData } from "~/utils/chartUtils";
export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const trainee = session.get("trainee");
  const dailyWeightLogs = await getDailyWeightLogs(trainee.id);
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
