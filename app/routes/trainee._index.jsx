import { Card, CardBody } from "@nextui-org/react";
import WeeklySummary from "~/components/trainee-specific/WeeklySummary";

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
    </main>
  );
};

export default TraineeDashboard;
