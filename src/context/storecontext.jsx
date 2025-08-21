import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        // Optimistic local update
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        
        if (token) {
            try {
                const response = await axios.post(
                    `${url}/api/cart/add`,
                    { itemId },
                    { headers: { token, Authorization: `Bearer ${token}` } }
                );
                if (response?.data?.success && response?.data?.cartData) {
                    setCartItems(response.data.cartData);
                }
            } catch (error) {
                console.error("Error adding to cart:", error?.response?.data || error.message);
                // rollback optimistic update
                setCartItems((prev) => ({
                    ...prev,
                    [itemId]: Math.max(0, (prev[itemId] || 1) - 1),
                }));
            }
        }
    };

    const removeFromCart = async (itemId) => {
        const currentQuantity = cartItems[itemId] || 0;
        
        // Optimistic local update
        setCartItems((prev) => {
            const newQuantity = (prev[itemId] || 0) - 1;
            if (newQuantity <= 0) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [itemId]: newQuantity };
        });
        
        if (token) {
            try {
                const response = await axios.post(
                    `${url}/api/cart/remove`,
                    { itemId },
                    { headers: { token, Authorization: `Bearer ${token}` } }
                );
                if (response?.data?.success && response?.data?.cartData) {
                    setCartItems(response.data.cartData);
                }
            } catch (error) {
                console.error("Error removing from cart:", error?.response?.data || error.message);
                // rollback to previous quantity
                setCartItems((prev) => {
                    if (currentQuantity === 0) {
                        // nothing to rollback
                        return prev;
                    }
                    return { ...prev, [itemId]: currentQuantity };
                });
            }
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find(
                    (product) => String(product._id) === String(item)
                );
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    // Load cart data from server when token is available
    const loadCartData = async () => {
        if (token) {
            try {
                const response = await axios.get(`${url}/api/cart/get`, {
                    headers: { token }
                });
                if (response.data.success) {
                    setCartItems(response.data.cartData || {});
                }
            } catch (error) {
                console.error("Error loading cart data:", error);
            }
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
                // Load cart data after setting token
                try {
                    const response = await axios.get(`${url}/api/cart/get`, {
                        headers: { token: savedToken }
                    });
                    if (response.data.success) {
                        setCartItems(response.data.cartData || {});
                    }
                } catch (error) {
                    console.error("Error loading cart data:", error);
                }
            }
        }
        loadData();
    }, []);

    // Load cart data when token changes
    useEffect(() => {
        if (token) {
            loadCartData();
        }
    }, [token]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        loadCartData,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;