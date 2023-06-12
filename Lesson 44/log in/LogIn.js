let user = [
    {
        name: 'Roman Reigns',
        phone: '050 - 999 - 99 - 99',
        password: 'Rore1572651568546'
    },
    {
        name: 'The Undertaker',
        phone: '055 - 944 - 94 - 97',
        password: 'Undoidehdx1895274'
    },
    {
        name: 'John Cena',
        phone: '070 - 922 - 92 - 97',
        password: 'Jonhfc15468955685'
    }
]


if(localStorage.getItem('user')){
    localStorage.setItem('user', JSON.stringify(user))
}



const users = JSON.parse(localStorage.getItem('user'))




const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let userAvabile = user.some(user => user.name == allInputs[0].value && user.password == allInputs[1].value);
    if(userAvabile){
        location.href = '../Main/Main.html'
    }
    else{
        alert('Такого юзера нет!')
    }
})