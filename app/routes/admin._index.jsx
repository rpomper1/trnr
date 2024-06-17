import { Card, CardBody, CardHeader } from "@nextui-org/react";
import UnauthorizedTrainers from "~/components/admin-specific/UnauthorizedTrainers";
import TrainerTable from "~/components/tables/TrainerTable";

const AdminDashboardPage = () => {
  return (
    <main className="flex flex-col gap-10">
      <section>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
      </section>

      <section>
        <Card className="p-4">
          <CardHeader>
            <h1>Trainers</h1>
          </CardHeader>
          <CardBody>
            <TrainerTable />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card className="p-4">
          <CardHeader>
            <h1>Unauthorized Trainers</h1>
          </CardHeader>
          <CardBody>
            <UnauthorizedTrainers />
          </CardBody>
        </Card>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
