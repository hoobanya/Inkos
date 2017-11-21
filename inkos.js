$(document).ready(function(){
/* Common Functions */
	$('.alert').hide();

/* Functions for Index Page */    
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval: 3000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slide.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});

/* Functions for Request Help Page */
  $('.requestUserEntryContent').show();
  $('#requestUserEntrySuccess').hide();

	$('#requestSubmitButton').on('click', function() {
		var name = $('#nameInput').val().trim();
		var street = $('#streetInput').val().trim();
		var city = $('#cityInput').val().trim();
		var zip = $('#zipInput').val().trim();
		var phone = $('#phoneInput').val().trim();
		var email = $('#emailInput').val().trim();
		var date = $('#dateInput').val().trim();
		var fromtime = $('#fromTimeInput').val().trim();
		var totime = $('#toTimeInput').val().trim();
		$('.requiredInput').removeAttr("style");
		if (name != "" && street != "" && city != "" && zip != "" && phone != "" && email != "" && date != "" && fromtime != "" && totime != ""){
			$('#requestUserEntry').trigger("reset");
			$('#emptyFieldAlert').hide();
			$('#submitSuccessAlert').show();
      $('.requestUserEntryContent').hide();
      $('#requestUserEntrySuccess').show();
		}
		else{
			$('#emptyFieldAlert').show();
			if (name == ""){
				$('#nameInput').css("background-color", "LemonChiffon");
			}
			if (street == ""){
				$('#streetInput').css("background-color", "LemonChiffon");
			}
			if (city == ""){
				$('#cityInput').css("background-color", "LemonChiffon");
			}
			if (zip == ""){
				$('#zipInput').css("background-color", "LemonChiffon");
			}
			if (phone == ""){
				$('#phoneInput').css("background-color", "LemonChiffon");
			}
			if (email == ""){
				$('#emailInput').css("background-color", "LemonChiffon");
			}
			if (date == ""){
				$('#dateInput').css("background-color", "LemonChiffon");
			}
			if (fromtime == ""){
				$('#fromTimeInput').css("background-color", "LemonChiffon");
			}
			if (totime == ""){
				$('#toTimeInput').css("background-color", "LemonChiffon");
			}
		}
	});

