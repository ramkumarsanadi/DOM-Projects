const togglebtn = document.querySelector('.btn')
const articlesEl = document.querySelector(".articles")


togglebtn.addEventListener('click', ()=> {
    
    if(!document.body.classList.contains('dark-theme')){
        document.body.classList.remove(getLocalStorage())
        localStorage.setItem("mode", "dark-theme")
        document.body.classList.add(getLocalStorage())

    }else {
        document.body.classList.remove(getLocalStorage())
        localStorage.setItem("mode", "light-theme")
        document.body.classList.add(getLocalStorage())
    }
      
})

function getLocalStorage(){
    return localStorage.getItem("mode")
}

console.log(articles);

 const articleHtml = articles.map((article)=> {
    const {title, date, length, snippet} = article
    const formatDate = moment(date).format("MMM Do YY")
    return `<acticle class="post">
                <h2>${title}</h2>
                <div class="post-info">
                <span>${formatDate}</span>
                <span>${length} min read</span>
                </div>
                <p>${snippet}</p>
            </acticle>`
 }).join('')

 console.log(articleHtml);

 articlesEl.innerHTML = articleHtml

document.body.classList.add(getLocalStorage())


