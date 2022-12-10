var save = $('.submit')
var textAreas = $('.desc')
var timeRows = $('.time-block')
var hours = ($(this).parent().attr("data-hour"))
console.log(hours)
var currentTime = dayjs().format('HH')
var tasks = [{hour: '8', name:""},{hour: '9', name:""}, {hour: '10', name:""}, {hour: '11', name:""}, {hour: '12', name: ""}, {hour: '1', name:''}, {hour: '2', name: ''}, {hour: '3', name:''}, {hour: '4', name:''}, {hour: '5', name:''}] 


// dayJS
  var today = dayjs().format('dddd, DD, YYYY')
  $('#currentDay').text('today is ' +today+ ' !')

// saves tasks
function savetasks(event) {
  event.preventDefault()
  console.log(event)
  console.log("Saving tasks")
  console.log(this)
  // object 
  var description = {
    // gets the data-hour
    hour:($(this).parent().attr("data-hour")),
    // gets the name of the task
    name:($(this).prev().val())
  }
  console.log(description)
  // if the hour of the tasks matches the hours of the description, let task = description
  for (i=0; i < tasks.length; i++) {
    if (tasks[i].hour === description.hour){
      tasks[i] = description
     break
    }

  }
  console.log(tasks)
  localStorage.setItem("description", JSON.stringify(tasks))
}
// adds click event for all buttons
for(let i=0; i< save.length; i++ ){
  // console.log(save[i])
  save[i].addEventListener('click', savetasks); 
}

console.log(currentTime)
// saved task
var savedTask = JSON.parse(localStorage.getItem("description"))

function timeDisplay(){
// for loop compares every hour
for(let i=0; i< textAreas.length; i++){
  // start at 0 + 8 starts at 8 hour
  var nodeHour = i+8
  if (nodeHour < currentTime){
    textAreas[i].classList.add("past")
  } else if (nodeHour == currentTime){
    textAreas[i].classList.add("present")
  } else if (nodeHour > currentTime){
    textAreas[i].classList.add("future")
  }
  // loads the tasks, lets the value of the text are = saved tasks name
textAreas[i].value = savedTask[i].name
}
}
timeDisplay()