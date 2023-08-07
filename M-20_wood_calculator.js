function woodCalculator(chairQuantity, doorQuantity, bedQuantity) {
    const perChair = 3;
    const perDoor = 10;
    const perBed = 50;

    const chairWood = perChair * chairQuantity;
    const doorWood = perDoor * doorQuantity;
    const bedWood = perBed * bedQuantity;

    const total = chairWood + doorWood + bedWood;
    return total;
}
const totalQuantity = woodCalculator(1, 2, 3);
console.log(totalQuantity);