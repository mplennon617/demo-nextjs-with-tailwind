import Post from "@/components/Post";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function New() {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    try {
      const payload = {
        body: body,
        author: author,
      };
      console.log(payload);
      const res = await fetch(
        "/api/posts",
        {
          method: "POST",
          body: JSON.stringify(payload)
        }
      );
      console.log(res);
      // If the HTTP response is successful, we extract the data (in JSON format)
      // and update our posts state variable with the data.
      if (res.status === 200) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (e) {
      // If the HTTP response fails, it will throw an exception.
      // We catch it, and update the state variable to let the user know something went wrong.
      setError(true);
    }
  };

  // Component contents. Note the JavaScript logic injected in curly braces {}
  return (
    <>
      <main className="md:container mx-auto">
        <div className="text-2xl text-center my-4">New Post</div>
        <div>
          {/* TODO: Tailwind styling on the form fields */}
          <form>
            Author:
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
            Post:
            <input
              type="text"
              onChange={(e) => setBody(e.target.value)}
            ></input>
          </form>
          <button>Cancel</button>
          <button onClick={handleSubmit}>Post</button>
        </div>
        {error && <h1 className="text-red-100">An error occurred.</h1>}
      </main>
    </>
  );
}
