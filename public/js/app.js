console.log('client side javascript file is loaded!')

//new comment
const weaderForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''

weaderForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageTwo.textContent = data.location
                messageOne.textContent = data.Forecast                
            }        
        })
    })
})


