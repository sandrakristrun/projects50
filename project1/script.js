const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', ()=> {
    const activePanel = document.getElementsByClassName('panel active');
    console.log(activePanel)
    activePanel[0].classList.remove('active');
    // removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
