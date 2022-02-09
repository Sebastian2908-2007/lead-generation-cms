
function imageHandler () {
   const body = document.querySelector('body'); 
  
   const path = window.location.pathname;

 if(path === '/') {
   body.style.backgroundImage = 'https://bestlifeonline.com/wp-content/uploads/sites/3/2016/12/happy-man.jpg?fit=1024%2C753&ssl=1'
}else{
  body.style.backgroundImage = 'none' 
 }
 console.log(path);
};



imageHandler();