import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import logo from "../assets/TR.png";
import { Form } from "@remix-run/react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navbar isBordered className="">
        <NavbarBrand>
          <Image src={logo} alt="logo" width={100} height={100} />
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <Form method="post">
              <button>Logout</button>
            </Form>
            {/* <Button as={Link} color="primary" href="#" variant="flat">
              Logout
            </Button> */}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex justify-center">
        <div className="max-w-[1024px] w-screen p-6">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
