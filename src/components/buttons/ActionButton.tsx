import React from "react";

interface ActionButtonProps {
  isDisabled?: boolean;
  action?: () => void;
  children?: React.ReactNode;
  classes?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  isDisabled,
  action,
  classes = "",
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      className={`flex justify-start transition-all items-center gap-1 bg-[#697565] px-1 rounded-md cursor-pointer hover:bg-[#69756580] ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      } ${classes}`}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
