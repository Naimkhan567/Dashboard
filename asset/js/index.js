

const sidebar = document.getElementById('sidebar');
const mainBody = document.getElementById('main-body');
const toggleBtn = document.getElementById('btn-toggle');




toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("active")
    mainBody.classList.toggle("active")
})