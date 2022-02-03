async function deleteNoteHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

    const response = await fetch(`/api/notes/${id}`,{
        method:'Delete'
    });

    if(response.ok) {
        document.location.replace('/dashboard');
        return;
    }else{
        alert(response.statusText);
    }
};

document.querySelector('.delete-note-btn').addEventListener('click',deleteNoteHandler);