$(document).ready(function() {

    $("#currentDay").text(dayjs().format("MMMM D, YYYY"));


for (let hour = 17; hour<= 24; hour++){
    let row = $("<div>").addClass("row");
    let time = $("<div>")
       .addClass("hour")
       .text(dayjs().hour(hour).format("h A"));
    let description = $("<textarea>").addClass("description");
    let saveBtn = $("<button>")
       .addClass("saveBtn")
       .html('<i class="fas fa-save"></i>');


if (dayjs().hour() > hour){
    description.addClass("past");
} else if (dayjs().hour() === hour) {
    description.addClass("present");
} else {
    description.addClass("future");
}


description.val(localStorage.getItem(hour));



saveBtn.on("click", function () {
    localStorage,setItem(hour, description.val());
});


row.append(time, description, saveBtn);


$("#time-block").append(row);
}
}); 











    // Create time blocks for each hour
    // for (let hour = 9; hour <= 17; hour++) {
    //     createPlannerBlock(hour);
    // }

    // // Load saved tasks from local storage
    // loadTasks();

    // // Event listener for save button
    // $('.save-btn').on('click', function() {
    //     const hour = $(this).siblings('.time').text();
    //     const task = $(this).siblings('.task-input').val();
    //     saveTask(hour, task);
    // });

    // // Function to create a time block
    // function createPlannerBlock(hour) {
    //     const timeBlock = $('<div>').addClass('time-block');
    //     const time = $('<div>').addClass('time').text(`${hour}:00`);
    //     const taskInput = $('<input>').addClass('task-input');
    //     const saveBtn = $('<button>').addClass('save-btn').text('Save');

    //     timeBlock.append(time, taskInput, saveBtn);
    //     $('#planner-container').append(timeBlock);
    // }

    // // Function to load tasks from local storage
    // function loadTasks() {
    //     for (let hour = 9; hour <= 17; hour++) {
    //         const task = localStorage.getItem(`task_${hour}`);
    //         if (task) {
    //             $(`.time:contains('${hour}:00')`).siblings('.task-input').val(task);
    //         }
    //     }
    // }

    // // Function to save task to local storage
    // function saveTask(hour, task) {
    //     localStorage.setItem(`task_${hour}`, task);
    //     alert('Task saved successfully!');
    // }
// });






// $(document).ready(function () {

// //     $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

//     // / Display the current day at the top of the calendar
//  $("#currentDay") .text (dayjs() . format ("MMMM D, YYYY")) ;

//  // Generate timeblocks for standard business hours (9AM to 5PM)
// for (let hour = 9; hour <= 24; hour++) {
// let row = $("<div>") .addClass ("row");
// let time = $("<div>")
// addClass ("hour" )
// text (dayjs() .hour (hour). format ("h A")) ;
// let description = $("<textarea>").addClass ("description");
// let saveBtn = $("<button>")
// addClass ("saveBtn" )
// .html('<i class="fas fa-save"></¡>');
// // Color-code each timeblock based on past, present, and future
// if (dayjs ().hour () > hour) {
// description.addClass ("past");
// } else if (dayjs() . hour () === hour) {
// description.addClass("present");
// } else {
// description.addClass("future");

// // / Load any saved events from local storage
//  description.val (localStorage.getItem(hour));
// // / Save the event in local storage when the save button is clicked
// saveBtn.on ("click", function () {
// localStorage.setItem(hour, description.val());
// // };

// // / Append the time, description, and save button to the row
//  row.append (time, description, saveBtn);
// // / Append the row to the time blo)ck
//  $ ("#time-block") .append (row);

// // )}; 