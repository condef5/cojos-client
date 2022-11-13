import React from "react";
import { Box, Checkbox } from "@chakra-ui/react";
import { useLocalStorage } from "./hooks";

function Payment({ players }: { players: string[] }) {
  const [payments, setPayments] = useLocalStorage<Record<string, boolean>>(
    "payments",
    {}
  );

  return (
    <Box>
      <Box mb="4">
        {players.map((player, index) => (
          <Box key={index} mr="4">
            <Checkbox
              isChecked={payments[player]}
              onChange={(e) =>
                setPayments((prevPayments) => ({
                  ...prevPayments,
                  [player]: e.target.checked,
                }))
              }
            >
              {player}
            </Checkbox>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Payment;
