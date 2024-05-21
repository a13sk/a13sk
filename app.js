const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Пуэр",
    price: 3799,
    colors: [
      {
        code: "black",
        img: "./img/pr.png",
      },
      {
        code: "darkblue",
        img: "./img/pr.png",
      },
    ],
  },
  {
    id: 2,
    title: "Зеленый чай",
    price: 2640,
    colors: [
      {
        code: "lightgray",
        img: "./img/zlb.png",
      },
      {
        code: "green",
        img: "./img/zlb.png",
      },
    ],
  },
  {
    id: 3,
    title: "Черный чай",
    price: 945,
    colors: [
      {
        code: "lightgray",
        img: "./img/4rb.png",
      },
      {
        code: "green",
        img: "./img/4rb.png",
      },
    ],
  },
  {
    id: 4,
    title: "Белый чай",
    price: 2588,
    colors: [
      {
        code: "black",
        img: "./img/blb.png",
      },
    ],
  },
  {
    id: 5,
    title: "Лаосский чай",
    price: 5624,
    colors: [
      {
        code: "gray",
        img: "./img/lao.png",
      },
      {
        code: "black",
        img: "./img/lao.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₽" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
