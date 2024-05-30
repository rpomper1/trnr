import { Slider } from "@nextui-org/react";

export default function CustomSlider() {
  return (
    <Slider
      label="Cijenovni raspon"
      aria-label="Price range"
      step={0.5}
      maxValue={10}
      minValue={0}
      defaultValue={[0, 10]}
      showSteps={true}
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      formatOptions={{ style: "currency", currency: "EUR" }}
      tooltipValueFormatOptions={{
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2
      }}
      classNames={{
        base: "max-w-md",
        // filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
        labelWrapper: "mb-2",
        label: "font-medium text-default-500 text-small",
        value: "font-medium text-default-500 text-small",
        // thumb: [
        //   "transition-size",
        //   "bg-gradient-to-r from-secondary-400 to-primary-500",
        //   "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
        //   "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6"
        // ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          content: ["py-2 shadow-xl", "text-white"]
        }
      }}
    />
  );
}
