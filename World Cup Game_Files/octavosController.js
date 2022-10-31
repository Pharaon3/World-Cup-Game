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
  winner.getElementsByTagName("circle")[0].style.fill = winnerCircleColor;
  winner.getElementsByTagName("rect")[0].style.fill = winnerRectColor;
}


function loserGroup(winnerGroup){
	return 1 - winnerGroup + 4 * Math.floor(winnerGroup / 2);
}
function loserCountry(winnerCountry){
	return 1 - winnerCountry;
}
function octavos2grupoGroup(winnerGroup, winnerCountry){
	return Math.floor(winnerGroup / 2) + ( winnerGroup + winnerCountry - Math.floor((winnerGroup + winnerCountry) / 2) * 2) * 4;
}
function octavos2grupoCountry(winnerGroup, winnerCountry){
	if ((winnerGroup + winnerCountry - Math.floor((winnerGroup + winnerCountry) / 2) * 2) == winnerCountry) return 0;
	return 1;
}
function getGroupId