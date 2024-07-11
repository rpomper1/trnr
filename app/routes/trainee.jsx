import { Outlet } from "@remix-run/react";
import TraineeLayout from "~/layouts/TraineeLayout";

const TraineeWrapper = () => (
  <TraineeLayout>
    <Outlet />
  </TraineeLayout>
);

export default TraineeWrapper;
