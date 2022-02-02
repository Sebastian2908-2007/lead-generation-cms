async function addNoteHandler(event) {
    event.preventDefault();
    
    const lead_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const note_text = document.querySelector('textarea[name="note-body"]').value.trim();
    
    const response = await fetch('/api/notes',{
        method: 'POST',
        body: JSON.stringify({
            lead_id,
            note_text 
        }),
        headers: {
            'Content-Type': 'Application/json'
        }
    });

    if(response.ok) {
        location.reload();
        return;
    }else{
        alert(response.statusText);
    }
  
};

document.querySelector('.note-form').addEventListener('submit',addNoteHandler);