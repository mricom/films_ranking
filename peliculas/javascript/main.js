let links = document.querySelectorAll("a");

links.forEach(function(link){
	link.addEventListener("click", function(event){
		event.preventDefault(); 
		content = document.querySelector(".content");
		content.classList.remove("fadeIn");
		content.classList.remove("animated");
		content.classList.add("fadeOut");
		content.classList.add("animated");
		setTimeout(function(){
			if(link.className=="closer"){
				location.href = "../index.html";
			} else if{
				location.href ="./films/"+link.id+".html";
			}
		}, 500);
	});
})

