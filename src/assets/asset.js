const menu_1 = "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const menu_2 = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const menu_3 = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const menu_4 = "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const menu_5 = "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const menu_6 = "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const menu_7 = "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const menu_8 = "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

export const menu_list = [
    {
        _id: "cat1", 
        menu_image: menu_1,
        menu_name: "sandwich",
        price: 12,
        category: "sandwichs",
        description: "Juicy grilled burger with fresh lettuce and tomato.",
        rating: 4.5,
        rating_count: 128
    },
    { 
        _id: "cat2", 
        menu_image: menu_2, 
        menu_name: "salad", 
        price: 5, 
        category: "salads", 
        description: "Crispy golden fries with a side of ketchup.",
        rating: 4.2,
        rating_count: 95
    },
    { 
        _id: "cat3", 
        menu_image: menu_3, 
        menu_name: "roll", 
        price: 15, 
        category: "rolls", 
        description: "Cheesy pizza topped with pepperoni and olives.",
        rating: 4.7,
        rating_count: 210
    },
    { 
        _id: "cat4", 
        menu_image: menu_4, 
        menu_name: "Salad", 
        price: 8, 
        category: "salads", 
        description: "Fresh garden salad with a light vinaigrette.",
        rating: 4.0,
        rating_count: 76
    },
    { 
        _id: "cat5", 
        menu_image: menu_5, 
        menu_name: "dessert", 
        price: 10, 
        category: "desserts", 
        description: "Classic Italian pasta with rich tomato sauce.",
        rating: 4.3,
        rating_count: 142
    },
    { 
        _id: "cat6", 
        menu_image: menu_6, 
        menu_name: "cake", 
        price: 20, 
        category: "cakes", 
        description: "Tender steak cooked to perfection.",
        rating: 4.8,
        rating_count: 189
    },
    { 
        _id: "cat7", 
        menu_image: menu_7, 
        menu_name: "pasta", 
        price: 6, 
        category: "pastas", 
        description: "Creamy vanilla ice cream with chocolate syrup.",
        rating: 4.6,
        rating_count: 203
    },
    { 
        _id: "cat8", 
        menu_image: menu_8, 
        menu_name: "pure veg", 
        price: 18, 
        category: "pure vegs", 
        description: "Assorted sushi rolls with fresh fish.",
        rating: 4.9,
        rating_count: 156
    }
];

