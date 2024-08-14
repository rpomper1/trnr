import { Card, CardBody } from "@nextui-org/react";

const SignupRequestCompleted = () => (
  <div className="flex justify-center items-center min-h-screen">
    <Card className="p-4">
      <CardBody>
        <h1>Request Completed</h1>
        <p>Your request has been completed successfully.</p>
        <p>You will be notified when your account is activated.</p>
      </CardBody>
    </Card>
  </div>
);
export default SignupRequestCompleted;
