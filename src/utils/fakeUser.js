const { faker } = require("@faker-js/faker")

//faker.location 

const generate = () =>{
    return {
        name: faker.commerce.productName, 
        price: faker.commerce.price
    };
};

module.exports = generate;