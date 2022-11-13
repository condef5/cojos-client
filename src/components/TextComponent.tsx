import React, { useEffect, useState } from "react";
import { Textarea, Box } from "@chakra-ui/react";

const defaultValue = `
Pichanguita cumpleaños de Ario

HORA:    9pm - 11pm
DIA:        Viernes 11
LUGAR:  Laureles

1. Frank
2. Ronaldo A.
3. Loloy
4. Alpaquitay
5. Reynaga
6. Juan Campos
7. Ronaldo el bicho
8. Jhoan
9. Luis G
10. Anghelo
11. Angel
12. Lucho goo
13. Bruce gooo
14. Piero goooo
15. Angel
16. JP
17. Jachinv
18. Trejo
19. Erick H
20. Sandro
21. Lucas
22. Alanya
23. Jhonny`;

function TextComponent({
  setPlayers,
}: {
  setPlayers: (text: string[]) => void;
}) {
  const [value, setValue] = useState(defaultValue);

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
