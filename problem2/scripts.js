
function createNote(text = '') {  
  var colourPosition = 0
  const note = document.createElement('div') 
 
  //console.log(note)  
  note.classList.add('note')  
  note.innerHTML = 
  `  
  <div>  
    <button class="update">update</button>  
    <button class="delete">delete</button>  
    <button class="colour">colour</button>  
  </div>  
  <div class="main ${text ? "" : "invisible"}"></div>  
  <textarea class="main ${text ? "invisible" : ""}"></textarea>  
  `  
  const updateBtn = note.querySelector('.update')  
  const deleteBtn = note.querySelector('.delete')  
  const colourBtn = note.querySelector('.colour')  

  const main = note.querySelector('.main')  
  const textArea = note.querySelector('textarea')  


  main.innerHTML = text
  textArea.value = text  



  deleteBtn.addEventListener('click', () => {  
    note.remove()  
    updateList()  
  })  
  updateBtn.addEventListener('click', () => {  
   main.classList.toggle("invisible")  
   textArea.classList.toggle("invisible")  
  })  
  colourBtn.addEventListener('click', () => {  
   colourPosition = changeColour(note, colourPosition)
  })  


  textArea.addEventListener('input', (event) => {  
    var { value } = event.target  
    main.innerHTML = value
    updateList()  
  })  

  
  document.body.appendChild(note)  
}  


function readNote(){
  const addBtn = document.getElementById('create')  
  addBtn.addEventListener('click', () => createNote()) 
}

 //Find the elements called colour  
  //Use the colours array to cycle through the colours
  //Use the colourPosition variable to keep track of the current colour
 function changeColour(note, colourPosition){
  var colours = ["#0048BA", "#FF0A00", "#FF4000","#FFC900", "#A8FF1C", "#A8FFEF"]
  colourPosition = colourPosition < colours.length ? ++colourPosition : 0;
  note.querySelector(".main").style.background = colours[colourPosition]
  return colourPosition
 }

 
 function updateList() {  
  var text = document.querySelectorAll('textarea')  
  var notes = []  
  text.forEach(note => notes.push(note.value))  
}  

 readNote()
 
