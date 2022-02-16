function updateProductNumber(products, price, isIncreasing) {
    const productInput = document.getElementById(products + '-counter');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // Update Total 
    const productTotal = document.getElementById(products + '-total');
    productTotal.innerText = productNumber * price;
};

// Handle increase decrease events 
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 1219, true);
});
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 1219, false);
});
// Handle phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 59, true);
})
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 59, false);
})