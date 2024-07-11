import { useLocation } from "@remix-run/react";
import WeeklyReport from "~/components/trainee-specific/WeeklyReport";

const WeeklyReportPage = () => {
  const location = useLocation();
  const weeklyCycle = location.pathname.split("/").pop();
  return <WeeklyReport weeklyCycle={weeklyCycle} />;
};
export default WeeklyReportPage;
