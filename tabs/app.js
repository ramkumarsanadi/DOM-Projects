const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles= document.querySelectorAll(".content")

 about.addEventListener("click", e => {
    const targetid = e.target.dataset.id
    
    btns.forEach(btn => {
        btn.classList.remove("active")
        e.target.classList.add("active")
    
    })

    articles.forEach(article => {
        article.classList.remove("active")
        console.log(article.id);
        if(targetid === article.id){
            article.classList.add("active")
        }
    })
 })