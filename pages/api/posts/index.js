import clientPromise from "@/lib/db"

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("web_demo");

        switch (req.method) {
            case "GET":
                const result = await db.collection("posts").find().toArray();
                return res.status(200).json(result);
            case "POST":
                const body = req.body;
                if (!body.author || !body.body) return res.status(400).json({ message: "Missing required fields author and body" })
                const dbRequest = await db.collection("posts").insertOne(body)
                return res.status(201).json({ message: "Created Successfully", id: dbRequest.insertedId });
            default:
                return res.status(405).json({ message: "Method not allowed" });
        }
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error", reason: e?.message })
    }
}
