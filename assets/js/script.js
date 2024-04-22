// Hamburger
let menu = document.querySelector('#menu');
let overlay = document.querySelector('.overlay');
let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.close');
menu.addEventListener('click', ()=>{
    overlay.style.display = 'block';
    hamburger.style.display = 'flex';
    overlay.style.opacity = '1';
    hamburger.style.opacity = '1';
})
close.addEventListener('click', ()=>{
    overlay.style.display = 'none';
    hamburger.style.display = 'none';
    overlay.style.opacity = '0';
    hamburger.style.opacity = '0';
})
// --End--

// Product Items Quantity and Add to Cart
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let quantity = document.querySelector('.quantity');
let val = parseInt(quantity.textContent);

// Change Main Image by Thumbnail Images Click
let popImgs = document.querySelectorAll('.thumbPopImages > img');
let imgs = document.querySelectorAll('.thumbImages > img');
let mainImage = document.querySelector('.mainImage');
let mainImages = document.querySelectorAll('.mainImage');
let arr = [
    'assets/img/image-product-1.jpg',
    'assets/img/image-product-2.jpg',
    'assets/img/image-product-3.jpg',
    'assets/img/image-product-4.jpg'
];
// Thumbnail Clicks
imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        img.style.cursor = 'pointer';
        mainImages.forEach((mainImage) => {
            mainImage.src = arr[index];
        });
        console.log('Thumbnail clicked');
    });
});
// Popup Thumbnail Clicks
popImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        img.style.cursor = 'pointer';
        mainImages.forEach((mainImage) => {
            mainImage.src = arr[index];
        });
        console.log('Thumbnail clicked');
    });
});
// --End--

// Popup Controls and Changes

// Popup Open or Show
let popup = document.querySelector('.imgPopup');
let bannerImg = document.querySelector('.bannerImg');
function openPopup(){
    popup.style.display = 'flex';
    popup.style.opacity = '1';
}
function resizeFunc(){
    if(window.innerWidth > 767){
        bannerImg.style.cursor = 'pointer';
        bannerImg.addEventListener('click', openPopup);
    }else{
        bannerImg.removeEventListener('click', openPopup);
    }
}
resizeFunc();
window.addEventListener('resize', resizeFunc);

// Popup Close or Hide
let closePopup = document.querySelector('.closePopup');
closePopup.addEventListener('click',()=>{
    popup.style.display = 'none';
    popup.style.opacity = '0';
})

// Next Item

let mainImgs = document.querySelectorAll('.mainImage');
let mainImg = document.querySelector('.mainImage');
let mainMobImage = document.querySelector('.mainMobImage');
let arrs = [
    'assets/img/image-product-1.jpg',
    'assets/img/image-product-2.jpg',
    'assets/img/image-product-3.jpg',
    'assets/img/image-product-4.jpg'
];
let i = 0;
let nextButton = document.querySelector('.next');
let nextPopButton = document.querySelector('.nextPop');
nextButton.addEventListener('click', nextBtn);
nextPopButton.addEventListener('click', nextPopBtn);
function nextBtn() {
    i++;
    if(i >= arrs.length) { 
        i = 0; 
    }
    mainMobImage.src = arrs[i];
    console.log('next clicked');
}
function nextPopBtn() {
    i++;
    if(i >= arrs.length) { 
        i = 0; 
    }
    mainImg.src = arrs[i];
    // mainMobImage.src = arrs[i];
    console.log('next PopUp clicked');
}

// Prev Item
let prevButton = document.querySelector('.prev');
let prevPopButton = document.querySelector('.prevPop');
prevButton.addEventListener('click', prevBtn);
prevPopButton.addEventListener('click', prevPopBtn);
function prevBtn() {
    i--;
    if(i < 0) { 
        i = arrs.length - 1; 
    }
    mainMobImage.src = arrs[i];
    console.log('prev clicked');
}
function prevPopBtn() {
    i--;
    if(i < 0) { 
        i = arrs.length - 1; 
    }
    mainImg.src = arrs[i];
    // mainMobImage.src = arrs[i];
    console.log('prev PopUp clicked');
}
// --End--

// Quantity Selection

// Increase Item
increase.addEventListener( 'click', function() {
    if(val<10){
        val++;
        quantity.textContent = val;
        console.log('Increased');
        singleCart();
    }
})
// Decrease Item
decrease.addEventListener( 'click', function() {
    if(val>1){
        val--;
        quantity.textContent = val;
        console.log('Decreased');
        singleCart();
    }
})
// --End--

