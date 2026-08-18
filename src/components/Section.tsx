import { Container } from "./Container";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${bordered ? "border-t border-border" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
