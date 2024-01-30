import getElement from "./utils/getelement.js"
import getUser from "./utils/fetchUser.js"
import displayUser from "./utils/displayuser.js"

const btn = getElement('.btn')

const showUser = async () => {
  const person = await getUser()
  displayUser(person)
}
    


window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
 
 

