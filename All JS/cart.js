let user = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 1000,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
let totalprice = 0;

let x = user.length;
document.querySelector("#totalitems").innerText = `My Cart (${x} Items)`;

//? plusfun
let plusfun = (price) => {
  let x = document.querySelector("#changecen").value;
  x = +x + 1;
  if (x < 10) {
    document.querySelector("#changecen").value = x;
    totalprice += price;
    document.querySelector("#TotalPriceCArt").innerText = totalprice.toFixed(2);
    document.querySelector("#TotalcartAmount").innerText =
      totalprice.toFixed(2);
  }
};

//? minfun
let minfun = (price) => {
  let x = document.querySelector("#changecen").value;
  x = +x;
  if (x !== 1) {
    document.querySelector("#changecen").value = x - 1;
    totalprice -= price;
    document.querySelector("#TotalPriceCArt").innerText = totalprice.toFixed(2);
    document.querySelector("#TotalcartAmount").innerText =
      totalprice.toFixed(2);
  }
};

                                      //!  Append

let append = (data) => {
  console.log("🚀 ~ file: cart.js ~ line 63 ~ append ~ data", data)
  
  totalprice=0;
  document.querySelector("#cartProduct").innerHTML="";
  
  data.forEach(function (ele, index) {
    let maindiv = document.createElement("div");
    maindiv.setAttribute("id", "CPmaindiv");
    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id", "CPupperdiv");
    let lowerdiv = document.createElement("div");
    lowerdiv.setAttribute("id", "lowerdiv");

    // ! img/ titel / discription

    let imgdiv = document.createElement("div");
    let titeldiv = document.createElement("div");
    let discriptiondiv = document.createElement("div");
    discriptiondiv.setAttribute("class", "discriptiondiv");
    upperdiv.append(imgdiv, titeldiv, discriptiondiv);

    // ? imgdiv

    let img = document.createElement("img");
    img.src = ele.image;
    img.setAttribute("id", "oneimg");

    let min = document.createElement("button");
    min.innerText = "-";
    min.addEventListener("click", function () {
      minfun(ele.price);
    });

    let cen = document.createElement("input");
    cen.setAttribute("id", "changecen");
    cen.setAttribute("value", "1");

    let plus = document.createElement("button");
    plus.innerText = "+";
    plus.addEventListener("click", function () {
      plusfun(ele.price);
    });

    let quantity = document.createElement("div");
    quantity.setAttribute("id", "threebtnouter");
    quantity.append(min, cen, plus);
    imgdiv.append(img, quantity);

    // ?  titel

    let titel = document.createElement("h3");
    titel.innerText = ele.title;
    let id = document.createElement("p");
    id.innerText = ele.id;
    titeldiv.append(titel, id);

    // ? discription

    let price = document.createElement("h2");
    price.innerText = ` ${ele.price}`;
    totalprice += ele.price;
    price.setAttribute("id", "changePrice");
    let mrp = document.createElement("p");
    mrp.innerText = `M.R.P.: ₹${ele.price + 800}  Inclusive of all taxes`;
    let save = document.createElement("p");
    save.innerText = "You Save: 27%(₹805)";
    save.style.marginTop = "-14px";
    let Free_Shipping = document.createElement("p");
    Free_Shipping.innerText = "Free Shipping";
    Free_Shipping.style.color = "green";
    let Delivery = document.createElement("p");
    Delivery.innerText =
      "*Delivery assurance is subject to our delivery locations staying open as per govt. regulations";
    Delivery.style.color = "blue";
    Delivery.style.fontFamily = "sans-serif";
    discriptiondiv.append(price, mrp, save, Free_Shipping, Delivery);

    // ! remove button

    let removebtn = document.createElement("button");
    removebtn.innerText = "REMOVE";
    removebtn.addEventListener("click", function () {
      removebtnfun(ele );
    });
    let movetowhbtn = document.createElement("button");
    movetowhbtn.innerText = "Move to wishlist";
    lowerdiv.append(removebtn, movetowhbtn);

    maindiv.append(upperdiv, lowerdiv);
    document.querySelector("#cartProduct").append(maindiv);
  });
  document.querySelector("#TotalPriceCArt").innerText = totalprice.toFixed(2);
document.querySelector("#TotalcartAmount").innerText = totalprice.toFixed(2);
};

append(user);



function removebtnfun(ele){
  let index = user.indexOf(ele);
  user.splice(index,1);
  console.log(user)
   append(user);
}


                                                    //!         MASAI30%
let masaifun=()=>{
   let code= document.querySelector('#Couponin').value;
   if(code=="masai30"){
   let TA=document.querySelector('#TotalcartAmount').innerText;
   TA=+TA;
   TA=TA/10*3
   document.querySelector('#TotalcartAmount').innerText=TA
    document.querySelector('#cartdelcha').style.display="none"
    document.querySelector('#cartdelchad').style.display="flex"
   }

  }
 document.querySelector('#CouponAplly').addEventListener("click",masaifun)
let checkout=()=>{
window.location.href="checkout.html"
}
document.querySelector('#cartchekoutbtn').addEventListener("click",checkout);