import React, { useEffect, useState } from "react";
import { Textarea, Box } from "@chakra-ui/react";
import { useLocalStorage } from "./hooks";

const defaultValue = `
Pichanguita la veganza del bicho

HORA:    9pm - 11pm
DIA:        Viernes 17
LUGAR:  Potokar campo grande

1. Frank
2. Alpaquitay
3. Loloy
4.Ronaldo A.
5. Harry
6. Ronaldo el bicho
7.lucho goo
8. Trejo
9. Alanya
10.Reynaga
11.jhoan
12. Erick jr
13. Bruce go
14. Julio Gonzales
15. Luis GP
16. Glen
17.Terry
18. Jheyson sui
19. Anghelo
20. Julinho goo
21.Erick H
22. Manuel Bravo
23. Luis Daniel
24. G. Jara
25. Cantaro
26. Ricardo
27. JP
28. cato`;

function TextComponent({
  setPlayers,
}: {
  setPlayers: (text: string[]) => void;
}) {
  const [value, setValue] = useLocalStorage<string>("list", defaultValue);

  useEffect(() => {
    if (!value) return;

    parsePlayers(value);
  }, []);

  function parsePlayers(text: string) {
    const result = text
      .split(/\r?\n/)
      .filter(
        (line) =>
          line.length > 0 &&
          line[0] !== " " &&
          line[0] !== "\t" &&
          !isNaN(parseInt(line[0]))
      )
      .map((line) => line.replace(/[0-9]/g, "").replaceAll(".", "").trim())
      .filter(Boolean);

    setPlayers(result);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = event.target.value;

    setValue(text);
    parsePlayers(text);
  }

  return (
    <Box>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
        minH={"600px"}
        maxW={{ base: "100%" }}
        mr="20"
      />
    </Box>
  );
}

export default TextComponent;
