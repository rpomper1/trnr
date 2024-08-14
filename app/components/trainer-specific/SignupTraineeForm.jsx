import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem
} from "@nextui-org/react";
import { Form, useActionData } from "@remix-run/react";
import { useState } from "react";

const SignupTraineeForm = ({ trainer }) => {
  const [formStep, setFormStep] = useState(1);
  const actionData = useActionData();
  const goalOptions = [
    { label: "Lose weight", value: "lose_weight" },
    { label: "Gain muscle", value: "gain_muscle" },
    { label: "Maintain weight", value: "maintain_weight" }
  ];
  const activityLevelOptions = [
    { label: "Sedentary", value: "sedentary" },
    { label: "Lightly active", value: "lightly_active" },
    { label: "Moderately active", value: "moderately_active" },
    { label: "Very active", value: "very_active" },
    { label: "Super active", value: "super_active" }
  ];

  const genderOptions = [
    { label: "Female", value: "F" },
    { label: "Male", value: "M" }
  ];
  return (
    <Card shadow className="w-full max-w-sm p-4">
      <CardHeader className="">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl ">
          Sign up to {trainer?.first_name} {trainer?.last_name}
        </h1>
      </CardHeader>
      <Form method="POST" action="/signup/trainee">
        <CardBody className="flex flex-col gap-5">
          <div
            className={`${formStep === 1 ? "" : "hidden"} flex flex-col gap-5`}
          >
            <Input className="hidden" name="trainerId" value={trainer?.id} />
            <div>
              <Input
                autoFocus
                label="First Name"
                placeholder="Enter your first name"
                variant="bordered"
                name="firstName"
              />
              {actionData?.errors?.email ? (
                <em>{actionData?.errors.email}</em>
              ) : null}
            </div>
            <div>
              <Input
                autoFocus
                label="Last Name"
                placeholder="Enter your last name"
                variant="bordered"
                name="lastName"
              />
              {actionData?.errors?.email ? (
                <em>{actionData?.errors.email}</em>
              ) : null}
            </div>
            <div>
              <Input
                autoFocus
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                name="email"
              />
              {actionData?.errors?.email ? (
                <em>{actionData?.errors.email}</em>
              ) : null}
            </div>
            <div>
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                name="password"
              />
              {actionData?.errors?.password ? (
                <em>{actionData?.errors.password}</em>
              ) : null}
            </div>
            <div>
              <Input
                label="Repeat Password"
                placeholder="Repeat your password"
                type="password"
                variant="bordered"
                name="repeatPassword"
              />
              {actionData?.errors?.repeatPassword ? (
                <em>{actionData?.errors.repeatPassword}</em>
              ) : null}
            </div>
          </div>
          <div
            className={`${formStep === 2 ? "" : "hidden"} flex flex-col gap-5`}
          >
            <div>
              <Select
                label="Select your goal"
                className="max-w-xs"
                name="goal"
                variant="bordered"
              >
                {goalOptions.map((goalOption) => (
                  <SelectItem key={goalOption.value}>
                    {goalOption.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Select
                label="Select your gender"
                className="max-w-xs"
                name="gender"
                variant="bordered"
              >
                {genderOptions.map((genderOption) => (
                  <SelectItem key={genderOption.value}>
                    {genderOption.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Input
                autoFocus
                label="Weight"
                placeholder="Enter your weight in kg"
                variant="bordered"
                type="number"
                name="weight"
                min={0}
              />
              {actionData?.errors?.email ? (
                <em>{actionData?.errors.email}</em>
              ) : null}
            </div>
            <div>
              <Input
                autoFocus
                label="Height"
                placeholder="Enter your height in cm"
                variant="bordered"
                type="number"
                name="height"
                min={0}
              />
              {actionData?.errors?.email ? (
                <em>{actionData?.errors.email}</em>
              ) : null}
            </div>
            <div>
              <Input
                autoFocus
                label="Age"
                placeholder="Enter your age"
                variant="bordered"
                type="number"
                name="age"
                min={12}
                max={100}
              />
              {actionData?.errors?.email ? (
                <em>{actionData?.errors.email}</em>
              ) : null}
            </div>
            <div>
              <Select
                label="Select your activity level"
                className="max-w-xs"
                name="activityLevel"
                variant="bordered"
              >
                {activityLevelOptions.map((activityLevelOption) => (
                  <SelectItem key={activityLevelOption.value}>
                    {activityLevelOption.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-end gap-1">
          {formStep === 2 && (
            <>
              <Button color="" onClick={() => setFormStep(formStep - 1)}>
                Back
              </Button>
              <button
                type="submit"
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover btn btn-primary"
              >
                Finish
              </button>
            </>
          )}
          {formStep === 1 && (
            <Button color="primary" onClick={() => setFormStep(formStep + 1)}>
              Next
            </Button>
          )}
        </CardFooter>
      </Form>
    </Card>
  );
};
export default SignupTraineeForm;
