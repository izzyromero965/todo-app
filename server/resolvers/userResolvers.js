import bcrypt from "bcrypt";
import User from "../models/User.js";

export async function createUser(root, args) {
  const hashedPassword = await bcrypt.hash(args.password, 10);
  const newUser = new User({
    username: args.username,
    password: hashedPassword,
  });

  await newUser.save();
  return newUser;
}

export async function getUser(root, args) {
  const user = await User.findById(args.id);
  return user;
}

export default {
  Mutation: {
    createUser,
  },
};
