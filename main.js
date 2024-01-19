document.getElementById('project1').onclick = () =>{
    window.open('https://scheduler511.netlify.app/','_blank')
}
document.getElementById('codeProject1').onclick = () =>{
    window.open('https://github.com/Mohamadmourad/scheduler','_blank')
}

document.getElementById('project2').onclick = () =>{
    window.open('https://tic-tac-toe-511.netlify.app/','_blank')
}
document.getElementById('codeProject2').onclick = () =>{
    window.open('https://github.com/Mohamadmourad/Tic-Tac-Toe','_blank')
}

document.getElementById('project3').onclick = () =>{
    window.open('https://chessguesser.netlify.app/','_blank')
}
document.getElementById('codeProject3').onclick = () =>{
    window.open('https://github.com/Mohamadmourad/chessGuesser','_blank')
}

document.getElementById('project4').onclick = () =>{
    window.open('https://chessclock511.netlify.app/','_blank')
}
document.getElementById('codeProject4').onclick = () =>{
    window.open('https://github.com/Mohamadmourad/chess-clock','_blank')
}

document.getElementById('project5').onclick = () =>{
    window.open('https://movingsquare.netlify.app/','_blank')
}
document.getElementById('codeProject5').onclick = () =>{
    window.open('https://github.com/Mohamadmourad/moving-square','_blank')
}

document.getElementById('insta').onclick = () =>{
    window.open('https://www.instagram.com/mourad511_/','_blank')
}

document.getElementById('github').onclick = () =>{
    window.open('https://github.com/Mohamadmourad','_blank')
}

document.getElementById('leetcode').onclick = () =>{
    window.open('https://leetcode.com/mohamadmourad/','_blank')
}

document.getElementById('moreProjectsBtn').onclick = () => {
    document.getElementById('moreProjectsBtn').style.display = 'none';
    document.getElementById('moreProjects').style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", () => {
    let parentElement = document.getElementById("processbox");
    let childElement = document.getElementById("processpercentage");
  document.getElementById('perc').innerHTML = Math.floor((childElement.offsetWidth / parentElement.offsetWidth) * 100)+1 + "%";
});

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});

document.querySelectorAll('.project').forEach(project => {
    observer.observe(project);
});


