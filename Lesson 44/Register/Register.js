const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

const user = JSON.parse(localStorage.getItem('user'))


btn.addEventListener('click', (e) => {
    if(allInputs[1].checkValidity()){
        e.preventDefault()
        let newUser = {
            name: allInputs[0].value,
            phone: allInputs[1].value,
            password: allInputs[2].value
        }
        user.push(newUser)
        localStorage.setItem('user', JSON.stringify(user))

        location.href = '../log in/index.html'
    }
    else{
        alert('Name is wrong!')
    }
})