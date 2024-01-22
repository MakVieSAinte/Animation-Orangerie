const spanContainers = document.querySelectorAll('.title div');

spanContainers.forEach(item => {

   const letters = item.children[0].textContent.split('');

   console.log(letters);

   item.innerHTML = "";

   letters.forEach((el, index) => {
      item.innerHTML += `<span style = "transition-delay: ${0.07 * index}s">${el}</span>`;
   })
   

})