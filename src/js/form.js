const form = document.querySelector('.main-form')

let nameUser = form.querySelector('[name=nameUser]')
let emailUser = form.querySelector('[name=_replyto]')
let phoneUser = form.querySelector('[name=phoneUser]')

let thank = document.querySelector('.thank')
let contacts = document.querySelector('.contacts')

form.addEventListener("submit", function(e) {
    if (nameUser.value || emailUser.value || phoneUser.value) {
        thank.classList.remove('display-none')
        contacts.classList.add('display-none')
    }
})