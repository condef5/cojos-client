import React from "react";
import { Box, Checkbox, Input, Stack } from "@chakra-ui/react";
import { useLocalStorage } from "./hooks";
import { Radio, RadioGroup } from "@chakra-ui/react";

function Payment({ players }: { players: string[] }) {
  const [payments, setPayments] = useLocalStorage<Record<string, boolean>>(
    "payments",
    {}
  );
  const [search, setSearch] = React.useState("");
  const [filterPay, setFilterPay] = React.useState("all");

  function filteredPlayers() {
    return players
      .filter((player) => player.toLowerCase().includes(search.toLowerCase()))
      .filter((player) => {
        if (filterPay === "all") return true;

        if (filterPay === "pay") return payments[player];

        return !payments[player];
      });
  }

  return (
    <Box>
      <Input
        placeholder="Buscar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        mb="2"
      />
      <RadioGroup onChange={setFilterPay} value={filterPay}>
        <Stack direction="row">
          <Radio value={"all"}>All</Radio>
          <Radio value={"no-pay"}>No pago</Radio>
          <Radio value={"pay"}>Pago</Radio>
        </Stack>
      </RadioGroup>
      <Box my="4">
        {filteredPlayers().map((player, index) => (
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
