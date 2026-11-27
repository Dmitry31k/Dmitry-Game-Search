import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamepad-joystick.svg";
import ColorModeSwitch from "./ColorModeSwitch";

function SearchBar() {
  return (
    <HStack justifyContent="space-between" padding="3">
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default SearchBar;
