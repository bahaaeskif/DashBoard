 let anchors = document.querySelectorAll(".aside li a");

 anchors.forEach((e) => {
     e.addEventListener("click", (event) =>{
    e.classList.remove("active");
         event.target.classList.add("active");
     })
 });


 let upBtn = document.querySelector(".up-to");

window.onscroll = () => {
    if (window.scrollY >= 750){
        upBtn.style.display = "block";
    }else{
        upBtn.style.display = "none";
    }
}
upBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }) 
};


// let store = document.querySelector(':root');

// console.log(store);

// store.style.setProperty("--blue-color","#00A8CC");
// store.style.setProperty("--blue-alt-color","#0C7B93");
// store.style.setProperty("--orange-color","#FD7014");
// store.style.setProperty("--green-color","#17B794");
// store.style.setProperty("--red-color","#FF1E56");
// store.style.setProperty("--grey-color","#EEEEEE");