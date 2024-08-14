import { redirect, useLoaderData } from "@remix-run/react";
import SignupTraineeForm from "~/components/trainer-specific/SignupTraineeForm";
import { createTrainee, createUser, getTrainer } from "~/db/db.server";
import bcrypt from "bcryptjs";
import { calculateMacros } from "~/utils/macrosUtils";

export async function loader({ request }) {
  const url = new URL(request.url);
  const trainerId = url.searchParams.get("trainerId");
  try {
    const trainer = await getTrainer(parseInt(trainerId));
    console.log("trainer: ", trainer);
    return { trainer: trainer[0] };
  } catch (error) {
    console.error(error);
    return { trainer: null, error: error.message };
  }
}

export async function action({ request }) {
  const formData = await request.formData();
  const firstName = String(formData.get("firstName"));
  const lastName = String(formData.get("lastName"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const repeatPassword = String(formData.get("repeatPassword"));
  const goal = String(formData.get("goal"));
  const gender = String(formData.get("gender"));
  const weight = parseFloat(formData.get("weight"));
  const height = parseFloat(formData.get("height"));
  const age = parseInt(formData.get("age"));
  const activityLevel = String(formData.get("activityLevel"));
  const trainerId = parseInt(formData.get("trainerId"));

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = await createUser(
    firstName,
    lastName,
    email,
    passwordHash,
    "Trainee",
    false
  );
  const macros = calculateMacros(
    age,
    gender,
    weight,
    height,
    activityLevel,
    goal
  );
  const trainee = await createTrainee(
    user.id,
    goal,
    weight,
    macros.targetCalories,
    macros.targetProtein,
    macros.targetFats,
    macros.targetCarbs,
    trainerId
  );
  console.log("trainee", trainee);
  return redirect("/request-completed");
}
const SignupTrainee = () => {
  const trainer = useLoaderData().trainer;
  const error = useLoaderData().error;
  console.log("trainer: ", trainer);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {trainer ? <SignupTraineeForm trainer={trainer} /> : <p>No trainer!</p>}
    </div>
  );
};
export default SignupTrainee;
