const jwt = require("jsonwebtoken");

const verifyTokenUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        return res
            .status(401)
            .json({ success: false, message: "Access token not found" });
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userId = decoded.userId;
        console.log('verifytoken:',decoded);
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res
                .status(403)
                .json({ success: false, message: "Invalid token" });
        }
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

const verifyTokenAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        return res
            .status(401)
            .json({ success: false, message: "Access token not found" });
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.adminId = decoded.adminId;
        if (!req.adminId) {
            return res
                .status(403)
                .json({ success: false, message: "Admin access required" });
        }
        console.log('verifytoken:',decoded);
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res
                .status(403)
                .json({ success: false, message: "Invalid token" });
        }
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = { verifyTokenUser, verifyTokenAdmin };