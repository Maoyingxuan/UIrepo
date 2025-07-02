import { Button, Divider,Space } from "FCB-ui";
import React from "react";

const Split: React.FC = () => (
  <Space size={[8, 16]} split={<Divider vertical style={{ height: "100%" }} />}>
    {new Array(4).fill(null).map((_, index) => (
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

export default Split;
