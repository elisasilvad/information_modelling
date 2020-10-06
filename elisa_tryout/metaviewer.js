//Understand which style have you selected
function whichStyle() {
	var selectedStyle = $( "#styles option:selected" ).text();
	var selectedStyleString = selectedStyle + '.css';
	var ArticleCss = $("#ArticleCss").attr('href');
	alert(ArticleCss)
}

$("#styles").change(function() {
	var selectedStyle = $( "#styles option:selected" ).text();
	var selectedStyleString = selectedStyle + '.css';
	$("#ArticleCss").attr('href', selectedStyleString);    
});


//Darkmode and Lightmode
function darkMode(sheet) {
	document.getElementById('ArticleCss').setAttribute('href', sheet);
}

//Change styles through buttons
function changeStyle(selectedStyle) {
	document.getElementById('ArticleCss').setAttribute('href', selectedStyle);
}

//Reading time depending on number of characters
$( document ).ready(function() {
	if ($("#ArticleContainer").text().length <= 2500) {
		$("#readingTime").html("5 minutes");
	}
	else if ($("#ArticleContainer").text().length > 2500 && $("#ArticleContainer").text().length <= 7500) {
		$("#readingTime").html("7 minutes");
	}
});