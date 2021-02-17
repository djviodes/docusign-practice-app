import React from "react";

import IntakeButton from "../IntakeButtons";

import { Form, Input, Card, Progress, DatePicker, Row, Col } from "antd";

const GuestWaiver = ({
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
      <Card title="Guest Waiver of Liability and Disclaimer" bordered={false}>
        <IntakeButton navigation={navigation} />
        <Form>
          <strong>***Read Carefully Before Signing***</strong>
          <Form.Item>
            I <Input className="printName" placeholder="First & Last Name" />,
            hereby acknowledge and agree to the terms of Family Promise Open
            Doors Shelter, 2002 E Mission Ave, Spokane, WA. 99202
          </Form.Item>

          <Form.Item>
            I am at least eighteen (18) years of age (if under 18, parental
            consent needed) and legally competent to sign this Waiver of
            Liability and Disclaimer ("Waiver").
          </Form.Item>

          <Form.Item>
            I <Input className="printName" placeholder="First & Last Name" />,
            DO HEREBY EXEMPT AND RELEASE FAMILY PROMISE, ITS OFFICERS,
            DIRECTORS, EMPLOYEES, VOLUNTEERS, CONTRACTORS, STAFF, AFFILIATES,
            AGENTS, AND ATTORNEYS (COLLECTIVELY, THE “RELEASED PERSONS”) FROM
            ANY AND ALL LIABILITY WHATSOEVER FOR PERSONAL INJURY, PROPERTY
            DAMAGE, OR WRONGFUL DEATH CAUSED BY THE ACTS OR OMISSIONS OF ANY ONE
            OR MORE OF THE RELEASED PERSONS AND/OR ANY THIRD PARTIES ARISING OUT
            OF THE PROJECT, WORK ASSOCIATED WITH THE PROJECT, OR MY
            PARTICIPATION IN THE PROJECT
          </Form.Item>

          <Form.Item>
            I FURTHER HEREBY ACKNOWLEDGE AND AGREE TO DEFEND, INDEMNIFY, SAVE,
            HOLD HARMLESS, AND COVENANT NOT TO SUE THE RELEASED PERSONS FOR ANY
            AND ALL CLAIMS, DEMANDS, DAMAGES, CAUSES OF ACTION AND SUITS IN
            EQUITY, WHETHER ARISING OUT OF COMMON LAW, EQUITY, ARBITRATION OR
            STATUTE, NOW OR HEREAFTER ARISING, KNOWN OR UNKNOWN, ASSERTED BY ME,
            MY CHILD, OR MY SPOUSE (AND MY OR THEIR RESPECTIVE ESTATES, HEIRS,
            EXECUTORS, ADMINISTRATORS, OR ASSIGNS) ARISING SOLELY OUT OF MY ACTS
            OR OMISSIONS THAT OCCURRED DURING THE PROJECT, WORK ASSOCIATED WITH
            THE PROJECT, OR MY PARTICIPATION IN THE PROJECT.
          </Form.Item>

          <Form.Item>
            I hereby acknowledge and expressly agree that all indemnities,
            releases and waivers contained in this Waiver are intended to be as
            broad and inclusive as permitted by the laws of the State of
            Washington and that, if any portion of the agreements in this Waiver
            are held invalid, it is agreed that the balance shall,
            notwithstanding, continue in full legal force and effect. I
            understand the terms herein are contractual and not merely recitals,
            and that I have signed this document of my own free will.
          </Form.Item>

          <Form.Item>
            <strong>
              <u>
                I understand the terms herein are contractual and not merely
                recitals, and that I have signed this document of my own free
                will.
              </u>
            </strong>
          </Form.Item>

          <Form.Item>
            <strong>
              <u>**MUST BE SIGNED BY ALL ADULTS IN HOUSEHOLD**</u>
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

          <Form.Item>
            Dependent children under 18 in household, if any (please{" "}
            <strong>add first and last</strong> names):
          </Form.Item>

          <Form.Item>
            <ol>
              <Row>
                <Col span={12}>
                  <li>
                    <Input
                      className="printName"
                      placeholder="First & Last Name"
                    />
                  </li>
                </Col>
                <Col span={12}>
                  <li>
                    <Input
                      className="printName"
                      placeholder="First & Last Name"
                    />
                  </li>
                </Col>
                <Col span={12}>
                  <li>
                    <Input
                      className="printName"
                      placeholder="First & Last Name"
                    />
                  </li>
                </Col>
                <Col span={12}>
                  <li>
                    <Input
                      className="printName"
                      placeholder="First & Last Name"
                    />
                  </li>
                </Col>
                <Col span={12}>
                  <li>
                    <Input
                      className="printName"
                      placeholder="First & Last Name"
                    />
                  </li>
                </Col>
                <Col span={12}>
                  <li>
                    <Input
                      className="printName"
                      placeholder="First & Last Name"
                    />
                  </li>
                </Col>
              </Row>
            </ol>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default GuestWaiver;
