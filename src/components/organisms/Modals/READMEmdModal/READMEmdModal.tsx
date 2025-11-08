import NiceModal from "@ebay/nice-modal-react";
import ReactMarkdown from "react-markdown";

export const READMEmdModal = NiceModal.create(
  /* Has to be a string because ReactMarkdown doesn't allow anything else */
  ({ children }: { children: string }) => {
    return <ReactMarkdown>{children}</ReactMarkdown>;
  }
);
