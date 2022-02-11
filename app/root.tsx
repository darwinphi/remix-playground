import { LiveReload, Meta } from "remix";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>App</title>
      </head>
      <body>
        <h1>Hello World</h1>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
