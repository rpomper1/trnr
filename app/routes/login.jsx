import { json, redirect } from "@remix-run/node";
import Login from "~/components/auth/Login";
import { getUser } from "~/db/db.server";
import bcrypt from "bcryptjs";
export async function action({ request }) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors = {};

  console.log("email", email);
  console.log("password", password);

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.length < 8) {
    errors.password = "Password should be at least 8 characters";
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  const passwordHash = bcrypt.hashSync(password, 10);
  console.log("passwordHash", passwordHash);
  const user = await getUser(email);

  console.log("user", user);
  if (user && bcrypt.compareSync(password, user.password)) {
    return redirect(`/${user.role.toLocaleLowerCase()}`);
  }
  if (!user) {
    errors.email = "User not found";
    return json({ errors });
  } else {
    errors.password = "Password is incorrect";
    return json({ errors });
  }
  // if (user.role === "Admin") {
  //   return redirect("/admin");
  // } else if (user.role === "Trainer") {
  //   return redirect("/trainer");
  // } else if (user.role === "Trainee") {
  //   return redirect("/trainee");
  // } else {
  //   return redirect("/login");
  // }
}

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Login />
    </div>
  );
};
export default LoginPage;
