import SignupTrainerForm from "~/components/admin-specific/SignupTrainerForm";
import bcrypt from "bcryptjs";
import { createTrainer, createUser } from "~/db/db.server";
import { redirect } from "@remix-run/server-runtime";
export async function action({ request }) {
  const formData = await request.formData();
  const firstName = String(formData.get("firstName"));
  const lastName = String(formData.get("lastName"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const repeatPassword = String(formData.get("repeatPassword"));
  const subscriptionPlan = String(formData.get("subscriptionPlan"));

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = await createUser(
    firstName,
    lastName,
    email,
    passwordHash,
    "Trainer",
    false
  );
  const trainer = await createTrainer(user.id, subscriptionPlan);
  return redirect("/request-completed");
}
const SignupTrainer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignupTrainerForm />
    </div>
  );
};
export default SignupTrainer;
