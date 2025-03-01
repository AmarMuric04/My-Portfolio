import React from "react";

interface ExternalLinkButtonProps {
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  href,
  icon: Icon,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 cursor-pointer hover:text-white transition-all"
    >
      {Icon && <Icon />}
      {children && <p>{children}</p>}
    </a>
  );
};

export default ExternalLinkButton;
