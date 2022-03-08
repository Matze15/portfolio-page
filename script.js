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
let moreProjectsShown = false;
function showMoreProjects(){
    const hiddenProjects = document.getElementsByClassName('projectcontainer onshow');
    for(let i = 0; i < hiddenProjects.length; i++){
        hiddenProjects[i].style.display = 'block';
    }
    moreProjectsShown = true;
}
function hideMoreProjects(){
    const hiddenProjects = document.getElementsByClassName('projectcontainer onshow');
    for(let i = 0; i < hiddenProjects.length; i++){
        hiddenProjects[i].style.display = 'none';
    }
    moreProjectsShown = false;
}
function changeHiddenProjectsStatus(button){
    if(moreProjectsShown){
        hideMoreProjects();
        document.getElementsByClassName('projectcontainer')[0].scrollIntoView({behavior:'smooth'});
        button.innerText = 'Show more'
    }
    else{
        showMoreProjects();
        document.getElementsByClassName('projectcontainer')[3].scrollIntoView({behavior:'smooth'});
        button.innerText = 'Hide additional projects'
    }
}