import { Outlet } from "@remix-run/react";
import TrainerLayout from "~/layouts/TrainerLayout";

const TrainerWrapper = () => (
  <TrainerLayout>
    <Outlet />
  </TrainerLayout>
);

export default TrainerWrapper;
