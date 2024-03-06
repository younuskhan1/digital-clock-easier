function clock(){
    let monthNames =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let today = new Date();
    document.getElementById("Date").innerHTML = (dayNames[today.getDay()] + " , " + monthNames[today.getMonth()] + " " + today.getDate() + " , " + today.getFullYear());

    let h = today.getHours();
    let hour = (h === 0 ? 12 : h > 12 ? h - 12 : h);
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = h < 11 ? "AM" : "PM";

    hour = hour < 10 ? "0" + hour : hour;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    document.getElementById("hours").innerText = hour;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;
    document.getElementById("ampm").innerText = day;

}

let inter = setInterval(clock, 1000); 