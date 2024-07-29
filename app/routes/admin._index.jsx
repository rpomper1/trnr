import { parseDateTime } from "@internationalized/date";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { redirect } from "@remix-run/server-runtime";
import UnauthorizedTrainers from "~/components/admin-specific/UnauthorizedTrainers";
import TrainerTable from "~/components/tables/TrainerTable";
import {
  getTrainers,
  getUnapprovedTrainers,
  updateTrainer
} from "~/db/db.server";
import { parseDateTimeFromTimezone } from "~/utils/dateUtils";
import { capitalize } from "~/utils/stringUtils";

export async function loader() {
  const unapprovedTrainers = await getUnapprovedTrainers();
  const trainersRaw = await getTrainers();
  const trainers = trainersRaw.map((trainer) => {
    return {
      id: trainer.id,
      name: `${trainer.first_name} ${trainer.last_name}`,
      subscription_plan: trainer.subscription_plan,
      paid_until: trainer.paid_until,
      status: trainer.status,
      email: trainer.email
    };
  });
  return { unapprovedTrainers, trainers };
}
export async function action({ request }) {
  const formData = await request.formData();
  const subscriptionPlan = formData.get("subscription_plan");
  const status = formData.get("status");
  const trainerId = Number(formData.get("trainerId"));
  const paidUntil = formData.get("paid_until");
  console.log("subscriptionPlan", subscriptionPlan);
  console.log("status", status);
  console.log("trainerId", trainerId);
  console.log("paidUntil", paidUntil);
  await updateTrainer(
    trainerId,
    capitalize(subscriptionPlan),
    parseDateTimeFromTimezone(paidUntil),
    status
  );
  return null;
}
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
