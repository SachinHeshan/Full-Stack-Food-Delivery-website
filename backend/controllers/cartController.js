import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        // Check if user ID is available (from authenticated middleware)
        const userId = req.user?.id || req.body.userId;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        const { itemId } = req.body;
        
        if (!itemId) {
            return res.status(400).json({ success: false, message: "Item ID is required" });
        }

        let userData = await userModel.findById(userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        
        // Initialize if doesn't exist, otherwise increment
        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }
        
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Item added to cart", cartData });
    } catch (error) {
        console.log("Add to cart error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        // Check if user ID is available (from authenticated middleware)
        const userId = req.user?.id || req.body.userId;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        const { itemId } = req.body;
        
        if (!itemId) {
            return res.status(400).json({ success: false, message: "Item ID is required" });
        }

        let userData = await userModel.findById(userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        
        if (cartData[itemId] > 0) {
            cartData[itemId] -= 1;
            
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        } else {
            return res.status(400).json({ success: false, message: "Item not in cart" });
        }
        
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Item removed from cart", cartData });
    } catch (error) {
        console.log("Remove from cart error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        // Check if user ID is available (from authenticated middleware)
        const userId = req.user?.id || req.body.userId;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        let userData = await userModel.findById(userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.log("Get cart error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { addToCart, removeFromCart, getCart };