const navslide =()=>{ /* this is a arrow function*/
    const burger = document.querySelector('.burger'); /* calling the class burger */
    const nav = document.querySelector('.nav-links'); /* calling the class of nav-links */
    const navLinks = document.querySelectorAll('.nav-links li'); /* calling all the links*/
        /* toggle nave section*/
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active'); /* this is saying that when ever the buger
                                             is clicked it should run a function and call the class of nav-active   */
            /* animation of links */
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkfade 0.3s ease forwards ${ index / 5 + 2 }s`;
                /* console.log(index /5 + 0.3); */
            }
        });
    });
    
}
navslide();