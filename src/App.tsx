import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <SearchBar></SearchBar>
        </GridItem>
        <GridItem display={{ base: "none", lg: "block" }} area="aside">
          Aside
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
