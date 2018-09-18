let Menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },

        set appetizers(appetizer) {
            this._appetrizers.push(appetrizer);
        },

        get mains() {
            return this._mains;
        },

        set mains(main) {
            this._mains.push(main);
        },

        get desserts() {
            return this._desserts;
        },

        set desserts(dessert) {
            this._desserts.push(dessert);
        }
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        let dish = this._courses[courseName];
        let randomIndex = Math.floor(Math.random() * dish.length);
        return dish[randomIndex];
    },

    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');

        let totalPrice = appetizer.price + main.price + dessert.price;

        return `Your order-\nAppetizer: ${appetizer.name}\nMain: ${main.name}\nDessert: ${dessert.name}\nTotal Price: ${totalPrice}`
    }
};

Menu.addDishToCourse('appetizers', 'Soup', 70);
Menu.addDishToCourse('mains', 'Turkey', 150);
Menu.addDishToCourse('desserts', 'Cake', 100);
console.log(Menu.courses);
console.log(Menu.generateRandomMeal());
