import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
  Image
} from "@nextui-org/react";
import logo from "/img/henkel-logo.svg";
import { Link, useLocation } from "@remix-run/react";

export default function CustomNavbar() {
  const location = useLocation();
  return (
    <Navbar shouldHideOnScroll className="bg-white shadow-sm">
      <NavbarBrand>
        <Image src={logo} alt="logo" width={80} />
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem isActive={location.pathname === "/"}>
          <Link
            className={
              "text-lg" +
              (location.pathname === "/" ? " text-primary" : " text-foreground")
            }
            to="/"
            aria-current={location.pathname === "/" ? "page" : "false"}
          >
            Procjena
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/o-nama"}>
          <Link
            className={
              "text-lg" +
              (location.pathname === "/o-nama"
                ? " text-primary"
                : " text-foreground")
            }
            to="/o-nama"
            aria-current={location.pathname === "/o-nama" ? "page" : "false"}
          >
            O nama
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
