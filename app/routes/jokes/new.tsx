export default function NewJoke() {
  return (
    <div>
      <h2>Add a joke</h2>
      <form method="POST">
        <div>
          <label htmlFor="">
            Name: <input type="text" name="name"></input>
          </label>
        </div>
        <div>
          <label htmlFor="">
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
