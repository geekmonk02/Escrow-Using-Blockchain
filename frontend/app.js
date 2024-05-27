const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});










document.getElementById('loginButton').addEventListener('click', function() {
    // Hide login page and show choice page
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('choicePage').classList.remove('hidden');
});

document.getElementById('buyerButton').addEventListener('click', function() {
    // Hide choice page and show buyer signup page
    document.getElementById('choicePage').classList.add('hidden');
    document.getElementById('buyerSignupPage').classList.remove('hidden');
});

document.getElementById('sellerButton').addEventListener('click', function() {
    // Hide choice page and show seller signup page
    document.getElementById('choicePage').classList.add('hidden');
    document.getElementById('sellerSignupPage').classList.remove('hidden');
});

document.getElementById('cancelChoiceButton').addEventListener('click', function() {
    // Hide choice page and show login page
    document.getElementById('choicePage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
});

document.getElementById('cancelBuyerButton').addEventListener('click', function() {
    // Hide buyer signup page and show login page
    document.getElementById('buyerSignupPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
});

document.getElementById('cancelSellerButton').addEventListener('click', function() {
    // Hide seller signup page and show login page
    document.getElementById('sellerSignupPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
});