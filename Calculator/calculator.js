
function sqrt() {
      var val = document.getElementById("d").value;
      document.getElementById("d").value = "√(" + val + ")";
  }

function c(val)
{
document.getElementById("d").value=val;
}
function v(val)
{
document.getElementById("d").value+=val;
}
function e() 
{ 

    try {
      var toEval = document.getElementById("d").value.replace("√", "Math.sqrt");
      
      var result= eval(toEval);
      alert(result);
      c(result)
    } catch (e) {
      c('Error')
    }
  }

