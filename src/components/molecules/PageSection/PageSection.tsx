export const PageSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <section className="w-180 max-w-9/10">{children}</section>;
};
