require("dotenv").config();

const emailConfig = {
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	secure: process.env.EMAIL_SECURE,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
	ignoreTLS: true,
	rejectUnauthorized: false,
	tls: {
		ciphers: "SSLv3",
	},
};

const from_address = process.env.FROM_ADDRESS;

module.exports = { emailConfig, from_address };
