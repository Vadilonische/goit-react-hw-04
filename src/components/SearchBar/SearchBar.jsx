import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [topic, setTopic] = useState("");

  const handleChange = (evt) => {
    setTopic(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (topic.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }

    onSubmit(topic);
    evt.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="topic"
          type="text"
          autocomplete="off"
          autofocus
          value={topic}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
}
