

async function editNoteHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const note_text = document.querySelector('textarea[name="note-body"]').value.trim();

    const response = await fetch(`/api/notes/${id}`,{
        method:'PUT',
        body: JSON.stringify({
            note_text 
        }),
        headers:{
            'Content-Type': 'Application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/dashboard');
        return;
    }else{
        alert(response.statusText);
    }
};

document.querySelector('.edit-note-form').addEventListener('submit',editNoteHandler)