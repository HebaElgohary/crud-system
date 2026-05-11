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
      className={`flex gap-3 items-center rounded-lg !p-2 hover:cursor-pointer ${selected ? "ds-bg-violet-200" : ""} `}
    >
      <Icon
        className={selected ? "ds-text-violet" : "ds-text-black"}
        size={20}
        {...iconProps}
      />
      <Subtitle
        variant={selected ? "violet" : "black"}
        className={"font-semibold "}
        size="sm"
        {...titleProps}
      >
        {titleProps.children}
      </Subtitle>
    </div>
  );
}
