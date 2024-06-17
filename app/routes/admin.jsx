import { Outlet } from "@remix-run/react";
import AdminLayout from "~/layouts/AdminLayout";

const Admin = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};
export default Admin;
