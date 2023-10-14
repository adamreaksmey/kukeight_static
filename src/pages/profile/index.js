import React, { useState } from "react";
import Paper from "@/layout/paper";
import SettingSection from "@/components/profile/index";
import { Row, Col } from "react-bootstrap";
import Section from "@/components/profile/section";
import Auth from "@/components/hoc/Auth";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const activateTab = (arg) => {
    setActiveTab(arg);
  };

  const settingsSections = [
    {
      title: "Account Setting",
      description: "Details about your personal information.",
      tabName: "profile",
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
                  isActive={section.tabName == activeTab}
                  {...section}
                />
              ))}
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Section activeTab={activeTab} />
          </Col>
        </Row>
      </Paper>
    </>
  );
};

export default Auth(Profile);
