import React from "react";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";

type Props = {
  iconName?: string;
  iconclasses?: string[];
  text?: string;
  textClasses?: string[];
  divClasses?: string[];
  onClick?: () => any;
};

const RzIcon = (props: Props) => {
  const getIcon = () => {
    switch (props.iconName) {
      case "circle-filled":
        return <FaIcons.FaCircle />;
      case "circle-left-arrow":
        return <HiIcons.HiArrowCircleLeft />;
      default:
        return <FaIcons.FaCircle />;
    }
  };

  return (
    <div
      className={`${
        props.divClasses?.length ? props.divClasses.join(" ") : ""
      }`}
      onClick={props.onClick}
    >
      <span
        className={`${
          props.iconclasses?.length ? props.iconclasses.join(" ") : ""
        }`}
      >
        {getIcon()}
      </span>
      <span
        className={`${
          props.textClasses?.length ? props.textClasses.join(" ") : ""
        }`}
      >
        {props.text ? props.text : ""}
      </span>
    </div>
  );
};

export { RzIcon };
