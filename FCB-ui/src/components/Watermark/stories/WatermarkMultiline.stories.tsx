import { Watermark } from "FCB-ui";
import React from "react";

const Default: React.FC = () => (
  <Watermark content={["FCBui", "maomao"]}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default Default;
