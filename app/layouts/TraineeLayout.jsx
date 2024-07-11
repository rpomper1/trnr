import React, { useEffect } from "react";
import logo from "../assets/TR.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Image
} from "@nextui-org/react";
import { Link, useLocation } from "@remix-run/react";

const TraineeLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [{ label: "Dashboard", path: "" }];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBordered
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image src={logo} alt="logo" width={100} height={100} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item) => {
            return (
              <NavbarItem
                key={`${item.label}`}
                isActive={
                  location.pathname === `/trainee${item.path.toLowerCase()}`
                }
              >
                <Link
                  to={`/trainee${item.path.toLowerCase()}`}
                  className={
                    location.pathname === `/trainee${item.path.toLowerCase()}`
                      ? "text-primary"
                      : "text-foreground"
                  }
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem
              key={`${item.label}`}
              isActive={
                location.pathname === `/trainee${item.path.toLowerCase()}`
              }
            >
              <Link
                className={`${
                  location.pathname === `/trainee${item.path.toLowerCase()}`
                    ? "text-primary"
                    : "text-foreground"
                } w-full`}
                to={`/trainee${item.path.toLowerCase()}`}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="flex justify-center">
        <div className="max-w-[1024px] w-screen p-6">{children}</div>
      </div>
    </div>
  );
};

export default TraineeLayout;
