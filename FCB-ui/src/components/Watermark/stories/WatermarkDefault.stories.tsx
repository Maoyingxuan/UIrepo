import { Flex, Text, Watermark } from "FCB-ui";
import React from "react";

const Default: React.FC = () => (
  <Watermark content="maomao">
    <Flex style={{ height: "500px" }} justify="center" align="center">
      <Text> 公司账户余额：¥ 1,000,000.00 </Text>
    </Flex>
  </Watermark>
);

export default Default;
