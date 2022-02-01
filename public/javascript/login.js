

async function loginHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#admin-name-login').value;
    const password = document.querySelector('#password-login').value;

    const response = await fetch('/api/login',{
        method: 'POST',
        body: JSON.stringify({
            name,
            password 
        }),
        headers: {
            'Content-Type': 'Application/json'}
    });
    if(response.ok) {
        document.location.replace('/dashboard');
        console.log('success')
    }else{
        alert(response.statusText);
    }
};

document.querySelector('.login-form').addEventListener('submit',loginHandler);