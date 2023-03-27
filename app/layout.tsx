import "./globals.css";

export const metadata = {
  title: "My awesome site",
  description: "Site about me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="mx-auto flex h-screen items-center max-w-2xl px-6">{children}</div>
    </html>
  );
}
