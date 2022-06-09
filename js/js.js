 //carrosel

let count = 1
document.getElementById("radio1").checked = true 


setInterval( function (){
    nextImage();
}, 5000 )

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio" + count).checked = true;
}


//animação scroll

const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const topo = section.offsetTop;


    section.scrollIntoView({
        behavior: "smooth",
    })

   // window.scrollTo({
        //top:1000,
        //behavior: "smooth",
  //  });
  
   
}


linksInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection)
}) 


