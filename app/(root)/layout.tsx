"use client";
import Header from "@/components/Header";
// import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { Provider, useSelector } from "react-redux";
import { store } from "../../store/index";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Handy solver",
//   description: "Handy solver",
// };
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Body>{children}</Body>
        </Provider>
      </body>
    </html>
  );
}
const Body = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state.user);
  const darkTheme = createTheme({
    palette: {
      mode: user.theme ? user.theme : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="w-full p-5">
        <div>
          <Header />
        </div>
        <div className="mt-10">
          <div>{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
};
