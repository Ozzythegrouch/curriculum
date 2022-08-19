const loginBtn = document.getElementById('auth')

loginBtn.addEventListener('click', e => {
    fetch('/login', {
        
        method: 'POST',
        body: JSON.stringify({login: true}),
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(data => data.json()).then(response => console.log(response))
})