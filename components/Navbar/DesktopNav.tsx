import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = () => {
  const linkColor = useColorModeValue(
    "solarizedDark.600",
    "solarizedLight.400"
  );
  const linkHoverColor = useColorModeValue(
    "solarizedLight.800",
    "solarizedDark.400"
  );
  const popoverContentBgColor = useColorModeValue(
    "solarizedLight.600",
    "solarizedDark.600"
  );

  return (
    <Stack direction={"row"} spacing={4} mr="4">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  cursor: "pointer",
                }}
              >
                <Link href={navItem.href ?? "#"} passHref>
                  {navItem.label}
                </Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={1}
                boxShadow={"2xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;

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
