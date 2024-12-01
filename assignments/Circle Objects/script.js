const circle = {
    radius: 5,
    center: {
        x: 50,
        y: 50
    },

    getRadius: function () {
        return this.radius;
    },
    setRadius: function (radius) {
        this.radius = radius;
    },
    getCenter: function () {
        return this.center;
    },
    setCenter: function (center) {
        this.center = center;
    },

    getArea: function () {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    },

    grow: function (amount) {
        if (amount > 0) {
            this.radius += amount;
        } else {
            console.log("Amount must be positive");
        }
    },

    shrink: function (amount) {
        if (amount > 0 && this.radius - amount >= 0) {
            this.radius -= amount;
        } else {
            console.log("Amount must be positive and radius cannot be negative");
        }
    },

    printDetails: function () {
        console.log(`Circle Details:`);
        console.log(`Radius: ${this.radius}`);
        console.log(`Center: (${this.center.x}, ${this.center.y})`);
    },

    equals: function (otherCircle) {
        return this.radius === otherCircle.getRadius() &&
            this.center.x === otherCircle.getCenter().x &&
            this.center.y === otherCircle.getCenter().y;
    }
};


circle.printDetails();
console.log("Area:", circle.getArea());
console.log("Perimeter:", circle.getPerimeter());


circle.setRadius(10);
circle.setCenter({ x: 100, y: 100 });


circle.grow(5);
circle.printDetails();

circle.shrink(3);
circle.printDetails();


const anotherCircle = {
    radius: 12,
    center: { x: 100, y: 100 },
    getRadius: circle.getRadius,
    getCenter: circle.getCenter
};

console.log("Are the two circles equal?", circle.equals(anotherCircle));
