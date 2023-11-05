let quantity = document.querySelector(".basket__quantity").textContent;
let sum = document.querySelector(".basket__sum").textContent;
let cost = document.querySelectorAll(".shop__cost");
let buy = document.querySelectorAll(".shop__buy");
let basket = document.querySelector(".basket__img");
let shop = document.querySelector(".shop");
let body = document.querySelector("body");
let sname = document.querySelectorAll(".shop__name");
let list = document.querySelector(".list");
let l = document.querySelector(".l");
let but = document.querySelector(".but");
let i = 0;
	let pos = [];
	let cross = [];
function show() {
	shop.classList.add("blur");
	// let list = document.createElement("div");
	// body.appendChild(list);
	l.style.display = "block";
	// list.classList.add("list");
	console.log(cross.length);

	for (i = 0; i < buy.length; i++) {
		// console.log(i);
		// buy[i].setAttribute("disabled",);
		buy[i].disabled = true;
	// cross[i].setAttribute = ("src","close.png");
	// name.onclick = "del_elem(" + i + ")";
	// name.setAttribute = ("onclick","del_elem(" + i + ")");
	}
	basket.disabled=true;
	let del = document.querySelectorAll(".cross");

// 	del.addEventListener("click", function (e) {
// 	console.log(e.target);
// });
}

basket.addEventListener("click" , show);

function fsum(a) {
	quantity = Number(quantity) + 1;
	document.querySelector(".basket__quantity").textContent = quantity;
	sum = Number(sum) + Number(cost[a].textContent);
	document.querySelector(".basket__sum").textContent = sum;

	pos[i] = document.createElement("div");
	list.appendChild(pos[i]);

	pos[i].setAttribute('style', 'display:flex; justify-content: space-between');
	let name = document.createElement("p");
	pos[i].appendChild(name);
	name.textContent = sname[a].textContent;
	name = document.createElement("p");
	pos[i].appendChild(name);
	name.textContent = Number(name.textContent) + 1;
	name = document.createElement("p");
	pos[i].appendChild(name);
	name.textContent = Number(name.textContent) + Number(cost[a].textContent);

	cross[i] = document.createElement("img");
	pos[i].appendChild(cross[i]);
	cross[i].src = "close.png";
	cross[i].classList.add("cross");
	cross[i].setAttribute("onclick", "del_elem("+i+")");
	// cross[i].id = i;
	i++;
	
	// console.log(i);
	// let count = document.createElement("p");
	// pos.appendChild(count);
	// count.textContent = 0;
	// count = Number(count) + 1;

	// document.querySelector(".basket__quantity").textContent = quantity;
	// let pos = document.createElement("p");
	// pos.appendChild(pos);
}

// alert(cost[2].textContent);

function del_elem(b){
	// console.log(b);
	pos[b].remove();
	// let del = document.querySelector("");
}

cr = document.querySelector(".cross");
function close_b(){
	l.style.display = "none";	
		for (i = 0; i < buy.length; i++) {
		// console.log(i);
		// buy[i].setAttribute("disabled",);
		buy[i].disabled = false;
	// cross[i].setAttribute = ("src","close.png");
	// name.onclick = "del_elem(" + i + ")";
	// name.setAttribute = ("onclick","del_elem(" + i + ")");
	}
	basket.disabled=false;
	shop.classList.remove("blur");
}
// cr.setAttribute("onclick","del_elem");