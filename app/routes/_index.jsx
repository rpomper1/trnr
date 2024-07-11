import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import Login from "~/components/auth/Login";

export const meta = () => {
  return [
    { title: "Zavrsni rad" },
    { name: "description", content: "Zavrsni rad" }
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
      <h1>Welcome to TRNR</h1>
      <Button>
        <Link to={"/login"}>Login</Link>
      </Button>
      <span>Temporary:</span>
      <Button>
        <Link to={"/admin"}>Admin</Link>
      </Button>
      <Button>
        <Link to={"/trainer"}>Trainer</Link>
      </Button>
      <Button>
        <Link to={"/trainee"}>Trainee</Link>
      </Button>
    </div>
  );
}
