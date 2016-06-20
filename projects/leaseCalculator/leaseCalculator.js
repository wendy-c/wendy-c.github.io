var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // The message only shows if user has entered number less than 10
  console.assert(this.value > 10, 'User entered less than 10');
});

$('#calculator').on('submit', function(e) { 
  e.preventDefault();
  console.log('Clicked submit...');

  var msrp = $('#msrp').val();
  var cap = $('#cap').val();
  var terms = $('#terms').val();
  var miles = $('#miles').val();
  var down = $('#down').val();
  var residual = $('#residual').val();
  var mf = $('#mf').val();
  var acquisition = $('#acquisition').val();
  var tax = $('#tax').val();

  residualVal = msrp * (residual/100);
  depreication = (cap - residualVal) / terms;
  interest = ((cap + residualVal - down) * (residual/100)) + acquisition;
  payment = ((depreication + interest) * (tax/100 +1)).toFixed(2);
  console.log("residualVal:", residualVal, "cap:", cap, "terms:", terms, "acquisition:", acquisition, "tax:", tax, "depreication:", depreication, "interest:", interest, "payment:", payment);

  // The message only shows if user has not entered a number
  console.assert($.isNumeric(payment), 'User entered non-numeric value');

  var message = "<div class='cal'>The payment for a " + terms + " months lease, driving " + miles + " miles a year is $ " + payment + " a month.</div>";

  $('#container').html(message);
});