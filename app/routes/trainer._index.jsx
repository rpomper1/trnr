import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import TraineeTable from "~/components/tables/TraineeTable";
import SubscriptionDetails from "~/components/trainer-specific/SubscriptionDetails";
import UnauthorizedTrainees from "~/components/trainer-specific/UnauthorizedTrainees";
import { getTrainees, getUnapprovedTrainees } from "~/db/db.server";
import { getSession } from "~/sessions";
export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const sessionUser = session.get("user");
  const sessionTrainer = session.get("trainer");
  const unapprovedTrainees = await getUnapprovedTrainees(sessionTrainer?.id);
  const traineesRaw = await getTrainees(sessionTrainer?.id);
  const trainees = traineesRaw.map((trainee) => {
    return {
      id: trainee.id,
      name: `${trainee.first_name} ${trainee.last_name}`,
      email: trainee.email,
      paid_until: trainee.paid_until,
      status: trainee.status
    };
  });

  return { sessionUser, sessionTrainer, trainees, unapprovedTrainees };
}
const TrainerDashboard = () => {
  const sessionUser = useLoaderData().sessionUser;
  return (
    <main className="flex flex-col gap-10">
      <section>
        <h1>Trainer Dashboard</h1>
        <p>Welcome {sessionUser?.firstName}!</p>
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
