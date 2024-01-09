// middlewares/authMiddleware.js
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.header("API-Key");

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: "Unauthorized - API key is required" });
  }

  // Validate the apiKey (replace "YOUR_HARD_CODED_API_KEY" with your actual API key)
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Forbidden - Invalid API key" });
  }

  next();
};

export default authenticateApiKey;
