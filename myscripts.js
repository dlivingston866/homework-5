$(document).ready(function() {
    function displayDate() {
        document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm A");
        console.log(moment().format());
    }
    displayDate();

});