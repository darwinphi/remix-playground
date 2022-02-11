import { LiveReload, Meta, Outlet, Links, LinksFunction } from "remix";
import globalCSS from "./styles/global.css";
import normalizeCSS from "./styles/normalize.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalCSS,
    },
    {
      rel: "stylesheet",
      href: normalizeCSS,
    },
  ];
};

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>App</title>
        <Links />
      </head>
      <body>
        {/* Get the routes */}
        <Outlet />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
