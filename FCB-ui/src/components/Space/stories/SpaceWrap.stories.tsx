import { Button, Space } from "FCB-ui";
import React from "react";

const Wrap: React.FC = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

export default Wrap;
