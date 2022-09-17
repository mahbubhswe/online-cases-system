import User from "../../../models/User.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();

handler.put(async (req, res) => {
  try {
    await connectMongo();
    const user = await User.findOne({ phone: req.query.phone });
    if (user) {
      await user.findByIdAndUpdate({ _id: user._id }, { isVerified: true });
    } else {
      res.send(`Sorry, account not found!`);
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
