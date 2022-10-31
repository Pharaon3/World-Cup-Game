// octavosController.js
var octavosWinner = [-1, -1, -1, -1, -1, -1, -1, -1];

function selectOctavosWinner(winner, octavosGroup, octavosCountry) {
  console.log('selectOctavosWinner BEGINE');
  if(!winner.classList.contains('active'))return;
  if(octavosWinner[octavosGroup] == octavosCountry)return;
  console.log('winner: ', winner);
  octavosWinner[octavosGroup] = octavosCountry;
  winner.getElementsByTagName("circle")[0].style.fill = winnerCircleColor;
  winner.getElementsByTagName("rect")[0].style.fill = winnerRectColor;
  selectOctavosLoser(octavosGroup, 1 - octavosCountry);
  console.log('OctavosWinner: ', octavosWinner);
  console.log('selectOctavosWinner END');
}
function selectOctavosLoser(octavosGroup, octavosCountry){
  	console.log('selectOctavosLoser BEGINE');
	var grupoId = octavos2grupoGroup(octavosGroup, octavosCountry);
  	console.log('loserGrupoId: ', grupoId);
	var grupoCountry = octavos2grupoCountry(octavosGroup, octavosCountry);
  	console.log('loserGrupoCountry: ', grupoCountry);
	var gTagId = getGtagId(grupoId, grupoCountry);
  	console.log('loserGTagId: ', gTagId);
	var loser = document.getElementById(gTagId);
  	console.log('loser: ', loser);
	loser.getElementsByTagName("circle")[0].style.fill = loserCircleColor;
	loser.getElementsByTagName("rect")[0].style.fill = blankRectColor;
  	console.log('selectOctavosLoser END');
}
function clearOctavos(grupoId, countryId){
	
}

function loserGroup(winnerGroup){
	return 1 - winnerGroup + 4 * Math.floor(winnerGroup / 2);
}
function loserCountry(winnerCountry){
	return 1 - winnerCountry;
}
function grupo2octavosGroup(winnerGroup, winnerCountry){
	return Math.floor(winnerGroup / 2) + ( winnerGroup + winnerCountry - Math.floor((winnerGroup + winnerCountry) / 2) * 2) * 4;
}
function grupo2octavosCountry(winnerGroup, winnerCountry){
	if ((winnerGroup + winnerCountry - Math.floor((winnerGroup + winnerCountry) / 2) * 2) == winnerCountry) return 0;
	return 1;
}
function octavos2grupoGroup(octavosGroup, octavosCountry){
	if(octavosGroup < 4) return octavosGroup * 2 + octavosCountry;
	return (octavosGroup - 4) * 2 + (1 - octavosCountry);
}
function octavos2grupoCountry(octavosGroup, octavosCountry){
	return octavosCountry;
}
function getGtagId(grupoId, countryId){
	var gTagId = '_';
	var Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	gTagId += (countryId + 1);
	gTagId += Alphabet[grupoId];
	return gTagId;
}