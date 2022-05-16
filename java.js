//to clear the input but it didnt work so i used location.reload()
function clear(){
    document.getElementById("calc").value = '';
}
//to display the values
function display(value){
    document.getElementById("calc").value +=value
}
//to do the actual calculation
function calculate(){
    var i = document.getElementById('calc').value;
    var j = eval(i);
    document.getElementById("calc").value = j
}