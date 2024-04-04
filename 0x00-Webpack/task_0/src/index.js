import $ from "jquery";

$(function() {
    const paragraph_1 = $("<p>").text("Holberton Dashboard");
    const paragraph_2 = $("<p>").text("Dashboard data for the students");
    const paragraph_3 = $("<p>").text("Copyright - Holberton School");
    $("body").append(paragraph_1, paragraph_2, paragraph_3)
})
