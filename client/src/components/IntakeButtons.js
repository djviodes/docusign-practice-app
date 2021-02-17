import React from "react";
import { Button } from "antd";

const IntakeButton = (props) => {
  const { next, previous } = props.navigation;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "30px",
      }}
    >
      <Button
        type="primary"
        htmlType="button"
        onClick={previous}
        style={{ width: "100px" }}
      >
        Previous
      </Button>
      <Button
        type="primary"
        htmlType="button"
        onClick={next}
        style={{ width: "100px" }}
      >
        Next
      </Button>
    </div>
  );
};

export default IntakeButton;
