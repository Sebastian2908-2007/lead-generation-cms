async function addLeadHandler(event) {
event.preventDefault();

   const first_name = document.querySelector('#lead-first-name').value;
   const last_name = document.querySelector('#lead-last-name').value;
   const email = document.querySelector('#email').value;
   const phone_number = document.querySelector('#phone-number').value;
   const response = await fetch('/api/leads', {
       method: 'POST',
       body: JSON.stringify({
           first_name,
           last_name,
           email,
           phone_number
       }),
       headers: {
           'Content-Type': 'Application/json'
       }
   })
   if(response.ok) {
       location.reload();
       return;
   }else{
       alert(response.statusText);
   }

};
document.querySelector('.new-lead-form').addEventListener('submit',addLeadHandler);