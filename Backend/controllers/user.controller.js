import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  const { email } = req.body;
  console.log("Incoming email: ", email);
  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email Not Received" });
    }
    let findUser = false;
    findUser = await User.findOne({ email });
    console.log("find User: ", findUser);
    if (findUser) {
      console.log("User exists");
      return res
        .status(300)
        .json({ success: false, message: "Account Exists" });
    }
    const newUser = await new User({ email });
    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: `New User created with email ${email}` });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Some error occurred" });
  }
};

const updateUserData = async (req, res) => {
  try {
    const { email, firstName, lastName, mobile, address } = req.body;
    if (!firstName || !lastName || !mobile || !address) {
      return res
        .status(400)
        .json({ success: false, message: "All details required" });
    }
    const findUser = await User.findOneAndUpdate(
      { email },
      {
        firstName,
        lastName,
        mobile,
        address,
        dataSet: true,
      }
    );
    res
      .status(204)
      .json({ success: true, message: "Details added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Some error occured" });
  }
};

const updatePassword = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  console.log("Entered");
  const { email, newPassword, confirmPassword } = req.body;
  const findUser = await User.findOne({ email });
  try {
    if (!findUser) {
      return res
        .status(500)
        .json({ success: false, message: "User does not exist" });
    }
    if (await bcrypt.compare(findUser.password, newPassword)) {
      console.log("Passwords same");
      return res
        .status(400)
        .json({ success: false, message: "Enter a different Password" });
    } else {
      if (newPassword == confirmPassword) {
        console.log("Second last step");
        findUser.password = await bcrypt.hash(newPassword, salt);
        findUser.save();
        console.log("Final step");
        res
          .status(204)
          .json({ status: true, message: "Password Updated Successfully" });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Passwords Not Same" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Some error occured" });
  }
};

const getUser = async (req, res) => {
  console.log("REQ.PARAMS: ", req.params);
  const { email } = await req.params;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email not received" });
  }
  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(200).json({ success: true, user: findUser });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: "Some Error occured" });
  }
};

const sendMessage = async (req, res) => {
  const { email, message } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email not received" });
  }
  if (!message) {
    return res
      .status(400)
      .json({ success: false, message: "Message cannot be empty" });
  }
  try {
    const findUser = await User.findOne({ email });
    console.log("User: ", findUser.messages);
    findUser.messages.push(message);
    await findUser.save();
    return res
      .status(200)
      .json({ success: true, message: "message pushed into db" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "some error occured" });
  }
};

export { registerUser, updateUserData, updatePassword, getUser, sendMessage };
