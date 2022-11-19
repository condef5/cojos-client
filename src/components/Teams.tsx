import React, { useState } from "react";
import { Text, Button, Flex, Box, Input } from "@chakra-ui/react";
import { useLocalStorage } from "./hooks";
import { shuffleArray, sliceIntoChunks } from "./utils";
import { ShuffleIcon, TrashIcon } from "./Icons";

const defaultTeams = [
  [
    "Alpaquitay",
    "Frank",
    "lucho goo",
    "Ronaldo el bicho",
    "Jheyson sui",
    "Cantaro",
    "Julinho goo",
  ],
  [
    "Julio Gonzales",
    "Ronaldo A",
    "Loloy",
    "Reynaga",
    "Glen",
    "Luis Daniel",
    "JP",
  ],
  ["G Jara", "Erick jr", "Manuel Bravo", "Luis GP", "jhoan", "Trejo", "Alanya"],
  ["cato", "Erick H", "Bruce go", "Harry", "Anghelo", "Ricardo", "Terry"],
];

function Teams({ players }: { players: string[] }) {
  const [playerNumber, setPlayerNumber] = useState<number>(7);
  const [groups, setGroups] = useLocalStorage<string[][]>(
    "groups",
    defaultTeams
  );

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
            const chunks = sliceIntoChunks(
              shuffleArray(shuffleArray(players)),
              playerNumber
            );
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
