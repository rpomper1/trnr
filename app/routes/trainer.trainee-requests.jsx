import UnauthorizedTraineesTable from "~/components/tables/UnauthorizedTrainersTable";

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
