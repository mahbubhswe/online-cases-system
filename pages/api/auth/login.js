import User from "../../../models/User.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
import bcryptjs from "bcryptjs";
import { signToken } from "../../../utils/auth.js";
const handler = nc();
handler.post(async (req, res, next) => {
  const phone = `+88${req.query.phone}`;
  console.log(phone);
  try {
    await connectMongo();
    const user = await User.findOne({ phone: phone });
    if (user && bcryptjs.compareSync(req.query.password, user.password)) {
      const token = signToken(user);
      res.status(200).send({
        token,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        createdAt: user.createdAt,
        dob: user.dob,
        isVerified: user.isVerified,
      });
    } else if (user) {
      res.send("Invalid phone or password");
    } else {
      res.send("Sorry, no account exists with this phone number");
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