// Cart Section
let cartButton = document.querySelector( '#cartButton' );
let sup = document.querySelector( '#sup' );
let cart = document.querySelector( '#cart' );
let deleteCarts = document.querySelectorAll( '.deleteCart' );

// Cart Icon Click
cartButton.addEventListener('click', () => {
    if(cart.style.display == 'block'){
        cart.style.display = 'none';
        console.log('Cart Item Hidden');
    }else{
        cart.style.display = 'block';
        console.log('Cart Item Visible');
    }
})

// Creating Single Cart Item
let singleCart = () => {
    let cartItems = document.querySelectorAll('.cartItem');
    // Loop through each cart item
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let cartQuantity = cartItem.querySelector('.cartQuantity');
        let cartPrice = cartItem.querySelector('.cartPrice');
        let cartTotal = cartItem.querySelector('.cartTotal');
        let price = parseFloat(cartPrice.innerText.replace('$', ''));
        let quantity = parseFloat(cartQuantity.innerText = val);
        let total = '$';
        total = total + (price * quantity);
        cartTotal.innerText = total;
    }
};

// Add to Cart
let addCart = document.querySelector('.addToCart');
addCart.addEventListener('click', addCartSection);

function addCartSection(){
    let cartImg = document.querySelector('.mainImage').src;
    cartImg = 'assets/img/image-product-1.jpg';
    let title = document.querySelector('.title').innerText;
    let priceText = document.querySelector('.price').innerText;
    let price = parseFloat(priceText.replace('$', ''));
    let quantity = parseFloat(document.querySelector('.quantity').innerText);
    let total = '$';
    total += price * quantity;
    addToCart(title, price, cartImg, quantity, total);
}
function addToCart(title, price, cartImg, quantity, total){
    let cartCount = 0;
    let carts = document.querySelector('.cartAllItems');
    let existingTitle = document.querySelectorAll('.cartItem h4');
    for(let item of existingTitle){
        if(item.innerText.includes(title)){
            alert('Item already has been Ordered!');
            return;
        }
    }
    let cartItemContent = `
    <ul class="cartItem flex items-center justify-between gap-5">
    <li><img class="w-[60px] rounded-lg" src="${cartImg}" alt=""></li>
    <li>
    <h4 class="text-base text-dark-grey-blue font-bold">${title}<br><span class="cartPrice">${price}</span> x <span class="cartQuantity">${quantity}</span> = <span class="cartTotal text-black text-lg font-bold">${total}</span></h4>
    </li>
    <li><button class='deleteCart' href=""><img src="assets/img/icon-delete.svg" alt=""></button></li>
    </ul>`
    let div = document.createElement('div');
    div.classList.add('hello');
    carts.append(div);
    div.innerHTML = cartItemContent;
    let deletebtn = div.querySelector('.deleteCart');
    deletebtn.addEventListener('click', (e)=>{
        e.preventDefault();
        div.remove();
        sup.textContent = '';
        toggleEmptyCartMessage();
    })
    toggleEmptyCartMessage();
    cartCount++;
    sup.textContent = cartCount;
}

// Delete Single Cart
deleteCarts.forEach(deleteCart=>{
    deleteCart.addEventListener('click', ()=>{
        let cartItem = deleteCart.closest('.cartItem');
        cartItem.remove();
        console.log('Cart Item deleted');
    })
})

// Purchase Done
let purchasebtn = document.querySelector('#purchase');
purchasebtn.addEventListener('click', purchase);
function purchase(){
    alert('Thank you for the Purchase');
    let cartAllItems = document.querySelector('.cartAllItems');
    while(cartAllItems.hasChildNodes()){
        cartAllItems.removeChild(cartAllItems.firstChild);
    }
    cartAllItems.append(emptyCartMessage);
    toggleEmptyCartMessage();
    sup.textContent = '';
}

// Initial setup: Create a h4 element for showing cart is empty
let cartAllItems = document.querySelector('.cartAllItems');
let emptyCartMessage = document.createElement('h4');
emptyCartMessage.classList.add('nothing');
emptyCartMessage.innerText = 'Your cart is empty';
emptyCartMessage.style.textAlign = 'center';
emptyCartMessage.style.fontWeight = 'bold';
emptyCartMessage.style.padding = '20px';
cartAllItems.append(emptyCartMessage);

// Function to toggle the visibility of the empty cart message
function toggleEmptyCartMessage() {
    if (cartAllItems.children.length <= 1) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
    }
    return;
}



