function display() 
{ 
    var monthIndex = mydata.getMonth(); 
    var dayIndex = mydata.getDay(); 
    var currentDate = mydata.getDate(); 

var month = ["Decemeber", "January", "February"]  
    var date = ["Monday", "Friday", "Wednesday"];

    document.getElementById("month1").innerText = "Month: " + months[monthIndex];
    document.getElementById("date1").innerText = "Date: " + currentDate;
    document.getElementById("day1").innerText = "Day: " + days[dayIndex];
}