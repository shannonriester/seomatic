// LOAD EVENTS

$(function () {

    $('.metaPane').hide();
    value = $('#siteCreatorType').val();
    $('#'+value).show();
    if (value != "person")
    	$('#generic').show();

    $('#siteCreatorType').on('change', function(e) {
        $('.metaPane').hide();
        $('#'+this.value).show();
	    if (this.value != "person")
	    	$('#generic').show();
    });

    $('#geolookup').on('click', function(e) {
	    address = $('#genericCreatorStreetAddress').val() + ", "
	    			+ $('#genericCreatorAddressLocality').val() + ", "
	    			+ $('#genericCreatorAddressRegion').val() + ", "
	    			+ $('#genericCreatorPostalCode').val() + ", "
	    			+ $('#genericCreatorAddressCountry').val();
		$.ajax({
			url:"http://maps.googleapis.com/maps/api/geocode/json?address="+address+"&sensor=false",
			type: "POST",
			success:function(res){
			 $('#genericCreatorGeoLatitude').val(res.results[0].geometry.location.lat);
			 $('#genericCreatorGeoLongitude').val(res.results[0].geometry.location.lng);
			}
		});
    });

});