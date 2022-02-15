async function addLeadHandler(event) {
event.preventDefault();

   const first_name = document.querySelector('#lead-first-name').value;
   const last_name = document.querySelector('#lead-last-name').value;
   const email = document.querySelector('#email').value;
   const phone_number = document.querySelector('#phone-number').value;
   const input1 = document.querySelector("input[name='lead-first-name']");
   const input2 = document.querySelector("input[name='lead-last-name']");
   const input3 = document.querySelector("input[name='email']");
   const input4 = document.querySelector("input[name='phone-number']");
   let inputArr = [input1,input2,input3,input4];
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
    // for loop for giving submission success validation
    for(let i = 0; i < inputArr.length; i++) {
        inputArr[i].value = 'success';
    }
    setTimeout(() => {
         location.reload();
       },4000)
      
       return;
   }else{
       alert(response.statusText);
   }

};
document.querySelector('.new-lead-form').addEventListener('submit',addLeadHandler);