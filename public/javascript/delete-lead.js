async function deleteLeadHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

    const response = await fetch(`/api/leads/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    }else{
        alert(response.statusText);
    }
};

document.querySelector('button[name="delete-lead-btn"]').addEventListener('click',deleteLeadHandler);