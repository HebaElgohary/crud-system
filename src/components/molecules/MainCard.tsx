import React, { ComponentProps, ComponentType } from "react";
import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Button from "../atoms/Button";

interface MainCardProps {
  title: string;
  subtitle: string;
  btn: string;
  iconBg: 'green'|'blue'|'violet'|'warning'|'danger';
  titleProps?: ComponentProps<typeof Title>;
  subtitleProps?: ComponentProps<typeof Subtitle>;
  btnProps: ComponentProps<typeof Button>;
  iconProps: ComponentProps<typeof Icon>;
}

export default function MainCard({
  title,
  iconBg,
  subtitle,
  btn,
  titleProps,
  subtitleProps,
  btnProps,
  iconProps,
}: MainCardProps) {
  const iconBgs = {
    green: "ds-bg-green-200",
    blue: "ds-bg-blue-200",
    violet: "ds-bg-violet-200",
    warning: "ds-bg-warning-200",
    danger: "ds-bg-danger-200",
  };
  const iconColor={
    green:'ds-text-green',
    blue:'ds-text-blue',
    violet:'ds-text-violet',
    warning:'ds-text-warning',
    danger:'ds-text-danger'
  }

  return (
    <div  className="flex flex-col ds-bg-main  items-start justify-center gap-6 border-2 ds-border-gray !px-2 !py-4 rounded-xl ">
      <div className="flex gap-3">
        <span
          className={` flex items-center justify-center ${iconBgs[iconBg]} !p-2 rounded-xl `}
        >
          {" "}
          <Icon {...iconProps} className={iconColor[iconBg]} />
        </span>
        <div className="flex flex-col ">
          <Title {...titleProps}>{title}</Title>
          <Subtitle {...subtitleProps}>{subtitle}</Subtitle>
        </div>
      </div>
      <Button  {...btnProps}>{btn}</Button>
    </div>
  );
}
