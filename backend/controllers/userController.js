import asyncHandler from "express-async-handler";

// @desc   Auth user/set token
// @route  POST /api/users/auth
//@ access Public
const authUser = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Auth user" });
  res.status(401);
  throw new Error("Smth went wrong");
});

export { authUser };
