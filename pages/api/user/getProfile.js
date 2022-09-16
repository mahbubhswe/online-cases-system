import User from "../../../models/User.js";
import nextConnect from "next-connect";
import connectMongo from "../../../utils/connectMongo.js";
const handler = nextConnect();
handler.get(async (req, res) => {
  try {
    await connectMongo();
    const user = await User.findOne({ phone: req.query.phone });
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
