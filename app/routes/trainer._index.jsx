import { Card, CardBody, CardHeader } from "@nextui-org/react";
import TraineeTable from "~/components/tables/TraineeTable";

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
            <h1>Trainees</h1>
          </CardHeader>
          <CardBody>
            <TraineeTable />
          </CardBody>
        </Card>
      </section>
    </main>
  );
};
export default TrainerDashboard;
