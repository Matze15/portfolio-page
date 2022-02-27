//alert('This website is still under construction')

function toggleMobileMenu(element){
    element.classList.toggle('open')
}
function change(id,newText){
    elem = document.getElementById(id);
    elem.innerHTML = newText;
}
function copy(string){
    navigator.clipboard.writeText(string);
}