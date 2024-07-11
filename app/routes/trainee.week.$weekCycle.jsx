import { useLocation } from "@remix-run/react";
import WeeklyReport from "~/components/trainee-specific/WeeklyReport";

const WeeklyReportPage = () => {
  //   const weeklyCycle = useLocation().params.weekCycle;
  const location = useLocation();
  console.log(location);
  const weeklyCycle = location.pathname.split("/").pop();
  return <WeeklyReport weeklyCycle={weeklyCycle} />;
};
export default WeeklyReportPage;
