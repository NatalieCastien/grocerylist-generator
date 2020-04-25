const recipes = [
    {
        id: 1,
        img: "linzensoep.png",
        name: "Lentil soup",
        description: "This is a vegan lentil soup",
        ingredients: [
            {   
                id: 9901,             
                productname: "Lentils",
                count: 1                
            },
            {     
                id: 9902,           
                productname: "Coconut milk",
                count: 2                
            },
            {        
                id: 9903,        
                productname: "Tomato",
                count: 3                
            }
        ]
    },
    {
        id: 2,
        img: "madras.jpg",
        name: "Chicken madras",
        description: "This is a vegetarian version of chicken madras",
        ingredients: [
            {    
                id: 9904,            
                productname: "Vegetarian chicken pieces",
                count: 1                
            },
            {           
                id: 9905,     
                productname: "Creme fraiche",
                count: 1                
            },
            {           
                id: 9906,     
                productname: "Paprika",
                count: 1                
            },
            {      
                id: 9907,          
                productname: "Green beans",
                count: 1                
            },
            {           
                id: 9908,     
                productname: "Madras herbs",
                count: 1                
            }

        ]
    },
    {
        id: 3,
        img: "chili.jpg",
        name: "Chili sin carne",
        description: "This is a vegan chili meal",
        ingredients: [
            {   
                id: 9909,             
                productname: "Onion",
                count: 1                
            },
            {     
                id: 9910,           
                productname: "Garlic toe",
                count: 2                
            },
            {        
                id: 9911,        
                productname: "Lentils",
                count: 1                
            },
            {        
                id: 9912,        
                productname: "Vegan minced meat",
                count: 1                
            },
            {        
                id: 9913,        
                productname: "Tomato",
                count: 3                
            },
            {        
                id: 9914,        
                productname: "Kidney beans",
                count: 2                
            },
            {        
                id: 9915,        
                productname: "Chili herbs",
                count: 1                
            },
            {        
                id: 9916,        
                productname: "Corn",
                count: 1                
            },            
            {        
                id: 9917,        
                productname: "Rice",
                count: 1                
            }

        ]
    },
    {
        id: 4,
        img: "couscous.jpg",
        name: "Couscous",
        description: "Vegetarian lemon feta couscous with spinach",
        ingredients: [
            {   
                id: 9918,             
                productname: "Couscous",
                count: 1                
            },
            {     
                id: 9919,           
                productname: "Frozen spinach",
                count: 2                
            },
            {        
                id: 9920,        
                productname: "Red pepper",
                count: 2                
            },
            {        
                id: 9921,        
                productname: "Chickpeas",
                count: 1                
            },
            {        
                id: 9922,        
                productname: "Feta cheese",
                count: 2
            },
            {        
                id: 9923,        
                productname: "Lemon",
                count: 1                
            }            

        ]
    },
    {
        id: 5,
        img: "noodles2.jpg",
        name: "Asian noodle bowl",
        description: "Vegetarian rice noodle bowl with tofu",
        ingredients: [
            {   
                id: 9924,             
                productname: "Tofu",
                count: 1                
            },
            {     
                id: 9925,           
                productname: "Carrot",
                count: 3                
            },
            {        
                id: 9926,        
                productname: "Edaname soybeans",
                count: 4                
            },
            {        
                id: 9927,        
                productname: "Cabbage",
                count: 1                
            },
            {        
                id: 9928,        
                productname: "Rice noodles",
                count: 2
            },
            {        
                id: 9929,        
                productname: "Sesame seeds",
                count: 1                
            },
            {        
                id: 9930,        
                productname: "Soy Sauce",
                count: 1                
            }            

        ]
    },
    {
        id: 6,
        img: "pasta.png",
        name: "Mushroom pasta with spinach",
        description: "Vegetarian pasta dish with mushroom and spinach",
        ingredients: [
            {   
                id: 9931,             
                productname: "Pasta",
                count: 1                
            },
            {     
                id: 9932,           
                productname: "Onion",
                count: 1                
            },
            {        
                id: 9933,        
                productname: "Garlic",
                count: 3                
            },
            {        
                id: 9934,        
                productname: "Mushroom",
                count: 4               
            },
            {        
                id: 9935,        
                productname: "Spinach",
                count: 2
            },
            {        
                id: 9936,        
                productname: "Pine nuts",
                count: 1                
            },
            {        
                id: 9937,        
                productname: "Soy Sauce",
                count: 1                
            },
            {        
                id: 9938,        
                productname: "Plant-based cream",
                count: 1                
            }            

        ]
    },
    {
        id: 7,
        img: "risotto.jpg",
        name: "Mushroom risotto",
        description: "Vegan risotto with mushrooms and spinach",
        ingredients: [
            {   
                id: 9939,             
                productname: "Risotto rice",
                count: 1                
            },
            {     
                id: 9940,           
                productname: "Chestnut mushrooms",
                count: 2                
            },
            {        
                id: 9941,        
                productname: "Red onion",
                count: 1                
            },
            {        
                id: 9942,        
                productname: "Leek",
                count: 1               
            },
            {        
                id: 9943,        
                productname: "Tomato",
                count: 2
            },
            {        
                id: 9944,        
                productname: "White wine",
                count: 1                
            },
            {        
                id: 9945,        
                productname: "Garlic",
                count: 2                
            },
            {        
                id: 9946,        
                productname: "Vegetable stock",
                count: 1                
            }            

        ]
    },
    {
        id: 8,
        img: "quiche.jpg",
        name: "Quich",
        description: "Quiche with asparagus and mushrooms",
        ingredients: [
            {   
                id: 9947,             
                productname: "Puff pastry",
                count: 1                
            },
            {     
                id: 9948,           
                productname: "Green asparagus",
                count: 3                
            },
            {        
                id: 9949,        
                productname: "Red onion",
                count: 1                
            },
            {        
                id: 9950,        
                productname: "Tomato",
                count: 3               
            },
            {        
                id: 9951,        
                productname: "Carrot",
                count: 2
            },
            {        
                id: 9952,        
                productname: "Rosemary",
                count: 1                
            },
            {        
                id: 9953,        
                productname: "Spring onion",
                count: 2                
            },
            {        
                id: 9954,        
                productname: "Chestnut mushrooms",
                count: 1                
            },
            {        
                id: 9955,        
                productname: "Spinach",
                count: 1                
            }            

        ]
    },
    {
        id: 9,
        img: "paprika.jpg",
        name: "Stuffed bell pepper",
        description: "Bell pepper filled with mushrooms, vegan meat and couscous",
        ingredients: [
            {   
                id: 9956,             
                productname: "Bell pepper",
                count: 4                
            },
            {     
                id: 9957,           
                productname: "Vegan minced meat",
                count: 1                
            },
            {        
                id: 9958,        
                productname: "Onion",
                count: 1                
            },
            {        
                id: 9959,        
                productname: "Garlic",
                count: 3               
            },
            {        
                id: 9960,        
                productname: "Mushrooms",
                count: 2
            },
            {        
                id: 9961,        
                productname: "Soy sauce",
                count: 1                
            },
            {        
                id: 9962,        
                productname: "Herbs",
                count: 2                
            },
            {        
                id: 9963,        
                productname: "Tomato paste",
                count: 1                
            }              
        ]
    },
    {
        id: 10,
        img: "cake.jpg",
        name: "No-egg cake",
        description: "Cake baked without any eggs",
        ingredients: [
            {   
                id: 9964,             
                productname: "Cakemix",
                count: 1                
            },
            {     
                id: 9965,           
                productname: "Soy milk",
                count: 1                
            },
            {        
                id: 9966,        
                productname: "Sunflower oil",
                count: 1                
            },
            {        
                id: 9967,        
                productname: "Vanilla sugar",
                count: 1               
            } 
        ]
    },

]

export default recipes;