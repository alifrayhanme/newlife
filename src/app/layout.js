import "./globals.css";

export const metadata = {
  title: "NewLife - Body Areas Selection",
  description: "Select body areas where you feel discomfort or heaviness. Interactive body mapping for health assessment.",
  keywords: "body areas, health assessment, discomfort mapping, medical form",
  author: "NewLife",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
