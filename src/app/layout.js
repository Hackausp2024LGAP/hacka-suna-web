import localFont from "next/font/local";
import "./globals.css";

const Rubik = localFont({
  src: '../../public/assets/fonts/Rubik.ttf',
  weight: '400 500'
})
export const metadata = {
  title: "Reletrify",
  description: "Recicle, revenda, repare. Sua nova rede para cuidar do mundo do seu jeito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${Rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
