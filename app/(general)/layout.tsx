
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>
      <span className="flex flex-col items-center p-24">Hola Mundo</span>
      {children}
    </main>
  );
}