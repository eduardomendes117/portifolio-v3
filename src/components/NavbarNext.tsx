import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function NavbarNext() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Sobre",
    "Projetos",
    "Contato",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="border-b-white/5">
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl"><FaCode /></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl"><FaCode /></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex items-center" justify="end">
        <NavbarItem>
          <Link className="text-foreground text-3xl hidden sm:flex" href="https://github.com/eduardomendes117" target="_blank">
          <FaGithub />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-foreground text-3xl hidden sm:flex" href="https://www.linkedin.com/in/eduardo-mendes-26538030b/" target="_blank">
            <FaLinkedin />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="items-center justify-center text-2xl">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

