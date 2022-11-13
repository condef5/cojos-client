import React, { useState } from "react";
import { Text, Button, Flex, Box, Input } from "@chakra-ui/react";
import { useLocalStorage } from "./hooks";
import { shuffleArray, sliceIntoChunks } from "./utils";
import { ShuffleIcon, TrashIcon } from "./Icons";

function Teams({ players }: { players: string[] }) {
  const [playerNumber, setPlayerNumber] = useState<number>(7);
  const [groups, setGroups] = useLocalStorage<string[][]>("groups", []);

  return (
    <Box>
      <Flex mb="4">
        <Input
          placeholder="# players"
          w="100px"
          value={playerNumber}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            if (isNaN(newValue)) return;

            setPlayerNumber(newValue);
          }}
        />
        <Button
          onClick={() => {
            const chunks = sliceIntoChunks(shuffleArray(players), playerNumber);
            setGroups(chunks);
          }}
          leftIcon={<ShuffleIcon />}
          ml="auto"
        >
          Generar
        </Button>
      </Flex>
      <Flex>
        {groups.map((group, index) => (
          <Box key={index} maxW={{ base: "100%", md: "30%" }}>
            <Text fontWeight="bold" my="2">
              Grupo {index + 1}
            </Text>
            <Box as="ol" pl="4" mr="6">
              {group.map((player, index) => (
                <li key={index}>
                  <Box as="span">{player}</Box>
                </li>
              ))}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Teams;
