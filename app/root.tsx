import { LiveReload, Meta, Outlet } from "remix";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>App</title>
      </head>
      <body>
        {/* Get the routes */}
        <Outlet />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
