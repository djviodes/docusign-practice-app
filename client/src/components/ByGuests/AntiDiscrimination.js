import React from "react";

import IntakeButton from "../IntakeButtons";

import { Form, Input, Card, Progress, DatePicker } from "antd";

const AntiDiscrimination = ({
  navigation,
  formData,
  setForm,
  tempFormStyle,
  count,
  setCount,
  nameString,
  steps,
  step,
}) => {
  const pageNumber = steps.findIndex((item) => item === step);
  const pages = steps.length;
  const percent = ((pageNumber + 1) / pages) * 100;

  return (
    <div style={tempFormStyle}>
      Progress bar
      <Progress percent={percent} status="active" showInfo={false} />
      <Card
        title="Understanding of Anti-Discrimination Policy for Guests, Staff, Volunteers"
        bordered={false}
      >
        <IntakeButton navigation={navigation} />
        <Form>
          <Form.Item>
            Open Doors welcomes individuals who are heterosexual, bisexual, gay,
            lesbian, transgender and/or gender non-conforming, of different
            races, classes, religions, ages, protected classes and backgrounds.
            We do not discriminate based upon gender identity or gender
            expression, and as a guest, staff and/or volunteer, I agree to
            address individuals by their preferred gender pronoun. By signing
            this statement, I agree to be respectful of program guests,
            volunteers and staff. I understand that any oppressive or abusive
            language or actions are not acceptable, and that I am bound by law
            to keep any personal information I learn about a client
            confidential. If I have any questions about this procedure, I can
            ask a staff member to explain it to me.
          </Form.Item>

          <Form.Item>
            If a program guest, volunteer, or staff member is acting in an
            abusive or oppressive way towards me, I know that I can report this
            behavior (either verbally or in writing) to a staff member. If I
            feel that the issue has not been addressed, I can then report it to
            the Program Manager. If the issue has still not been appropriately
            addressed, I can bring the issue to the Director.
          </Form.Item>

          <Form.Item>
            <strong>
              ** Please ask Staff for the "Complaint" form if you would like to
              place something in writing. **
            </strong>
          </Form.Item>

          <Form.Item>
            <Input bordered={false} placeholder="First & Last Name" />
            <hr />
            CLIENT SIGNATURE (adult)
            <DatePicker />
            <Input bordered={false} placeholder="First & Last Name" />
            <hr />
            CLIENT SIGNATURE (adult)
            <DatePicker />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AntiDiscrimination;
