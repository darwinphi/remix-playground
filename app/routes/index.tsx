import { Link } from "remix";
export default function Index() {
  return (
    <div style={{ lineHeight: "1.4" }}>
      <h1>Welcome to Index</h1>
      <Link to="/jokes">
        <h2>Jokes</h2>
      </Link>
    </div>
  );
}
