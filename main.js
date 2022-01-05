

function fun(){

  r1 = parseFloat(document.getElementById("resistance_one").value);
  r2 = parseFloat(document.getElementById("resistance_two").value);

  r3 = parseFloat(document.getElementById("resistance_three").value);
  r4 = parseFloat(document.getElementById("resistance_four").value);
  Vin = parseFloat(document.getElementById("voltage").value);

  var x1 = r3/(r1+r3);
  var x2 = r4/(r2 + r4);



  document.getElementById("vg").value = Vin*(x1 - x2);

  if(x1 === x2){
    alert("Success ! Value of unknown resistance is:  " + r3);
  }
  document.getElementById("finalw").value = r4;
}
