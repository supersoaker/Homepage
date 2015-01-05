/* Array to save the position percent of the projects 
var positionArr = new Array();
positionArr[1] = 16;
positionArr[2] = 6;
positionArr[3] = 15;
positionArr[4] = 5;
positionArr[5] = 16;
positionArr[6] = 6;
positionArr[7] = 15;
positionArr[8] = 5;
*/

$(document).ready(function(){
	/* Startup functions 
	rotateProject($('#blub2'), -5);
	rotateProject($('#blub6'), 5);
	rotateProject($('#blub8'), -5);
	*/
	
	rotateProject($('#project1'), -5);
	//rotateProject($('#project2'), 5);
	rotateProject($('#project3'), 5);
	rotateProject($('#project4'), -5);
	
	rotateProject($('#project6'), -5);
	rotateProject($('#project7'), 5);
	rotateProject($('#project8'), -5);
	rotateProject($('#project9'), 5);
	/* */
	checkWindowSize();

	
	/* Popup functions */
	$('.small-picture').click(function(){
		var description = $(this).text();
		var picSource = $(this).find('img').attr('src');
		$('#large-project-span span').text(description);
		$('#large-project-img img').attr('src', picSource.slice(0,picSource.length-4)+'_l.gif');
		$('#popup').bPopup();
	});
});

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
$(window).resize(function(){
	windowWidth = window.innerWidth;
	checkWindowSize();
});

var windowSize = '';
function checkWindowSize(){
	if(windowWidth >= 1035){
		if(windowSize != 'large'){
			windowSize = 'large';
			
			adaptLayoutToLarge();
			console.log('jetzt large');
		}
	} else {
		if(windowSize == 'large'){
			adaptLayoutFromLarge();
			windowSize = '';
		}
	}
}

function adaptLayoutToLarge(){
	//$("#removeable-div-left").removeClass('removeable');
	/* right: 30px nach left und below 150px nach left
	 *
	 */
	/* Projects, that are below the others */
	$('.below').animate({
		'margin-left':'120px',
		'margin-right':'120px'
	});
	// animierter Scheiß!
}
function adaptLayoutFromLarge(){
	//$("#removeable-div-left").removeClass('removeable');
	$('.below').animate({
		'margin-left':'0px',
		'margin-right':'0px'
	});
	console.log('adaptLayoutFromLarge()');
}
/*
var windowSize = '';
function checkWindowSize(){
	return;
	var widthChanged = false;
	if(windowWidth >= 1035){
		if(windowSize != 'large'){
			widthChanged = true;
			windowSize = 'large';
			console.log('jetzt large');
		}
	}
	if(windowWidth < 1035 && windowWidth >= 720){
		if(windowSize != 'medium'){
			widthChanged = true;
			windowSize = 'medium';
			console.log('jetzt medium');
		}
	}
	if(windowWidth < 720 && windowWidth >= 640){
		if(windowSize != 'mediumSmall'){
			widthChanged = true;
			windowSize = 'mediumSmall';
			console.log('jetzt mediumSmall');
		}
	}
	if(windowWidth < 640){
		if(windowSize != 'small'){
			widthChanged = true;
			windowSize = 'small';
			console.log('jetzt small');
		}
	}
	if(widthChanged){
		adaptLayout();
	}
}*/
/*
function adaptLayout(){
	if(windowSize == 'large'){
		adaptProjects(-4);
		$('#content-left').css('width', '35%');
	} else if(windowSize == 'medium'){
		adaptProjects(4);
		//$('#content-left').css('width', '30%');
		$('#content').css('width', '100%');
		adaptLayoutMediumSmall(5, 0, 10, -5);
	} else if(windowSize == 'mediumSmall'){
		adaptProjects(6, true);
		
		$('#content').css('width', '205px');
		//$('#content-left').css('width', '25%');
		adaptLayoutMediumSmall(12, 6, -1, -6);
	} else if(windowSize == 'small'){
		$('#content-left, #content-right').hide();
		$('#content-center, #content').css('width', '100%');
	}
}
function adaptLayoutMediumSmall(percentLeftFirst, percentLeftSecond, percentRightFirst, percentRightSecond){
	var p = $('.small-picture');
	var pLength = p.length+1;
	var percent = percentLeftFirst;
	var halfProjects = Math.ceil(pLength/2);
	for(var i = 1; i < pLength; i++){
		// prüft ob i grade ist
		if((i%2)==0){
			percent = percentLeftSecond;
			if(i >= halfProjects){
				percent = percentRightSecond;
			}
		} else {
			percent = percentLeftFirst;
			if(i >= halfProjects){
				percent = percentRightFirst;
			}
		}
		console.log('#project'+i);
		var margin = positionArr[i];
		var newmargin = margin-percent;
		$('#project'+i).animate({
			'margin-left' : newmargin+'%'
		});
	}
}

function adaptProjects(percent){
	var p = $('.small-picture');
	var pLength = p.length+1;
	var i = 1;
	for(i; i < pLength; i++){
		var margin = positionArr[i];
		var newmargin = margin-percent;
		$('#project'+i).animate({
			'margin-left' : newmargin+'%'
		});
	}
}


*/


function rotateProject(projectObj, rotateDeg){
	projectObj.css({
		'-moz-transform':'rotate('+rotateDeg+'deg)',
		'-webkit-transform':'rotate('+rotateDeg+'deg)',
		'-o-transform':'rotate('+rotateDeg+'deg)',
		'-ms-transform':'rotate('+rotateDeg+'deg)',
		'transform':'rotate('+rotateDeg+'deg)'
	});
}
