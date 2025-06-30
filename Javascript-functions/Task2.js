function calculateDiscount(price, discountPercent) {
    if (discountPercent > 100 || price < 0) {
        return "Xəta";
    }

    const resultPrice = price * (100 - discountPercent) / 100;
    return Math.round(resultPrice * 100) / 100;
}

console.log(calculateDiscount(100, 20));   // 80
console.log(calculateDiscount(59.9, 15));  // 50.92
console.log(calculateDiscount(200, 0));    // 200
console.log(calculateDiscount(150, 110));  // Xəta mesajı
console.log(calculateDiscount(-10, 10));   // Xəta mesajı
