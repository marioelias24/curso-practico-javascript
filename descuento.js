function calcularPrecioConDescuento(precio, descuento) {
    return (precio * (100 - descuento)) / 100;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue =inputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue =InputDiscount.value;

    const PrecioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

}

