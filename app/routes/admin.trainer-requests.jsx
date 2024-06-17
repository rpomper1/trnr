import { Button } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";
import UnauthorizedTrainersTable from "~/components/tables/UnauthorizedTrainersTable";

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
