//alert('This website is still under construction')
if(window.location.href.includes('success')){
    document.getElementById('emailsent').style.height = '60px';
    document.getElementById('emailsent').style.visibility = 'visible'
    document.getElementById('emailsent').style.opacity = '100%';

    setTimeout(
        function(){
        document.getElementById('emailsent').style.height = '0';
        document.getElementById('emailsent').style.visibility = 'hidden'
        document.getElementById('emailsent').style.opacity = '0';
        }
        , 5000
    )
    history.replaceState({},'Matthies Kallsen','http://kallsen.net')
}


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
        document.getElementById('projects').scrollIntoView({behavior:'smooth'});
        button.innerText = 'Show more'
    }
    else{
        showMoreProjects();
        document.getElementsByClassName('projectcontainer')[3].scrollIntoView({behavior:'smooth'});
        button.innerText = 'Hide additional projects'
    }
}