async function logoutHandler() {
    const response = await fetch('/api/login/logout',{
        method:'POST',
        headers:{'Content-Type': 'Application/json'}
    });
    if(response.ok) {
        document.location.replace('/login')
    }else{
        alert(response.statusText)
    }
};

document.querySelector('#logout').addEventListener('click',logoutHandler);