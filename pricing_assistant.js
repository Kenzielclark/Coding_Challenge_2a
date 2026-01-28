let productName = "Novelty Mug";
let costPerUnit = 5;
let basePrice = 34.99;
let discountRate = 0.05;
let salesTaxRate = 0.1;
let fixedMonthlyCost = 100;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;

let isProfitablePerUnit = profitPerUnit > 0;
let breakEvenUnits = isProfitablePerUnit ? Math.ceil(fixedMonthlyCost / profitPerUnit) : 0;


console.log("Discounted Price: $" + discountedPrice.toFixed(2));
console.log("Final Price (with Tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Is Profitable per Unit: " + isProfitablePerUnit);
console.log("Break-Even Units per Month: " + breakEvenUnits);