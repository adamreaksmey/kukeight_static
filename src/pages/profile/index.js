import React, { useState } from "react";
import Paper from "@/layout/paper";
import SettingSection from "@/components/profile/index";
import { Row, Col } from "react-bootstrap";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(false);
  const activateTab = (arg) => {
    console.log(arg);
  };

  const settingsSections = [
    {
      title: "Account Setting",
      description: "Details about your personal information.",
      tabName: "account",
    },
    {
      title: "Notification Setting",
      description: "Details about your notification information.",
      tabName: "notification",
    },
    {
      title: "Membership Subscription",
      description: "Details about your membership subscription.",
      tabName: "membership",
    },
    {
      title: "Password & Security",
      description: "Details about your password and security.",
      tabName: "security",
    },
  ];

  return (
    <>
      <Paper>
        <Row>
          <Col xs={6} md={4}>
            <div>
              {settingsSections.map((section) => (
                <SettingSection
                  key={section.tabName}
                  activateTab={activateTab}
                  {...section}
                />
              ))}
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div>Hello world</div>
          </Col>
        </Row>
      </Paper>
    </>
  );
};

export default Profile;
