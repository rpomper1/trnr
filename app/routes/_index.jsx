import { Button } from "@nextui-org/react";
import { Link, redirect } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Zavrsni rad" },
    { name: "description", content: "Zavrsni rad" }
  ];
};
export async function loader() {
  return redirect("/login");
}
export default function Index() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
      <h1>Welcome to TRNR</h1>
      <Button>
        <Link to={"/login"}>Login</Link>
      </Button>
    </div>
  );
}
