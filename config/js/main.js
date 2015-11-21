(function() {
	loadOptions();
	submitHandler();
})();

function submitHandler() {
	var $submitButton = $('#submitButton');
	$submitButton.on('click', function() {
		console.log('Submit');

		var return_to = getQueryParam('return_to', 'pebblejs://close#');
		document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
	});
}

var $submitButton = $('#submitButton');

$submitButton.on('click', function() {
	console.log('Submit');

	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
});

var degreeOption = 0;
function tabClickHandler(value) {
	console.log(value);
	if (value == "Celsius") {
		degreeOption = 0;
	} else if (value == "Fahrenheit") {
		degreeOption = 1;
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $blockOneColorPicker = $('#blockOneColorPicker');
	var $blockTwoColorPicker = $('#blockTwoColorPicker');
	var $blockThreeColorPicker = $('#blockThreeColorPicker');
	var $blockFourColorPicker = $('#blockFourColorPicker');
	var $blockFiveColorPicker = $('#blockFiveColorPicker');
	var $blockSixColorPicker = $('#blockSixColorPicker');
	var $blockSevenColorPicker = $('#blockSevenColorPicker');
	var $blockEightColorPicker = $('#blockEightColorPicker');
	var $blockNineColorPicker = $('#blockNineColorPicker');
	var $blockTenColorPicker = $('#blockTenColorPicker');
	var $blockElevenColorPicker = $('#blockElevenColorPicker');
	var $blockTwelveColorPicker = $('#blockTwelveColorPicker');

	var options = {
		backgroundColor : $backgroundColorPicker.val(),
		blockOneColor : $blockOneColorPicker.val(),
		blockTwoColor : $blockTwoColorPicker.val(),
		blockThreeColor : $blockThreeColorPicker.val(),
		blockFourColor : $blockFourColorPicker.val(),
		blockFiveColor : $blockFiveColorPicker.val(),
		blockSixColor : $blockSixColorPicker.val(),
		blockSevenColor : $blockSevenColorPicker.val(),
		blockEightColor : $blockEightColorPicker.val(),
		blockNineColor : $blockNineColorPicker.val(),
		blockTenColor : $blockTenColorPicker.val(),
		blockElevenColor : $blockElevenColorPicker.val(),
		blockTwelveColor : $blockTwelveColorPicker.val(),
		degreeOption : degreeOption
	};

	localStorage.willdorfblockyroundvar1backgroundColor = options.backgroundColor;
	localStorage.willdorfblockyroundvar1blockOneColor = options.blockOneColor;
	localStorage.willdorfblockyroundvar1blockTwoColor = options.blockTwoColor;
	localStorage.willdorfblockyroundvar1blockThreeColor = options.blockThreeColor;
	localStorage.willdorfblockyroundvar1blockFourColor = options.blockFourColor;
	localStorage.willdorfblockyroundvar1blockFiveColor = options.blockFiveColor;
	localStorage.willdorfblockyroundvar1blockSixColor = options.blockSixColor;
	localStorage.willdorfblockyroundvar1blockSevenColor = options.blockSevenColor;
	localStorage.willdorfblockyroundvar1blockEightColor = options.blockEightColor;
	localStorage.willdorfblockyroundvar1blockNineColor = options.blockNineColor;
	localStorage.willdorfblockyroundvar1blockTenColor = options.blockTenColor;
	localStorage.willdorfblockyroundvar1blockElevenColor = options.blockElevenColor;
	localStorage.willdorfblockyroundvar1blockTwelveColor = options.blockTwelveColor;
	localStorage.willdorfblockyroundvar1degreeOption = options.degreeOption;

	console.log('Got Options: ' + JSON.stringify(options));
	return options;
}

function loadOptions() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $blockOneColorPicker = $('#blockOneColorPicker');
	var $blockTwoColorPicker = $('#blockTwoColorPicker');
	var $blockThreeColorPicker = $('#blockThreeColorPicker');
	var $blockFourColorPicker = $('#blockFourColorPicker');
	var $blockFiveColorPicker = $('#blockFiveColorPicker');
	var $blockSixColorPicker = $('#blockSixColorPicker');
	var $blockSevenColorPicker = $('#blockSevenColorPicker');
	var $blockEightColorPicker = $('#blockEightColorPicker');
	var $blockNineColorPicker = $('#blockNineColorPicker');
	var $blockTenColorPicker = $('#blockTenColorPicker');
	var $blockElevenColorPicker = $('#blockElevenColorPicker');
	var $blockTwelveColorPicker = $('#blockTwelveColorPicker');

	if (localStorage.willdorfblockyroundvar1backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.willdorfblockyroundvar1backgroundColor;
		$blockOneColorPicker[0].value = localStorage.willdorfblockyroundvar1blockOneColor;
		$blockTwoColorPicker[0].value = localStorage.willdorfblockyroundvar1blockTwoColor;
		$blockThreeColorPicker[0].value = localStorage.willdorfblockyroundvar1blockThreeColor;
		$blockFourColorPicker[0].value = localStorage.willdorfblockyroundvar1blockFourColor;
		$blockFiveColorPicker[0].value = localStorage.willdorfblockyroundvar1blockFiveColor;
		$blockSixColorPicker[0].value = localStorage.willdorfblockyroundvar1blockSixColor;
		$blockSevenColorPicker[0].value = localStorage.willdorfblockyroundvar1blockSevenColor;
		$blockEightColorPicker[0].value = localStorage.willdorfblockyroundvar1blockEightColor;
		$blockNineColorPicker[0].value = localStorage.willdorfblockyroundvar1blockNineColor;
		$blockTenColorPicker[0].value = localStorage.willdorfblockyroundvar1blockTenColor;
		$blockElevenColorPicker[0].value = localStorage.willdorfblockyroundvar1blockElevenColor;
		$blockTwelveColorPicker[0].value = localStorage.willdorfblockyroundvar1blockTwelveColor;

		//set the corresponding tab to active
		degreeOption = localStorage.willdorfblockyroundvar1degreeOption;
		if (degreeOption == 0) {
			$('#Celsius').attr('class', 'tab-button active');
		} else {
			$('#Fahrenheit').attr('class', 'tab-button active');
		}
	} else {
		$('#Celsius').attr('class', 'tab-button active');
	}
}

function getQueryParam(variable, defaultValue) {
	var query = location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return defaultValue || false;
}
