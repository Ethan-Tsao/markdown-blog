import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonType = useColorModeValue(<MoonIcon />, <SunIcon />);
  return (
    <>
      {/* <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button> */}
      <IconButton
        aria-label="dark mode toggle"
        icon={buttonType}
        onClick={toggleColorMode}
        rounded={5}
        colorScheme="blue"
      />
    </>
  );
};
