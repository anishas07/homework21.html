function display() 
{ 
    var month = mydata.getMonth(); 
    var day = mydata.getDay(); 
    var currentDate = mydata.getDate(); 

var month = ["Decemeber", "January", "February"]  
    var date = ["Monday", "Friday", "Wednesday"];

    document.getElementById("month1").innerText = "Month: " + months[month];
    document.getElementById("date1").innerText = "Date: " + currentDate;
    document.getElementById("day1").innerText = "Day: " + days[day];
}