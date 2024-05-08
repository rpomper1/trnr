import { NextUIProvider } from "@nextui-org/react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

import stylesheet from "~/tailwind.css?url";
import rootStylesheet from "~/root.css?url";
import CustomNavbar from "./components/CustomNavbar";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: rootStylesheet }
];

export function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="no-scrollbar">
        <NextUIProvider className="scrollbar-hide" navigate={navigate}>
          <div className="min-h-screen flex flex-col items-center gap-5 bg-slate-50 scrollbar-hide">
            <CustomNavbar />
            <div className="scrollbar-hide max-w-[1024px] w-screen">
              {children}
            </div>
          </div>
          <ScrollRestoration />
          <Scripts />
          <Analytics />
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
