import NiceModal from "@ebay/nice-modal-react";
import ReactMarkdown from "react-markdown";

export const READMEmdModal = NiceModal.create(
  ({ markdown }: { markdown: string }) => {
    return <ReactMarkdown>{markdown}</ReactMarkdown>;
  }
);
