import { Link } from "remix";

export default function Jokes() {
  return (
    <div>
      <Link to="/jokes" title="Remix">
        <h1>Jokes</h1>
      </Link>

      <Link to="/jokes/new">
        <button>Add joke</button>
      </Link>
    </div>
  );
}
