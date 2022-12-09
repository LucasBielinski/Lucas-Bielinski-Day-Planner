var save = $('.submit')
var textAreas = $('.desc')
var timeRows = $('.time-block')
var hours = ($(this).parent().attr("data-hour"))
console.log(hours)
var currentTime = dayjs().format('HH')
var tasks = [{hour: '8', name:""},{hour: '9', name:""}, {hour: '10', name:""}, {hour: '11', name:""}, {hour: '12', name: ""}, {hour: '1', name:''}, {hour: '2', name: ''}, {hour: '3', name:''}, {hour: '4', name:''}, {hour: '5', name:''}] 




  // function calltasks() {
  //   var tasks = localStorage.getItem("description")
  //   if (tasks) {
  //     tasks = JSON.parse(tasks)
  //   } else {
  //     tasks = []
  //   }
  // }
  
 


  var today = dayjs().format('dddd, DD, YYYY')
  $('#currentDay').text('today is ' +today+ ' !')


function savetasks(event) {
  event.preventDefault()
  console.log(event)
  console.log("Saving tasks")
  console.log(this)
  var description = {
    hour:($(this).parent().attr("data-hour")),
    name:($(this).prev().val())
  }
  console.log(description)
  for (i=0; i < tasks.length; i++) {
    if (tasks[i].hour === description.hour){
      tasks[i] = description
     break
    }

  }
  console.log(tasks)
  localStorage.setItem("description", JSON.stringify(tasks))
}

for(let i=0; i< save.length; i++ ){
  // console.log(save[i])
  save[i].addEventListener('click', savetasks); 
}

console.log(currentTime)
var savedTask = JSON.parse(localStorage.getItem("description"))
for(let i=0; i< textAreas.length; i++){
  var nodeHour = i+8
  if (nodeHour < currentTime){
    textAreas[i].classList.add("past")
  } else if (nodeHour === currentTime){
    textAreas[i].classList.add("present")
  } else if (nodeHour > currentTime){
    textAreas[i].classList.add("future")
  }
  
textAreas[i].value = savedTask[i].name
}