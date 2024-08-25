// chart.tsx
import { memo } from "react";
import loadable from "@loadable/component";

const Chart = loadable(() => import("react-apexcharts"), {
  ssr: false
});

export default memo(Chart);
