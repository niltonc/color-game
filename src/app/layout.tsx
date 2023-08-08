export const metadata = {
  title: 'COLOR GAME',
  description: 'GUESS THE COLOR'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
