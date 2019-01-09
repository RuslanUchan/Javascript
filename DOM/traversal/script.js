let container = document.querySelector(".container"); 

container.addEventListener("click",(e) => { 
	if (e.target.classList.contains("close")) { 
		e.target.parentElement.remove();
		e.preventDefault();
		// e.stopPropagation();
	} 
});
