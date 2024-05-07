import { NextUIProvider } from "@nextui-org/react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

import stylesheet from "~/tailwind.css?url";
import CustomNavbar from "./components/CustomNavbar";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <div className="min-h-screen flex flex-col">
            <CustomNavbar />
            {children}
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
