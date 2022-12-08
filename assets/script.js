var save = $('#sbmit')
var descInput = $('desc')
var timeArea = $('time-block')
var hours = $('time')
var currentTime = dayjs().format('HH')
var tasks = [{hour: '8'},{hour: 9}, {hour: 10}, {hour: 11}, {hour: 12}, {hour: 1}, {hour: 2}, {hour: 3}, {hour: 4}, {hour: 5}] 


$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? 
  //
if (hours < currentTime){
  timeArea.attr({"class": "past"})
} else if (hours === currentTime){
  timeArea.attr({'class':'present'})
} else if (hours > currentTime){
  timeArea.attr({'class': 'future'})
}


  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
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

