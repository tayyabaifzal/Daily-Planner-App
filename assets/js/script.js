//Defined variables

var saveBtn = $(".saveBtn");

//current day and date is displayed at the top of the calendar

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// time-block is colour-coded to display past, present and future

function timeBlockColor(){
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour){
            $(this).addClass("future");
        } else if (currHour === hour){
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// The event will be saved for that time block when the save button is clicked

saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);

});

// this function will save the event in the local storage. The event will stay in the calender even if the page is refreshed

function usePlanner(){
    $(".hour").each(function(){
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        
        if(currPlan !== null){
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

// call functions

timeBlockColor();
usePlanner();