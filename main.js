var previousName = document.querySelector('span')
var dogNameInput = document.querySelector('.dogname')
var submitButton = document.querySelector('.submitbutton')
var dogName

dogNameInput.addEventListener('keyup', setName)
submitButton.addEventListener('click', newName)

function setName(){
  dogName = dogNameInput.value
}

function newName(event){
  event.preventDefault()

  if (dogName && dogName != ' '){
    previousName.innerText = dogName
  }

  dogNameInput.value = ''
}
