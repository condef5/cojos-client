import React, { useState } from "react";
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ChakraProvider,
} from "@chakra-ui/react";
import TextComponent from "./TextComponent";
import Teams from "./Teams";
import Payment from "./Payment";

function App() {
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <ChakraProvider>
      <Box p="2" maxW={"1000px"} mx="auto" mt="20px">
        <Flex gap="12" flexDirection={{ base: "column", md: "row" }}>
          <Box minW="30%">
            <TextComponent setPlayers={setPlayers} />
          </Box>
          <Box flexGrow="1" w="50%">
            <Tabs>
              <TabList>
                <Tab>Equipos</Tab>
                <Tab>Pagos</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Teams players={players} />
                </TabPanel>
                <TabPanel>
                  <Payment players={players} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
