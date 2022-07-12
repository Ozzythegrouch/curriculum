const booksButton = document.querySelector('.books');
const membersButton = document.querySelector('.members');
let contentContainer = document.querySelector('.content-container');


const getBooks = async () => {
    const apiData = await fetch('https://fakerapi.it/api/v1/books')
    const jsonData = await apiData.json()
    const books = jsonData.data

    contentContainer.innerText = ''

    for (let book of books) {
        
        const title = book.title
        const author = book.author
        const description = book.description
        const image = book.image
        

        const bookInfo = document.createElement('div')
        bookInfo.className = 'book-container'
        bookInfo.innerHTML =
        `<div class="book-book">
            <div class= "book-front">
                <img src= ${image}></img>
            </div>
            <div class= "book-content">
                <h3>${title}</h3>
                <h4>${author}</h4>
                <div class = "book-des">
                    <p>${description}</p>
                </div>
            </div> 
        </div>
            
        `
        contentContainer.append(bookInfo)
    }
} 

const getMembers = async () => {
    contentContainer.innerText = ''
    const apiData = await fetch('https://fakerapi.it/api/v1/persons?')
    const jsonData = await apiData.json()
    const members = jsonData.data
    

    for (let member of members) {
        
        const fName = member.firstname
        const lName = member.lastname
        const email = member.email
        const city = member.address.city
        const image = member.image
        

        const memberInfo = document.createElement('div')
        memberInfo.className = 'member-container'
        memberInfo.innerHTML =
        `<img src= ${image}></img>
        <h3>${fName + lName}</h3>
        <h4>${email}</h4>
        <h4>${city}</h4>
        `
        
        contentContainer.append(memberInfo)
        
    }
    
}


booksButton.addEventListener('click', getBooks)
membersButton.addEventListener('click', getMembers)
