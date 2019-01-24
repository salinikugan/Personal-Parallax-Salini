function openWork(WorkName) {
    var i;
    var x = document.getElementsByClassName("work");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(WorkName).style.display = "block"; 
}