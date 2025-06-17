import React from "react";
import { Button, Flex } from "FCB-ui";

const Wrap: React.FC = () => (
  <Flex wrap gap="small">
    {Array.from({ length: 24 }, (_, i) => (
      <Button key={i} appearance="primary">
        Button
      </Button>
    ))}
  </Flex>
);

export default Wrap;
