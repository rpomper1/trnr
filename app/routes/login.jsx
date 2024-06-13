import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import Login from "~/components/auth/Login";
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

  // Redirect to dashboard if validation is successful
  return redirect("/dashboard");
}

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Login />
    </div>
  );
};
export default LoginPage;
