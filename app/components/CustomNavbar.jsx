import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from "@nextui-org/react";
import { useLocation } from "@remix-run/react";

export default function CustomNavbar() {
  const location = useLocation();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Henkel</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem isActive={location.pathname === "/"}>
          <Link
            color={location.pathname === "/" ? "primary" : "foreground"}
            href="/"
            aria-current={location.pathname === "/" ? "page" : "false"}
          >
            Procjena
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/o-nama"}>
          <Link
            color={location.pathname === "/o-nama" ? "primary" : "foreground"}
            href="o-nama"
            aria-current={location.pathname === "/o-nama" ? "page" : "false"}
          >
            O nama
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
