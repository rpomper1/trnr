import UnauthorizedTraineesTable from "~/components/tables/UnauthorizedTraineesTable";
import { approveTrainee, getUnapprovedTrainees } from "~/db/db.server";
import { getSession } from "~/sessions";
export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const sessionTrainer = session.get("trainer");
  const traineesAwaitingApprovalRaw = await getUnapprovedTrainees(
    sessionTrainer?.id
  );
  const traineesAwaitingApproval = traineesAwaitingApprovalRaw.map(
    (trainee) => {
      return {
        name: trainee.first_name + " " + trainee.last_name,
        ...trainee
      };
    }
  );
  return traineesAwaitingApproval;
}
export async function action({ request }) {
  const formData = await request.formData();
  const subscribed_until = String(formData.get("subscribed_until"));
  const traineeId = Number(formData.get("traineeId"));
  const result = await approveTrainee(
    traineeId,
    subscribed_until ? new Date(subscribed_until) : new Date()
  );
  return null;
}
const TraineeRequestsPage = () => {
  return (
    <main className="flex flex-col gap-10">
      <section>
        <h1>Trainee Requests</h1>
        <p>
          Here you can see the list of trainees that have requested to join the
          platform.
        </p>
      </section>
      <section>
        <UnauthorizedTraineesTable />
      </section>
    </main>
  );
};
export default TraineeRequestsPage;
