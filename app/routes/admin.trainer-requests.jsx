import { Button } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";
import UnauthorizedTrainersTable from "~/components/tables/UnauthorizedTrainersTable";
import { approveTrainer, getUnapprovedTrainers } from "~/db/db.server";
export async function loader() {
  const trainersAwaitingApprovalRaw = await getUnapprovedTrainers();
  const trainersAwaitingApproval = trainersAwaitingApprovalRaw.map(
    (trainer) => {
      return {
        name: trainer.first_name + " " + trainer.last_name,
        ...trainer
      };
    }
  );
  return trainersAwaitingApproval;
}
export async function action({ request }) {
  const formData = await request.formData();
  const subscribed_until = String(formData.get("subscribed_until"));
  const trainerId = Number(formData.get("trainerId"));
  const result = await approveTrainer(trainerId, new Date(subscribed_until));
  return null;
}
const TrainerRequestsPage = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-10">
      <Button
        color="primary"
        onClick={() => navigate("/admin")}
        className="w-fit"
      >
        Back
      </Button>
      <section>
        <h1>Trainer Requests</h1>
        <p>
          Here you can see the list of trainers that have requested to join the
          platform.
        </p>
      </section>
      <section>
        <UnauthorizedTrainersTable />
      </section>
    </main>
  );
};
export default TrainerRequestsPage;
