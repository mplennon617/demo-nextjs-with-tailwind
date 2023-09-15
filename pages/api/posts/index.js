import clientPromise from "@/lib/db";

// ==================================================
//              THIS IS SERVER SIDE CODE!
// ==================================================

// An API handler.
// Called when we visit http://localhost:3000/api/posts
// Note that this can handle any request method type, including both GET and POST requests!
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("webdesign-workshop");

    switch (req.method) {
      // If req is a get request, get the posts from the MongoDB database
      // and return the data in an HTTP response
      case "GET":
        const result = await db.collection("posts").find().toArray();
        return res.status(200).json(result);
      // ***TODO: Insert the request body into the database.***
      // Return a response with status code 200 if successful, or 401 if a field is missing.
      default:
        // If req is neither a post nor a get request, send an error HTTP response back.
        return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: "Internal Server Error", reason: e?.message });
  }
}
