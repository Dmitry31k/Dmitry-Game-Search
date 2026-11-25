import "./App.css";
import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <HStack>
        <Button colorPalette={"blue"} variant={"outline"}>
          Click me
        </Button>
      </HStack>
    </>
  );
}

export default App;
