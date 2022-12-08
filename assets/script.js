var save = $('#sbmit')
var descInput = $('desc')
var timeArea = $('.time-block')
var hours = $('.time')
var currentTime = dayjs()


$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? 
  //
if (hours < currentTime.format('HH')){
  timeArea.attr({"class": "past"})
} else if (hours === currentTime.format('HH')){
  timeArea.attr({'class':'present'})
} else if (hours > currentTime.format('HH')){
  timeArea.attr({'class': 'future'})
}


  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var description = descInput.value

  function calltasks() {
    var tasks = localStorage.getItem(description)
    if (tasks) {
      tasks = (tasks)
    } else {
      tasks = []
    }
  }

function savetasks(tasks) {
localStorage.setItem(description, tasks)
  }

  save.on('click', savetasks); {
    var taskIndex = ($(this).siblings("desc").attr("sumbit"))
    console.log(taskIndex)
  }

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var today = dayjs().format('dddd, DD, YYYY')
  $('#currentDay').text('today is ' +today+ ' !')
});
