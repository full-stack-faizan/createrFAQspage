let data = document.querySelectorAll(".data");
data.forEach((datadiv) => {

  const btnm = datadiv.querySelector(".minus");
  
btnm.addEventListener('click',()=>{
  const answer = datadiv.lastElementChild;

  answer.classList.toggle("ansa1");

  const iconplus = datadiv.querySelector(".fa-square-plus"); 
  const iconminus = datadiv.querySelector(".fa-square-minus"); 

 
  iconplus.classList.toggle("fa-d-none");
  iconminus.classList.toggle("fa-d-block");

})





  const btnp = datadiv.querySelector(".plus");
 
  btnp.addEventListener("click", () => {
    const answer = datadiv.lastElementChild;

    answer.classList.toggle("ansa1");
    const iconplus = datadiv.querySelector(".fa-square-plus"); 
    const iconminus = datadiv.querySelector(".fa-square-minus"); 
  
   
    iconplus.classList.toggle("fa-d-none");
    iconminus.classList.toggle("fa-d-block");
  



  });
});
