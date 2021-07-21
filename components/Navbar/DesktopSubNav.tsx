import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const linkHoverMode = useColorModeValue(
    "solarizedDark.500",
    "solarizedLight.600"
  );
  const groupHoverMode = useColorModeValue(
    "solarizedLight.600",
    "solarizedDark.500"
  );

  return (
    <Box
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: linkHoverMode,
        cursor: "pointer",
      }}
    >
      <Link href={href ?? "#"} passHref>
        <Stack direction={"row"} align={"center"}>
          <Text
            transition={"all .3s ease"}
            _groupHover={{
              color: groupHoverMode,
            }}
            fontWeight={500}
            align={"left"}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            _groupHover={{
              color: groupHoverMode,
            }}
          >
            {subLabel}
          </Text>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={groupHoverMode} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Box>
  );
};

export default DesktopSubNav;
