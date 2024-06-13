import Login from "~/components/auth/Login";

export const meta = () => {
  return [
    { title: "Zavrsni rad" },
    { name: "description", content: "Zavrsni rad" }
  ];
};

export default function Index() {
  return (
    <div>
      <Login />
    </div>
  );
}
