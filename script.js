function divshow() {
    var div = document.getElementById("examples")
    if(div.style.display === "none")
{
    div.style.display = "block";
}
else {
    div.style.display = "none"
}
}

function shareoptions() {
    var div = document.getElementById("shareoptions")
    var divb = document.getElementById("share")
    if(div.style.display === "none")
{
    div.style.display = "block"
    divb.style.display = "none"
}
else {
    div.style.display = "none"
    divb.style.display = "block"
}
}