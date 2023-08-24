const taskInput = document.querySelector('.inputTask')
const addBtn = document.querySelector('.addTask')
const taskList = document.querySelector('.listItems')

function addTask(){
if(taskInput.value === ''){
    alert("pls enter something")
} else{
    let listItem = document.createElement('li')
listItem.innerHTML = taskInput.value ;

taskList.appendChild(listItem)

let spanElement = document.createElement('span')
spanElement.innerHTML= '✘'
listItem.appendChild(spanElement)

}
taskInput.value='';
saveData()
}

function markChecked(e){
    if(e.target.tagName ===  'LI'){
        e.target.classList.toggle('checked');
        saveData()
    } else if(e.target.tagName=== 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    } 
    console.log('dbbjbdj');
}

function saveData(){
    localStorage.setItem('data', taskList.innerHTML)
}
function getData(){
    taskList.innerHTML = localStorage.getItem('data')
}
getData()
taskList.addEventListener('click', markChecked)
addBtn.addEventListener('click', addTask)

document.addEventListener("keydown", function(event) {
    
  if (event.key === "Enter" && taskInput.value !==''  ) {
  addTask()
  
    

  }
});
