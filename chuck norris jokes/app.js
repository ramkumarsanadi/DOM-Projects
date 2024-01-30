const btn = document.querySelector('.btn')
const content  = document.querySelector('.content')
const img = document.querySelector('img')

const URL = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', async ()=> {
    // fetch(URL)
    //     .then(response => response.json())
    //     .then(data => displayData(data))
    //     .catch(err => console.log(err));

    try {
        const data = await fetch(URL)
        const response = await data.json()
        displayData(response)
    } catch (error) {
        console.log(error);
    }
    
})

function displayData({value:joke}) {
    img.classList.add('shake-img')
    // const {value:joke} = data
    content.innerText = joke
    setTimeout(() => {
        img.classList.remove('shake-img')
    }, 1000); 
}

// async function getRandomJoke(url) {
//     const response = await fetch(url)
//     const {value:joke} = await response.json()
//     content.innerText = joke
// }
 

// promises
// function getRandomJoke(url){
//     return new Promise((resolve, reject)=> {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', url)
//         xhr.send()
//         xhr.onreadystatechange = function() {
//             if(xhr.readyState !==4) return;
//             if(xhr.status === 200){
//                 resolve(xhr.responseText)
//             }
//             else {
//                 reject({
//                     status: xhr.status,
//                     text: xhr.statusText
//                 });
//             }
//         };
//     })
// }



// xhr element
// function getRandomJoke(url) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.send()
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState !==4) return;
//         if(xhr.status === 200){
//             img.classList.add('shake-img')
//             const {value:joke} = JSON.parse(xhr.responseText);
//             content.innerText = joke
//             setTimeout(() => {
//                 img.classList.remove('shake-img')
//             }, 1000);
//         }
//         else {
//             console.log({
//                 status: xhr.status,
//                 text: xhr.statusText
//             });
//         }
//     };
// }