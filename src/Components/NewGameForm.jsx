import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({ addGames }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    addGames({ title, cover });
    ev.preventDefault();
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="Title" label="Title" value={title} setValue={setTitle} />
      <TextInput id="Cover" label="Cover" value={cover} setValue={setCover} />
      <button type="submit">Add to library</button>
    </form>
  );
}
