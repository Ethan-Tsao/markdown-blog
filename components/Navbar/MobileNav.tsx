import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";

const MobileNav = () => {
  const mode = useColorModeValue("solarizedLight.600", "solarizedDark.600");
  return (
    <Stack bg={mode} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Personal Blog",
    children: [
      {
        label: "Mechanical Keyboards",
        href: "/mech-blog",
      },
      {
        label: "Programming",
        href: "/programming-blog",
      },
      {
        label: "Video Games",
        href: "/game-blog",
      },
      {
        label: "Books",
        href: "/book-blog",
      },
    ],
    href: "#",
  },
  {
    label: "About Me",
    href: "/about",
  },
];
