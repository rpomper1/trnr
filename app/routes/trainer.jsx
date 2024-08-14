import { Outlet, redirect } from "@remix-run/react";
import TrainerLayout from "~/layouts/TrainerLayout";
import { destroySession, getSession } from "~/sessions";
export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const sessionUser = session.get("user");
  if (!sessionUser || sessionUser?.role !== "Trainer") {
    if (sessionUser?.role) {
      return redirect(`/${sessionUser?.role.toLowerCase()}`);
    } else {
      return redirect("/login");
    }
  }
  return sessionUser;
}
export const action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
const TrainerWrapper = () => (
  <TrainerLayout>
    <Outlet />
  </TrainerLayout>
);

export default TrainerWrapper;
