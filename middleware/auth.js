const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded;

		next();
	} catch (err) {
		return res.status(403).json({
			error: "Please login.",
		});
	}
};
