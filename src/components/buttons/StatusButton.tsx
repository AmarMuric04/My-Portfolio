import React from "react";

interface StatusButtonProps {
  status: string;
  icon: React.ElementType;
  color: string;
}

const StatusButton: React.FC<StatusButtonProps> = ({
  status,
  icon: Icon,
  color,
}) => {
  return (
    <div
      style={{
        color: color,
        borderColor: color,
      }}
      className="cursor-pointer border-2 text-xs px-1 rounded-full flex gap-1 items-center"
    >
      {Icon && <Icon />}
      <p>{status}</p>
    </div>
  );
};

export default StatusButton;
