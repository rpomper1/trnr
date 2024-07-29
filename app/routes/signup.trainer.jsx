import SignupTrainerForm from "~/components/admin-specific/SignupTrainerForm";
import bcrypt from "bcryptjs";
import { createTrainer, createUser } from "~/db/db.server";
export async function action({ request }) {
  const formData = await request.formData();
  const firstName = String(formData.get("firstName"));
  const lastName = String(formData.get("lastName"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const repeatPassword = String(formData.get("repeatPassword"));
  const subscriptionPlan = String(formData.get("subscriptionPlan"));

  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("email", email);
  console.log("password", password);
  console.log("repeatPassword", repeatPassword);
  console.log("subscriptionPlan", subscriptionPlan);

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = await createUser(
    firstName,
    lastName,
    email,
    passwordHash,
    "Trainer",
    false
  );
  console.log("user", user);
  const trainer = await createTrainer(user.id, subscriptionPlan);
  console.log("trainer", trainer);
  return null;
}
const SignupTrainer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignupTrainerForm />
    </div>
  );
};
export default SignupTrainer;
