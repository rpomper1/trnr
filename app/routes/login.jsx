import { json, redirect } from "@remix-run/node";
import Login from "~/components/auth/Login";
import {
  getTraineeFromUserId,
  getTrainerFromUserId,
  getUser
} from "~/db/db.server";
import bcrypt from "bcryptjs";
import { commitSession, getSession } from "~/sessions";
export async function action({ request }) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.length < 8) {
    errors.password = "Password should be at least 8 characters";
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  const session = await getSession(request.headers.get("Cookie"));
  const user = await getUser(email);
  if (!user) {
    errors.email = "User not found";
    return json({ errors });
  }

  session.set("user", {
    email: user.email,
    role: user.role,
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    disabled: user.disabled
  });
  if (user.role === "Trainer") {
    const trainerRaw = await getTrainerFromUserId(user.id);
    const trainer = trainerRaw[0];

    session.set("trainer", {
      id: trainer.id,
      subscriptionPlan: trainer.subscription_plan,
      status: trainer.status,
      paidUntil: trainer.paid_until
    });
  }
  if (user.role === "Trainee") {
    const trainee = await getTraineeFromUserId(user.id);
    session.set("trainee", trainee[0]);
  }
  if (user && bcrypt.compareSync(password, user.password)) {
    if (user.disabled) {
      errors.email = "User is disabled";
      return json({ errors });
    }
    return redirect(`/${user.role.toLocaleLowerCase()}`, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  if (!user) {
    errors.email = "User not found";
    return json({ errors });
  } else {
    errors.password = "Password is incorrect";
    return json({ errors });
  }
}

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Login />
    </div>
  );
};
export default LoginPage;
