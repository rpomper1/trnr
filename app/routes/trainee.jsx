import { Outlet, redirect } from "@remix-run/react";
import TraineeLayout from "~/layouts/TraineeLayout";
import { destroySession, getSession } from "~/sessions";
export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const sessionUser = session.get("user");
  const trainee = session.get("trainee");
  console.log("trainee loader: ", sessionUser);
  if (!sessionUser || sessionUser?.role !== "Trainee") {
    console.log("redirecting to login");
    if (sessionUser?.role) {
      return redirect(`/${sessionUser?.role.toLowerCase()}`);
    } else {
      return redirect("/login");
    }
  }
  console.log("returning sessionUser");
  return { sessionUser, trainee };
}
export const action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
const TraineeWrapper = () => (
  <TraineeLayout>
    <Outlet />
  </TraineeLayout>
);

export default TraineeWrapper;
