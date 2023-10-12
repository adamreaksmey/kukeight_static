import React from "react";

const SettingSection = (props) => {
  const { title, description, tabName, activateTab, isActive } = props;

  const fireTabActivation = (arg) => {
    activateTab(arg);
  };
  return (
    <div
      className="p-4 rounded mb-1 logo-img"
      style={{ background: `${isActive ? "#176B87" : "#6A9C89"}` }}
      onClick={() => {
        fireTabActivation(tabName);
      }}
    >
      <h4 className="fw-bold title-font">{title}</h4>
      <div className="fs-7">{description}</div>
    </div>
  );
};

export default SettingSection;
