import { MongoClient } from "mongodb";

const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.4rbfsza.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=Cluster0`;

async function connectDB() {
  const client = await MongoClient.connect(connectString);

  return client;
}

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    // store it in a database
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await connectDB();
    } catch (err) {
      res.status(500).json({ message: "Could not connect database" });
    }
    const db = client.db();
    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message fail!" });
      return;
    }
    client.close();
    res
      .status(200)
      .json({ message: "Successfullly stored message", data: newMessage });
  }
}

export default handler;
