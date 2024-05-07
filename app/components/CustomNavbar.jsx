import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from "@nextui-org/react";

export default function CustomNavbar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Procjena
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            O nama
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
