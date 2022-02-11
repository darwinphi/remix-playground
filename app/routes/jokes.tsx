import { Outlet, LinksFunction, Links, Link } from "remix";

import globalCSS from "../styles/global.css";
import normalizeCSS from "../styles/normalize.css";

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

export default function Jokes() {
  return (
    <div>
      <main>
        
        <Outlet />
      </main>
    </div>
  );
}