/* Functions for Volunteer Help Page */
 	var volunteerNameArray = ['ABC Corporation', 'Miles Guerrera', 'XYZ Corp. Social Outreach', 'RoofsForAll (NGO)', 'Saviour Hurricane Relief Trust', 'XYZ Corp.', 'Red Cross of America', 'XYZ Corp. Social Outreach', 'Martha Lewis Charity', 'Chicago Storm Relief Group', 'JKL Corp. Social Outreach', 'Red Cross of America', 'Martha Lewis Charity', 'Carson Building Administration'];
 	var volunteerAddressArray = ['2000 Sheridan Road', '1717 Hinman Ave.', '2134 Clark Ave.', '1254 Madison St.', '245 Sierra Ave.', '1002 Main St.', '2030 University Pl.', '2004 Pelican Ave.', '1243 Lark Rd.', '2134 Harriot St.', '245 Carlson Bld.', '123 Baker Ave.', '809 Morrison Bld.', '2113 Clark St.'];
 	var volunteerDistanceArray = ['0.2 miles', '0.3 miles', '0.3 miles', '0.3 miles', '0.3 miles', '0.5 miles', '0.6 miles', '1.2 miles','1.7 miles', '3.0 miles', '3.7 miles', '4.0 miles', '4.3 miles', '5.0 miles', '5.0 miles']
 	var volunteerEmailArray = ['outreach@abc.com', 'mguerrera@gmail.com', 'outreach@xyz.com', 'contactus@roofsforall.org', 'shrf@gmail.com', 'outreach@xyz.com', 'contact@redcross.org', 'outreach@xyz.com', 'marthacharity@gmail.com', 'stormrelief@gmail.com', 'outreach@jkl.com', 'contact@redcross.com', 'marthacharity@gmail.com', 'carsonbuilding@gmail.com'];
 	var volunteerPhoneArray = '222-777-9999';
 	var volunteerDateArray = ['10/22/2017', '10/22/2017', '10/22/2017', '10/22/2017', '10/22/2017', '10/23/2017', '10/23/2017', '10/23/2017', '10/24/2017', '10/24/2017', '10/25/2017', '10/25/2017', '10/25/2017', '10/25/2017'];
 	var volunteerTimeArray = ['3:00PM - 7:00PM', '2:00PM - 3:00PM', '4:00PM - 6:00PM', '2:00PM - 3:00PM', '4:00PM - 6:00PM', '12:00PM - 3:00PM', '6:00PM - 9:00PM', '5:00PM - 10:00PM', '11:00AM - 3:00PM', '4:00PM - 7:00PM', '6:00PM - 9:00PM', '11:00AM - 4:00PM', '12:00PM - 2:00PM', '4:00PM - 6:00PM'];
 	var volunteerDescriptionArray = ['ABC organization is distributing 1000 disaster relief kits for people affected. Volunteers needed', 'Lend your support to families affected in ...', 'XYZ Corp. is giving out free meals to individuals in need.', 'Volunteer your house as shelter for individuals/families who have lost their homes.', 'Lend your support (financial,emotional) to families and individuals affected in storm.', 'XYZ corporation is distributing 1500 disaster survival kits for people affected. Volunteers needed', 'Lend your support to families affected in ...', 'XYZ corp. is giving out free meals to families and individuals in need. Donations welcome.', 'Volunteer your house as shelter for individuals/families who had their houses destroyed.', 'Lend your support (financial, emotional, shelter) to families and individuals affected in storm.', 'JKL Corp. has pledged the distribution of 500 free meals. Volunteers required.', 'Red Cross is putting together school kits to be distributed amongst children below 14 years.', 'Lend your support to families affected in ....', 'Volunteer to shelter individuals/families who have lost their homes.'];

	$('#volTable').on('click-row.bs.table', function (e, row, $element) {
	/*Setting background color for table row */
  		$('.success').removeClass('success');
  		$($element).addClass('success');
  	});

	$("#volunteerSearchButton").click(function(){
	/*Moving search bar/ checking for input*/
    	var input = $('#volunteerSearchBar').val().trim();
    	if(input == ""){
      		$('#emptySearchAlert').show();
      		$('#volunteerSearchBar').css("background-color", "LemonChiffon");
      		return false;
    	} 
    	else{
    		$('#volunteerSearchBar').removeAttr("style");
   			$('#emptySearchAlert').hide();
    		$("#volTableDiv").show(1000);
    		return false;
  		}
    });

	$("#volTable tbody > tr").click(function() {
	/*Setting request info fields and showing divs on modal open (table row click)*/
    	$("body").addClass("stop-scrolling");
    	current_row = $(this);
    	$("#nameOutput").html(volunteerNameArray[$(this).data('id')]);      
    	$("#descriptionOutput").html(volunteerDescriptionArray[$(this).data('id')]);
    	$("#timeOutput").html(volunteerTimeArray[$(this).data('id')]);
    	$("#dateOutput").html(volunteerDateArray[$(this).data('id')]);
    	$("#emailOutput").html(volunteerEmailArray[$(this).data('id')]);
    	$("#phoneOutput").html(volunteerPhoneArray);
    	$("#addressOutput").html(volunteerAddressArray[$(this).data('id')]);
    	var selected = $(this).hasClass("highlight");
    	$("#volTable tr").removeClass("highlight");
    	if(!selected){
            $(this).addClass("highlight");
    	}
	});

	$("#form-modal").on('hidden.bs.modal', function(e){
	/* Hiding divs and resetting forms in modal close */
  		$("body").removeClass("stop-scrolling");
  		current_row.removeClass("highlight");
  		$("#volunteerInfoForm").slideDown()
  		$("#volunteerUserEntry").addClass("hide")
  		$('#emptyFieldAlert').hide();
  		$('#submitSuccessAlert').hide();
  		$('#volunteerUserEntry').trigger("reset");
  		$("#volunteerModalHeader").text("Requester Information");
	});

	$(document).on("click", "#volunteerVolunteerButton", function(event){
	/*Function to show volunteer info form in modal */
    	$("#volunteerInfoForm").slideUp();
    	$("#volunteerUserEntry").removeClass("hide");
    	$("#volunteerModalHeader").text("Volunteer Information");
      $('.volunteerUserEntryContent').show();
      $('#volunteerUserEntrySuccess').hide();
	});

	$(document).on("click", "#volunteerSubmitButton", function(event){
	/* Function for Volunteer info fields check*/
    	var name = $('#nameInput').val().trim();
    	var phone = $('#phoneInput').val().trim();
    	var email = $('#emailInput').val().trim();
    	$('.requiredInput').removeAttr("style");
    	if (name != "" && phone != "" && email != ""){
      		$('#emptyFieldAlert').hide();
      		$('#submitSuccessAlert').show();
      		$('#volunteerUserEntry').trigger("reset");
          $('.volunteerUserEntryContent').hide();
          $('#volunteerUserEntrySuccess').show();
    	}
    	else{
      		$('#emptyFieldAlert').show();
      		if (name == ""){
        		$('#nameInput').css("background-color", "LemonChiffon");
      		}
      		if (phone == ""){
        		$('#phoneInput').css("background-color", "LemonChiffon");
      		}
      		if (email == ""){
        		$('#emailInput').css("background-color", "LemonChiffon");
      		}
    	}
  	});

  	/* Functions for Find Shelter Page */
  var shelterImageArray = ['images/library.jpg', 'images/tech.jpg', 'images/ryancenter.jpg', 'images/ryanfield.jpg', 'images/highschool.jpg'];
 	var shelterNameArray = ['Evanston Public Library', 'Northwestern Technological Institute', 'Ryan Center for the Musical Arts', 'Ryan Field', 'Evanston Township High School'];
 	var shelterAddressArray = ['1703 Orrington Ave.', '2145 Sheridan Road', '70 Arts Circle Dr.', '1505 Central St.', '1600 Dodge Ave.'];
 	var shelterPhoneArray = ['847-448-8600', '847-491-5220', '847-491-7575', '847-491-7887', '847-491-7887'];
 	var shelterTypeArray = ['Public Building', 'Private Building', 'Private Building', 'Private Building', 'Public Building'];
 	var shelterCapacityArray = ['500', '3000', '1500', '10000']

	$('#shelterTable').on('click-row.bs.table', function (e, row, $element) {
	/*Setting background color for table row */
  		$('.success').removeClass('success');
  		$($element).addClass('success');
  	});

	$("#shelterSearchButton").click(function(){
	/*Moving search bar/ checking for input*/
    	var input = $('#shelterSearchBar').val().trim();
    	if(input == ""){
        $('#emptySearchAlert').show();
      	$('#shelterSearchBar').css("background-color", "LemonChiffon");
      	return false;
    	} 
    	else{
    		$('#shelterSearchBar').removeAttr("style");
   			$('#emptySearchAlert').hide();
    		$("#shelterTableDiv").show(1000);
    		return false;
  		}
    });

	$("#shelterTable tbody > tr").click(function() {
	/*Setting request info fields and showing divs on modal open (table row click)*/
    	$("body").addClass("stop-scrolling");
    	current_row = $(this);
      $("#shelterImage").attr("src", shelterImageArray[$(this).data('id')]);
    	$("#nameOutput").html(shelterNameArray[$(this).data('id')]);      
    	$("#addressOutput").html(shelterAddressArray[$(this).data('id')]);
    	$("#phoneOutput").html(shelterPhoneArray[$(this).data('id')]);
    	$("#typeOutput").html(shelterTypeArray[$(this).data('id')]);
    	$("#capacityOutput").html(shelterCapacityArray[$(this).data('id')]);
    	var selected = $(this).hasClass("highlight");
    	$("#shelterTable tr").removeClass("highlight");
    	if(!selected){
            $(this).addClass("highlight");
    	}
	});

	$("#form-modal").on('hidden.bs.modal', function(e){
	/* Hiding divs and resetting forms in modal close */
  		$("body").removeClass("stop-scrolling");
  		current_row.removeClass("highlight");
  		$("#shelterInfoForm").slideDown()
	});
});



$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});