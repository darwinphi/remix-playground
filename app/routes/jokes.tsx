import { Outlet } from "remix";

export default function Jokes() {
  return (
    <div>
      <h1>Jokes</h1>
      <Outlet />
    </div>
  );
}
