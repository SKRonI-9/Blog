burgar=document.querySelector('.burgar')
navlist=document.querySelector('.navlist')
rightnav=document.querySelector('.rightNav')
navbar=document.querySelector('.navbar')

burgar.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})