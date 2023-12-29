"use strict";
function detectType(val) {
    if (typeof val === "number") {
        val.toFixed(2);
    }
    else if (typeof val === "string") {
        val.toLowerCase();
    }
}
function provideId(id) {
    if (!id) {
        console.log("No id provided");
        return;
    }
    id.toLowerCase();
}
function isFish(animal) {
    return animal.swim() !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "Fish food";
    }
    else {
        return "Bird food";
    }
}
