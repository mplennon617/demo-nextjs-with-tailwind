import clientPromise from "@/lib/db";

// An API handler.
// Called when we visit http://localhost:3000/api/posts
// Note that this can handle both GET and POST requests!
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
            // If req is a post request, extract the author and body fields
            // and create a new document in the MongoDB database
            case "POST":
                const body = req.body;
                if (!body.author || !body.body) return res.status(400).json({ message: "Missing required fields author and body" })
                const dbRequest = await db.collection("posts").insertOne(body)
                // We send a "success!" HTTP response
                return res.status(201).json({ message: "Created Successfully", id: dbRequest.insertedId });
            default:
            // If req is neither a post nor a get request, send an error HTTP response back.
                return res.status(405).json({ message: "Method not allowed" });
        }
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error", reason: e?.message })
    }
}
