import User from "../../../models/User.js";
import nextConnect from "next-connect";
import bcryptjs from "bcryptjs";
import connectMongo from "../../../utils/connectMongo.js";
const handler = nextConnect();
handler.post(async (req, res, next) => {
  try {
    await connectMongo();
    //check phone exist or not
    const isExist = await User.findOne({ phone:  `+88${req.body.phone}` });
    if (isExist) {
     return res.send("Sorry, this phone number already exists with another account.");
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: `+88${req.body.phone}`,
      dob: req.body.dob,
      address: req.body.address,
      password: bcryptjs.hashSync(req.body.password),
    });
    await newUser.save();
    res.status(200).send("Account has been created successfully");
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
