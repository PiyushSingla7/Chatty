import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
  httpOnly: true,       // Prevents JavaScript access (XSS protection)
  secure: true,         // Ensures it's sent over HTTPS only
  sameSite: 'None',     // Allows cross-site requests (important for frontend-backend on different domains)
  path: '/',            // Makes the cookie available on all routes
  expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Optional: Set expiration time
});

  return token;
};
