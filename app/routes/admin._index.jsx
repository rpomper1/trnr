import UnauthorizedTrainers from "~/components/admin-specific/UnauthorizedTrainers";
import TrainerTable from "~/components/tables/TrainerTable";

export default function AdminDashboard() {
  return (
    <div className="bg-white p-5 flex flex-col gap-20">
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
      </div>
      <div>
        <UnauthorizedTrainers />
      </div>
      <div>
        <TrainerTable />
      </div>
    </div>
  );
}
