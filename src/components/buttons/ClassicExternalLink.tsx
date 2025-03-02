import { ExternalLinkSVG } from "../../assets/svgs";
import React from "react";

interface ClassicExternalLinkProps {
  href: string;
  description: string;
  title: string;
}

const ClassicExternalLink: React.FC<ClassicExternalLinkProps> = ({
  href,
  description,
  title,
}) => {
  return (
    <a
      target="_blank"
      className="theme-surface transition-all group cursor-pointer p-2 flex gap-2 rounded-lg hover:bg-[#26282580]"
      href={href}
    >
      <span className="transition-all theme-title-text font-semibold flex gap-2 items-center">
        <div className="group-hover:scale-120">
          <ExternalLinkSVG />
        </div>
        {title}
      </span>{" "}
      - {description}
    </a>
  );
};

export default ClassicExternalLink;
