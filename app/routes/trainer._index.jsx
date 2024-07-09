import { Card, CardBody, CardHeader } from "@nextui-org/react";
import TraineeTable from "~/components/tables/TraineeTable";
import SubscriptionDetails from "~/components/trainer-specific/SubscriptionDetails";
import UnauthorizedTrainees from "~/components/trainer-specific/UnauthorizedTrainees";

const TrainerDashboard = () => {
  return (
    <main className="flex flex-col gap-10">
      <section>
        <h1>Trainer Dashboard</h1>
        <p>Welcome to the trainer dashboard!</p>
      </section>

      <section>
        <Card className="p-4">
          <CardHeader>
            <h2>Trainees</h2>
          </CardHeader>
          <CardBody>
            <TraineeTable />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardHeader>
            <h2>Unauthorized Trainees</h2>
          </CardHeader>
          <CardBody>
            <UnauthorizedTrainees />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardHeader>
            <h2>My Plan</h2>
          </CardHeader>
          <CardBody>
            <SubscriptionDetails />
          </CardBody>
        </Card>
      </section>
    </main>
  );
};
export default TrainerDashboard;
