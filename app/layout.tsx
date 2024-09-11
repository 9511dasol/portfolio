import Header from "../components/navbar";
import "../styles/global.css";

export const metadata = {
  title: "Dasol Han",
  description: "Dasol's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
