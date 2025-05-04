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
      className={`bg-white/10 backdrop-blur-sm border border-white/10 shadow-md flex justify-start transition-all items-center gap-1 theme-secondary-background text-white px-1 rounded-md cursor-pointer ${
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
