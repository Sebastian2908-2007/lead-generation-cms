// function imageHandler() {
//  const body = document.querySelector('body');   
//  const location = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
 
//  if(location !== 'make-20K-per-month') {
//  body.style.backgroundImage = 'none' 
//  }
//  else if(location === 'make-20K-per-month'){
//     body.style.backgroundImage = 'https://bestlifeonline.com/wp-content/uploads/sites/3/2016/12/happy-man.jpg?fit=1024%2C753&ssl=1' 
//  }
// };

function imageHandler () {
   const body = document.querySelector('body'); 
   const location = window.location.toString().split('/')[window.location.toString().split('/').length - 2];
   const location2 = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
   const home = window.location.hostname

if(location === home) {
   body.style.backgroundImage = 'https://bestlifeonline.com/wp-content/uploads/sites/3/2016/12/happy-man.jpg?fit=1024%2C753&ssl=1'
   return; 
}else if(location !== location2){
   body.style.backgroundImage = 'none' 
}

     console.log(location);
     console.log(window.location.hostname);

};

imageHandler();