export const food_list = [
    // Sandwiches (3)
    {
        _id: "food1",
        food_image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Classic Sandwich",
        price: 8,
        category: "sandwich",
        description: "Fresh bread with turkey, cheese, and veggies.",
        rating: 4.3,
        rating_count: 92
    },
    {
        _id: "food2",
        food_image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Grilled Cheese",
        price: 6,
        category: "sandwichs",
        description: "Melted cheese between toasted bread slices.",
        rating: 4.5,
        rating_count: 120
    },
    {
        _id: "food3",
        food_image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Club Sandwich",
        price: 10,
        category: "sandwichs",
        description: "Triple-decker with chicken, bacon, and avocado.",
        rating: 4.6,
        rating_count: 85
    },

    // Salads (4)
    {
        _id: "food4",
        food_image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Greek Salad",
        price: 9,
        category: "salads",
        description: "Fresh veggies with feta cheese and olives.",
        rating: 4.2,
        rating_count: 76
    },
    {
        _id: "food5",
        food_image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Quinoa Salad",
        price: 11,
        category: "salads",
        description: "Healthy quinoa with roasted vegetables.",
        rating: 4.4,
        rating_count: 68
    },
    {
        _id: "food6",
        food_image: "https://www.hipmamasplace.com/wp-content/uploads/2021/06/199259152_166663622165057_6223652316946896551_n.jpg",
        food_name: "Fruit Salad",
        price: 7,
        category: "salads",
        description: "Seasonal fruits with honey dressing.",
        rating: 4.7,
        rating_count: 103
    },
    {
        _id: "food7",
        food_image: "https://desireerd.com/wp-content/uploads/2024/06/Spinach-Berry-Salad-3-250x250.jpg",
        food_name: "Spinach Salad",
        price: 8,
        category: "salads",
        description: "Fresh spinach with strawberries and nuts.",
        rating: 4.3,
        rating_count: 57
    },

    // Rolls (2)
    {
        _id: "food8",
        food_image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Spring Rolls",
        price: 6,
        category: "rolls",
        description: "Crispy vegetable rolls with dipping sauce.",
        rating: 4.5,
        rating_count: 89
    },
    {
        _id: "food9",
        food_image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Sushi Rolls",
        price: 12,
        category: "rolls",
        description: "Assorted fresh sushi with wasabi.",
        rating: 4.8,
        rating_count: 124
    },

    // Desserts (4)
    {
        _id: "food10",
        food_image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Chocolate Cake",
        price: 7,
        category: "desserts",
        description: "Rich chocolate cake with ganache.",
        rating: 4.9,
        rating_count: 145
    },
    {
        _id: "food11",
        food_image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Cheesecake",
        price: 8,
        category: "desserts",
        description: "Creamy cheesecake with berry topping.",
        rating: 4.7,
        rating_count: 132
    },
    {
        _id: "food12",
        food_image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Ice Cream",
        price: 5,
        category: "desserts",
        description: "Vanilla ice cream with toppings.",
        rating: 4.6,
        rating_count: 98
    },
    {
        _id: "food13",
        food_image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Fruit Tart",
        price: 6,
        category: "desserts",
        description: "Buttery crust with custard and fruits.",
        rating: 4.5,
        rating_count: 87
    },

    // Cakes (2)
    {
        _id: "food14",
        food_image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Red Velvet Cake",
        price: 9,
        category: "cakes",
        description: "Moist red velvet with cream cheese frosting.",
        rating: 4.8,
        rating_count: 110
    },
    {
        _id: "food15",
        food_image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Carrot Cake",
        price: 8,
        category: "cakes",
        description: "Spiced cake with cream cheese icing.",
        rating: 4.6,
        rating_count: 94
    },

    // Pasta (2)
    {
        _id: "food16",
        food_image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Spaghetti Carbonara",
        price: 12,
        category: "pastas",
        description: "Classic pasta with creamy egg sauce.",
        rating: 4.7,
        rating_count: 105
    },
    {
        _id: "food17",
        food_image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Penne Arrabbiata",
        price: 11,
        category: "pastas",
        description: "Spicy tomato sauce with penne pasta.",
        rating: 4.5,
        rating_count: 88
    },

    // Pure Veg (2)
    {
        _id: "food18",
        food_image: "https://img.taste.com.au/kUVCKnrN/taste/2016/11/indian-style-vegetable-curry-59371-1.jpeg",
        food_name: "Vegetable Curry",
        price: 10,
        category: "pure vegs",
        description: "Mixed vegetables in aromatic spices.",
        rating: 4.4,
        rating_count: 76
    },
    {
        _id: "food19",
        food_image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Stir Fry Vegetables",
        price: 9,
        category: "pure vegs",
        description: "Fresh veggies stir-fried in light sauce.",
        rating: 4.3,
        rating_count: 65
    },

    // Noodles (2)
    {
        _id: "food20",
        food_image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        food_name: "Chow Mein",
        price: 11,
        category: "noodles",
        description: "Stir-fried noodles with vegetables.",
        rating: 4.6,
        rating_count: 97
    }
  
];
const rating = "frontend/src/assets/rating.png";

// Rating star image (you would typically import this from your assets)
export const rating_star = "https://cdn-icons-png.flaticon.com/128/10801/10801392.png";
export const add_icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcodSAtIXafKUinbJYZiaHGz1SAINoYQ-RA&s";
export const remove_icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPZJ_r6LjUR1N_xKhlGgHQ2Ng18NHi4UGag&s";
export const logo = "https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!sw800";
export const playstore = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png";
export const appstore = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png";