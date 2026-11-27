import { HStack, Icon, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        colorPalette="blue"
        size="lg"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label>Dark mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;
