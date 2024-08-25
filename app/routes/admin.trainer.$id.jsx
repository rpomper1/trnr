import { useLoaderData, useNavigate } from "@remix-run/react";
import { Button, Card } from "@nextui-org/react";
import { getTrainer } from "~/db/db.server";
import { formatDate } from "~/utils/dateUtils";

export async function loader({ params }) {
  console.log("params", params);
  const trainer = await getTrainer(parseInt(params.id));
  console.log("trainer", trainer);
  return trainer[0];
}

export default function DetailedTrainerPage() {
  const navigate = useNavigate();
  const trainerDetails = useLoaderData();

  return (
    <main>
      <Button color="primary" onClick={() => navigate("/admin")}>
        Back
      </Button>
      <div className="flex flex-col gap-3">
        <h1>Trainer Details</h1>
        <p>Here you can see detailed information about a trainer.</p>
        <Card className="p-4">
          <h2>{`${trainerDetails.first_name} ${trainerDetails.last_name}`}</h2>
          <p>Email: {trainerDetails.email}</p>
          <p>Subscription Plan: {trainerDetails.subscription_plan}</p>
          <p>Paid Until: {formatDate(trainerDetails.paid_until)}</p>
          <p>Status: {trainerDetails.status}</p>
        </Card>
      </div>
    </main>
  );
}
