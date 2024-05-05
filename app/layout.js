
import "./globals.css";


export const metadata = {
  title: "Gallery",
  description: "Made by nirmal thomas mathew",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
