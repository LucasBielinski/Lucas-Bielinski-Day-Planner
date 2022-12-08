var save = $('#sbmit')
var descInput = $('desc')
var timeArea = $('time-block')
var hours = $('time')
var currentTime = dayjs().format('HH')
var tasks = [{hour: '8'},{hour: '9'}, {hour: '10'}, {hour: '11'}, {hour: '12'}, {hour: '1'}, {hour: '2'}, {hour: '3'}, {hour: '4'}, {hour: '5'}] 


$(function () {

if (hours < currentTime){
  timeArea.attr({"class": "past"})
} else if (hours === currentTime){
  timeArea.attr({'class':'present'})
} else if (hours > currentTime){
  timeArea.attr({'class': 'future'})
}

  function calltasks() {
    var tasks = localStorage.getItem("description")
    if (tasks) {
      tasks = JSON.parse(tasks)
    } else {
      tasks = []
    }
  }
  
  function savetasks() {
    var description = {
      hour:($(this).parent().attr("data-hour")),
      name:($(this).prev(".desc").val())
    }
    for (i=0; i< tasks.length; i++) {
      if (tasks[i].hour === description.hour){
        tasks[i] = description
        break
      }
    }
  localStorage.setItem("description", JSON.stringify(tasks))
}

  save.on('click', savetasks); 

  var today = dayjs().format('dddd, DD, YYYY')
  $('#currentDay').text('today is ' +today+ ' !')
});

