import $ from "jquery";

$(function() {
    var paragraph_1 = $("<p>").text("Holberton Dashboard");
    var paragraph_2 = $("<p>").text("Dashboard data for the students");
    var paragraph_3 = $("<p>").text("Copyright - Holberton School");
    $("body").append(paragraph_1, paragraph_2, paragraph_3)
})