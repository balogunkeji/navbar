const sidebar = document.getElementById('openBtn');
// const side= document.getElementById('mySidebar');
const close= document.getElementById('closeBtn');
// const main= document.getElementById('main');

sidebar.addEventListener('click', function sideBar(){
    document.getElementById('mySidebar').style.width = '70vw';
    document.getElementById('main').style.marginLeft = '70vw';

})

close.addEventListener('click', function closeBtn(){
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0'

})