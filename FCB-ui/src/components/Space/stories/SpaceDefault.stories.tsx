import React from "react";
import { ArrowUpload16Regular } from "fish-ui-sy-react-icons";
import { Button, Space, Text } from "FCB-ui";

const Default: React.FC = () => (
  <Space align="center">
    Space
    <Text>Title1</Text>
    <Button appearance="primary">Button</Button>
    <Button>Button2</Button>
    <Button icon={<ArrowUpload16Regular />}>Upload</Button>
    <Text>Text</Text>
  </Space>
);

export default Default;
