$(function(){
    $('#bozhon-show-two-part3-btn11').lc_switch();
    $('#bozhon-show-two-part3-btn21').lc_switch();
    $('#bozhon-show-two-part3-btn31').lc_switch();
    $('#bozhon-show-two-part3-btn41').lc_switch();
	// triggered each time a field changes status
	$('body').delegate('.lcs_check', 'lcs-statuschange', function() {
		var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
		console.log('field changed status: '+ status );
	});

	// triggered each time a field is checked
	$('body').delegate('.lcs_check', 'lcs-on', function() {
		console.log('field is checked');
	});
	
	
	// triggered each time a is unchecked
	$('body').delegate('.lcs_check', 'lcs-off', function() {
		console.log('field is unchecked');
	});

	$(".select").jSelect();
})