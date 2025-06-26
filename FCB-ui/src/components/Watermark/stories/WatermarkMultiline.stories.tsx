import React from "react";
import { Watermark } from "FCB-ui";

const Default: React.FC = () => (
  <Watermark content={["FCBui", "maomao"]}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default Default;
