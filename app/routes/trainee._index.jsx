import { Card, CardBody } from "@nextui-org/react";
import UpcomingWorkout from "~/components/trainee-specific/UpcomingWorkout";
import WeeklySummary from "~/components/trainee-specific/WeeklySummary";
import WeightProgress from "~/components/trainee-specific/WeightProgress";

const TraineeDashboard = () => {
  return (
    <main className="flex flex-col gap-10">
      <section>
        <h1>Trainee Dashboard</h1>
        <p>Welcome to the trainee dashboard!</p>
      </section>
      <section>
        <Card className="p-4">
          <CardBody>
            <WeeklySummary />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardBody>
            <WeightProgress />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardBody>
            <UpcomingWorkout />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardBody>
            <h2>My Plan</h2>
            <p>Subscription details will go here.</p>
          </CardBody>
        </Card>
      </section>
    </main>
  );
};

export default TraineeDashboard;
