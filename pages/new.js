import Head from "next/head";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// This is our NewPost component. Since this file is named new.js,
// Next.js renders this component when visiting http://localhost:3000/new/
export default function NewPost() {
  // ***TODO: Declare additional state variables to capture the data in each text box.***
  const [error, setError] = useState(false);

  // Next.js hook for redirecting to other pages in the application
  const { push } = useRouter();

  // handleSubmit function. Called from the Submit button's onClick() event.
  const handleSubmit = async () => {
    console.log("handleSubmit called");
    // ***TODO: Using fetch, send a POST request to the API.***
    // Place the body, author, and title into a JSON object to send back.
    //        For reference: headers: { 'Content-Type': 'application/json' }
    
    // ***TODO: Uncomment below when done***
    // push("/");
  };

  // handleCancel function. Called from the Cancel button's onClick() event.
  const handleCancel = () => {
    push("/");
  };

  // Component contents. Note the JavaScript logic injected in curly braces {}
  return (
    <>
      <main className="md:container mx-auto">
        <div className="text-2xl text-center my-4">New Post</div>
        <div>
          {/* An HTML form. Contains 3 text boxes (<input>, type="text") and their labels.y
            Note the onChange() event handlers that update the state variables above.
          */}

          {
            // ***TODO: Add event handlers for the form textboxes and buttons.*** 
          }
          <form>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="author"
              placeholder="Author"
              type="text"
            ></input>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="title"
              placeholder="Title"
              type="text"
            ></input>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="post"
            >
              Post:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
              rows="8"
              id="post"
              placeholder="Post"
              type="text"
            ></textarea>
          </form>
          {/* Submit and Cancel buttons. Note the onClick event handlers. */}
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Post
          </button>
        </div>
        {error && <h1 className="text-red-500">An error occurred.</h1>}
      </main>
    </>
  );
}
