export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}
