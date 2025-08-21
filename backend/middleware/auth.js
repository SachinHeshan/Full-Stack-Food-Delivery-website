import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        const { token } = req.headers;
        
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized - No token provided" });
        }

        const token_decoded = JWT.verify(
            token,
            process.env.JWT_SECRET || 'fallback_secret_key'
        );
        
        // Add user info to req.user (not req.body.user)
        req.user = token_decoded;
        
        next();
    } catch (error) {
        console.log("Auth middleware error:", error);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: "Token expired" });
        }
        
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export default authMiddleware;