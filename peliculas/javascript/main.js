let links = document.querySelectorAll("a");
let rey = document.querySelector("#rey");
let tarzan = document.querySelector("#tarzan");
let coco = document.querySelector("#coco");
let closer = document.querySelector(".close");

let links_more = links.filter(link => link != closer)

links.forEach(function(link){
	link.addEventListener("click", function(event){
		event.preventDefault(); 
		content = document.querySelector(".content");
		content.classList.remove("fadeIn");
		content.classList.remove("animated");
		content.classList.add("fadeOut");
		content.classList.add("animated");
		setTimeout(function(){
			if(link==closer){
				location.href = "../index.html";
			} else if (link==rey){
				location.href ="./films/El-rey-leon.html";
			} else if (link==coco){
				location.href ="./films/coco.html";
			} else if (link==tarzan){
				location.href ="./films/tarzan.html";
			}
		}, 500);
	});
})

