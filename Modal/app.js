const modalBtn = document.querySelector(".modal-btn")
const modalOverlay = document.querySelector(".modal-overlay")
const colsebtn= document.querySelector(".close-btn")

modalBtn.addEventListener("click", ()=> {
    modalOverlay.classList.toggle("open-modal")
})

colsebtn.addEventListener("click", ()=> {
    modalOverlay.classList.remove("open-modal")
})
