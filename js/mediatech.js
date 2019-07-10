function showDiv(id, collapse1, collapse2, collapse3) {
    var x = document.getElementById(id);
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById(collapse1).style.display = "none";
    document.getElementById(collapse2).style.display = "none";
    document.getElementById(collapse3).style.display = "none";
}