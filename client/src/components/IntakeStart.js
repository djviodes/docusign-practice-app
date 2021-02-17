import React from "react";
import { Form, Button, Card, Input } from "antd";

const Insurance = ({ navigation, tempFormStyle, formData, setForm }) => {
  const { next } = navigation;
  const { familyInfo } = formData;

  return (
    <div style={tempFormStyle}>
      <Card title="Intake Form" bordered={false}>
        <h3 style={{ textAlign: "center" }}>
          Be sure to complete as much information as possible when filling the
          form. Don’t leave any required sections blank. Please note in order to
          have 100% complete all values must be filled in. You should type “N/A”
          where applicable. If you don't complete the form now or would like to
          change a field at a later date, you may log back into your profile at
          any time to complete or edit the form.
        </h3>
        <br />
        <br />
        <Form.Item label="Case #">
          <Input
            name="familyInfo.case_number"
            value={familyInfo.case_number}
            onChange={setForm}
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="button"
            onClick={next}
            style={{ width: "100px" }}
          >
            Start
          </Button>
        </Form.Item>
      </Card>
    </div>
  );
};

export default Insurance;
