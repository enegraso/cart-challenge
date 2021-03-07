const cart = [];

fetch("https://fakestoreapi.com/products?limit=10")
  .then((res) => res.json())
  .then((json) => {
    const ul = document.querySelector(".lista");
    json.forEach((product) => {
      const li = document.createElement("li");
      const title = document.createElement("h6");
      const img = document.createElement("img");
      const price = document.createElement("span");
      
      
      // begin add by me
      var boton  = document.createElement("button");
      var idboton = "boton"
       boton.innerHTML = " add "
       boton.onclick = function(){
        alert("Elemento agregado")
         cart.push(product) 
      };     
      // end add by me
      
      title.innerText = product.title;
      img.src = product.image;
      price.innerText = "$" + product.price;

      li.appendChild(title);
      li.appendChild(img);
      li.appendChild(price);

      li.appendChild(boton) // by me
      

      ul.appendChild(li);
    });
  });

const showCart = () => {
  cart.map((item) => {
    document.querySelector(".modalList").appendChild(item);


  });
};

document.querySelector(".close").onclick = function () {
  document.querySelector(".modal").style.display = "none";
};

document.querySelector(".cart").onclick = function () {
  const modal = document.querySelector(".modal");
  
  // begin by me

  var ulcart = document.querySelector(".modalLista");
  var prieline = document.createElement("span")
  var totprice = 0
  var index = 0
  ulcart.innerHTML = "<br/><br/>"
  for (i=0; i < cart.length; i++) {
    var delbtn = document.createElement("button")
    delbtn.innerText = " x "
    delbtn.setAttribute("id",i)
    delbtn.onclick = function(){
      var deleted = cart.splice(this.id,1)
      modal.style.display = "none"
      alert("Elemento eliminado")
    }
    var para = document.createElement("span")
    para.innerText += cart[i].price + " " + cart[i].title
    var lica = document.createElement("li")
    lica.appendChild(para)
    lica.appendChild(delbtn) 
    ulcart.appendChild(lica) 
    index++
    totprice += cart[i].price
  }
  prieline.innerHTML = "<br><br>Total carro $ " + totprice
  ulcart.appendChild(prieline)

  // end by me

  modal.style.display === "none"
    ? (modal.style.display = "flex")
    : (modal.style.display = "none");
};

