import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input
} from "@nextui-org/react";
import { Form, useActionData } from "@remix-run/react";

const Login = () => {
  const actionData = useActionData();
  return (
    <Card shadow className="w-full max-w-sm p-4">
      <CardHeader className="">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl ">
          Sign in
        </h1>
      </CardHeader>
      <Form method="POST" action="/login">
        <CardBody className="flex flex-col gap-2">
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

          {/* <div className="flex py-2 px-1 justify-between">
            <Checkbox
              classNames={{
                label: "text-small"
              }}
            >
              Remember me
            </Checkbox>
            <Link color="primary" href="#" size="sm">
              Forgot password?
            </Link>
          </div> */}
        </CardBody>
        <CardFooter className="flex justify-end gap-1">
          <button
            type="submit"
            className="w-full z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover btn btn-primary"
          >
            Sign in
          </button>
        </CardFooter>
      </Form>
    </Card>
  );
};

export default Login;
