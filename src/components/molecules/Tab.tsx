import { ComponentProps } from "react";
import Icon from "../atoms/Icon";
import Subtitle from "../atoms/Subtitle";

export default function Tab({
  selected,
  onClick,
  iconProps,
  titleProps,
}: {
  onClick: () => void;
  selected: boolean;
  iconProps: ComponentProps<typeof Icon>;
  titleProps: ComponentProps<typeof Subtitle>;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex gap-3 items-center rounded-lg !p-3 hover:cursor-pointer ${selected ? "ds-bg-violet-200" : ""} `}
    >
      <Icon
        className={selected ? "ds-text-violet" : "ds-text-disabled"}
        size={25}
        {...iconProps}
      />
      <Subtitle
        variant={selected ? "violet" : "disabled"}
        className={"font-semibold "}
        size="md"
        {...titleProps}
      >
        {titleProps.children}
      </Subtitle>
    </div>
  );
}
