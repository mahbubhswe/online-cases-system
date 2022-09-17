import User from "../../../models/User.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();

handler.put(async (req, res) => {
  try {
    await connectMongo();
    await User.findByIdAndUpdate({ _id: req.body.id }, { ...req.body });
    res.send(`Profile updated successfully`);
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
