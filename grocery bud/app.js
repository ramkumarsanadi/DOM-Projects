
// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.querySelector("#grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")
// edit option
let editElement
let editFlag = false
let editID = ""
// ****** EVENT LISTENERS **********

// submit form
form.addEventListener("submit", addItem)

// clear items
clearBtn.addEventListener("click", clearItem)

// delete item
list.addEventListener("click", deleteBtn)

//edit item
list.addEventListener("click", editbtn)

window.addEventListener("DOMContentLoaded", setupItems)

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if(value && !editFlag){
         createListItem(id, value)
         displayAlert("Item added to the list", "success")
         container.classList.add("show-container")

         // add to local storage
         addToLocalStorage(id, value)
         // set back to default
         setbackToDefault()
    }
    else if(value && editFlag){
        editElement.innerHTML = value
        displayAlert("value changed", "success")
        
        //edit local storeage
        editLocalStorage(editID, value)
        setbackToDefault()
    }
    else{
        displayAlert('please enter value', "danger")
    }
}

// display alert
function displayAlert(text, action) {
    //add alert
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    //remove alert
    setTimeout(() => {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000);
}

// clear items
function clearItem() {
const items = document.querySelectorAll(".grocery-item")

if(items.length > 0 ) {
    items.forEach((item)=> {
        list.removeChild(item) 
    })
}
container.classList.remove("show-container")
displayAlert("empty list", "danger")
setbackToDefault()
localStorage.removeItem("list")
}

// set back to default
function setbackToDefault(){
    grocery.value = ""
    editFlag = false
    editID = ""
    submitBtn.textContent = "Add to List"
}

// delete btn
function deleteBtn(e) {
    // console.log(e.target.parentElement);
    if(e.target.parentElement.classList.contains("delete-btn")){
        const element = e.target.parentElement.parentElement.parentElement
        const id = element.dataset.id
        list.removeChild(element)
        if(list.children.length === 0){
            container.classList.remove("show-container")
            displayAlert("item removed", danger)
            setbackToDefault()
        }
       // remove form local storage
        removeFromLocalStorage(id)
        console.log("orgID", id)
    }
}

// edit btn
function editbtn(e) {
    if(e.target.parentElement.classList.contains("edit-btn")){
        const element = e.target.parentElement.parentElement.parentElement

        editElement = e.target.parentElement.parentElement.previousElementSibling
        
        // set form value
        grocery.value = editElement.innerHTML
        editFlag = true
        editID = element.dataset.id
        submitBtn.textContent = "edit"
    }
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    const grocery = {id, value}

    let items = getLocalStorage()
    items.push(grocery)

    localStorage.setItem("list", JSON.stringify(items))
    
}
function removeFromLocalStorage(id){
    let items = getLocalStorage()

    items = items.filter(function(item) {
        if(item.id !== id){
            // console.log(item.id, id)
            return item
        }
    })

    localStorage.setItem("list", JSON.stringify(items))

}
function editLocalStorage(id, value){
    let items = getLocalStorage()

    items = items.map(item => {
        if(item.id === id){
            item.value = value
        }
        return item
    })

    localStorage.setItem("list", JSON.stringify(items))
}

function getLocalStorage(){

    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : []
}



// ****** SETUP ITEMS **********

function setupItems() {
    let items = getLocalStorage()

    if(items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value)
        })
        container.classList.add("show-container")
    }
}

function createListItem(id, value) {
    let displayItem = 
    `<article class="grocery-item" data-id=${id}>
        <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
     </article>`

     list.innerHTML += displayItem
}