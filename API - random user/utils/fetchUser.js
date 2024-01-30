
const API_URL = 'https://randomuser.me/api/'

// const getUser = async ()=> {
//     const response = await fetch(API_URL)
//     const data = await response.json()

//     const person = data.results[0]
//     const {first, last} = person.name
//     const {email, phone} = person
//     const {large:image} = person.picture
//     const {password} = person.login
//     const {dob: {age}} = person
//     const {street: {number, name}} = person.location

//     return {
//         phone,
//         age, 
//         email, 
//         image, 
//         password,
//         street: `${number} ${name}`,
//         name: `${first} ${last}`
//     }
// }

const getUser = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    const person = data.results[0]


    const {first, last} = person.name
    const {email, phone} = person
    const {age} = person.dob
    const {number, name} = person.location.street
    const {large:image} = person.picture
    const {password} = person.login

    return {
        email,
        phone,
        password,
        image,
        age,
        street: `${name} ${number}`,
        name: `${first} ${last}`
    }
    
}

export default getUser