$(document).ready(function() {
  $("#btn-submit").click(function(event){
    event.preventDefault();
    var endCount = parseInt($("#end-count").val());
    var multiple = parseInt($("#multiple").val());
    
// non-numeric values shows alert, negative numbers, empty values and
// count by number is larger than the count to numbers => Alert
    if(isNaN(endCount)||isNaN(multiple)||(!isPositive(endCount))||(!isPositive(multiple)))
    {
      alert("Please enter only postive numbers.");
    }
    else
    {
      $("#output").text("Output: ");
      for(var index = 0; index <= endCount; index += multiple)
      {
        $("#output").append(index.toString()+" ");
      }
    }
  });
});

function isNaN(value)
{
  return (value === NaN);
}

function isPositive(value)
{
  return (value >= 0);
}
