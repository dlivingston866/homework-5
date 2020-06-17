$(document).ready(function() {
    function displayDate() {
        document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm A");
        console.log(moment().format());
    }
    displayDate();


    function getLocalStorage(key) {
        let value = localStorage.getItem(key);
        if (value) {
            $(`#text${key}`).text(value);
        }
    }


    var saveBtn = $('.rowBtn');
    saveBtn.on('click', function() {
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
    });


});