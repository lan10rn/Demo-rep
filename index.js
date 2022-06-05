let inputs = document.querySelectorAll('input');
let clear = document.querySelector('button');
function func() {
    if (document.getElementsByClassName("helo")[0].value == "" && document.getElementsByClassName("helo")[1].value == "") {
        alert("Incomplete details");
    }
    else {
        var perc = Math.round((Math.random()) * 100);
        // alert("The buton was clicked ")
        document.getElementById("out").innerHTML = "❤️❤️" + perc + "%" + "❤️❤️";
        inputs.forEach(input => input.value = '');
        if (perc <= 10) {
            document.getElementById("qw").src = "./gifs/10.gif";
        }
        if (perc >= 40 && perc <= 60) {
            document.getElementById("qw").src = "./gifs/4060.gif";
        }
        if (perc >= 90 && perc <= 100) {
            document.getElementById("qw").src = "./gifs/90100.gif";
        }

    }
}