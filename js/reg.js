function myFunction() {
    var x = document.getElementById("pass");
    var y = document.getElementById("pass-confirm");
    var z = document.getElementById("pass-check1");
    var c = document.getElementById("pass-check2");
    if(z.checked == true | c.checked == true){
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password"
    }
  }

function checkMe() {
  var checkbox = document.getElementById('accept');
  var btn = document.getElementById('btnEnt');
  if(checkbox.checked==true){
    btn.disabled = false;
    btn.style.backgroundColor = '#304FFD';
  } else {
    btn.disabled = true;
    btn.style.backgroundColor = '#304ffd3b';
  }
}