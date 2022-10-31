
function winGrupo(group, place, country) {
  if(leagueWinner[group][place] == country) return;
  leagueWinner[group][place] = country;
  var octavosGroupId = grupo2octavosGroup(group, place);
  var octavosCountryId = grupo2octavosCountry(group, place);
  setOctavos(octavosGroupId, octavosCountryId, group, country);
  setOctavosProcess(octavosGroupId, 1 - octavosCountryId);
  if(leagueWinner[group][1 - place] == country) {
    leagueWinner[group][1 - place] = 0;
    clearSelection(group, 1 - place, country)
    setOctavosEmpty(grupo2octavosGroup(group, 1 - place), grupo2octavosCountry(group, 1 - place));
    setOctavosProcess(grupo2octavosGroup(group, 1 - place), 1 - grupo2octavosCountry(group, 1 - place));
  }
}
function setOctavos(octavosGroupId, octavosCountryId, group, country){
  // Set Octavos Element Part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  octavosWinner[octavosGroupId] = -1;
  octavosElement.classList.add('active');
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var text = octavosElement.getElementsByTagName("text")[0];
  var image = octavosElement.getElementsByTagName("image")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  var imageUrl = './World Cup Game_Files/TS/' + countryNames[group][country - 1] + '.png';
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
  text.style.color = "#000";
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
  // Set Cuartos Part
  var cuartosId = octavosGroupId;
  var opCuartosId = -octavosGroupId + 1 + 4 * Math.floor(octavosGroupId / 2);
  setCuartosEmpty(cuartosId);
  setCuartosProcess(opCuartosId);
}
function setOctavosProcess(octavosGroupId, octavosCountryId){
  // Set Octavos Element Part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = initialRectColor;
  circle.style.fill = initialCircleColor;
}
function setOctavosEmpty(octavosGroupId, octavosCountryId){
  // Set Octavos Element Part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  octavosWinner[octavosGroupId] = -1;
  octavosElement.classList.remove('active');
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var text = octavosElement.getElementsByTagName("text")[0];
  var image = octavosElement.getElementsByTagName("image")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  var imageUrl = '';
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
  text.style.color = "#000";
  text.innerHTML = '';
  circle.style.fill = initialCircleColor;
  // Set Cuartos Part
  var cuartosId = octavosGroupId;
  var opCuartosId = -octavosGroupId + 1 + 4 * Math.floor(octavosGroupId / 2);
  setCuartosEmpty(cuartosId);
  setCuartosProcess(opCuartosId);
}
function winOctavos(octavosGroupId, octavosCountryId) {
  // check if can win this octavos
  if(octavosWinner[octavosGroupId] == octavosCountryId)return;
  octavosWinner[octavosGroupId] = octavosCountryId;
  var grupoId = octavos2grupoGroup(octavosGroupId, octavosCountryId);
  var grupoCountry = octavos2grupoCountry(octavosGroupId, octavosCountryId);
  var opGrupoId = octavos2grupoGroup(octavosGroupId, 1 - octavosCountryId);
  var opGrupoCountry = octavos2grupoCountry(octavosGroupId, 1 - octavosCountryId);
  if(!leagueWinner[grupoId][grupoCountry])return;
  if(!leagueWinner[opGrupoId][opGrupoCountry])return;
  // win octavos part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = winnerRectColor;
  circle.style.fill = winnerCircleColor; 
  loseOctavos(octavosGroupId, 1 - octavosCountryId);
  setCuartosProcess(octavosGroupId);
}
function loseOctavos(octavosGroupId, octavosCountryId) {
  // win octavos part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor; 
}

function clearSelection(group, place, country) {
  var Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  var groupName = Alphabet[group];
  var PlaceArray = ['first', 'second'];
  var placeName = PlaceArray[place];

  var className = groupName + placeName + 'pos';
  const clearGroup = document.getElementsByName(className);
  for(var i=0;i<clearGroup.length;i++)
    clearGroup[i].checked = false; 
}
function getOctavosElement(octavosGroupId, octavosCountryId) {
  var grupoId = octavos2grupoGroup(octavosGroupId, octavosCountryId);
  var grupoCountry = octavos2grupoCountry(octavosGroupId, octavosCountryId);
  var gTagId = getGtagId(grupoId, grupoCountry);
  var octavosElement = document.getElementById(gTagId);
  return octavosElement;
}
function setCuartosEmpty(cuartosId){
  var cuartosElement = getCuartosElement(cuartosId);

}
function setCuartosProcess(cuartosId){
  if(octavosWinner[cuartosId] == -1) return;
  var cuartosElement = getCuartosElement(cuartosId);
  cuartosWinner[Math.floor(cuartosId/2)] = -1;
  cuartosElement.classList.add('active');
  var rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var text = cuartosElement.getElementsByTagName("text")[0];
  var image = cuartosElement.getElementsByTagName("image")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  var imageUrl = './World Cup Game_Files/TS/' + countryNames[group][country - 1] + '.png';
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
  text.style.color = "#000";
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
  // Set Cuartos Part
  // var cuartosId = octavosGroupId;
  // var opCuartosId = -octavosGroupId + 1 + 4 * Math.floor(octavosGroupId / 2);
  // setCuartosEmpty(cuartosId);
  // setCuartosProcess(opCuartosId);
}
function getGtagId(grupoId, countryId){
  var gTagId = '_';
  var Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  gTagId += (countryId + 1);
  gTagId += Alphabet[grupoId];
  return gTagId;
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
  return winnerCountry;
}
function octavos2grupoGroup(octavosGroup, octavosCountry){
  if(octavosGroup < 4) return octavosGroup * 2 + octavosCountry;
  return (octavosGroup - 4) * 2 + (1 - octavosCountry);
}
function octavos2grupoCountry(octavosGroup, octavosCountry){
  return octavosCountry;
}
function getCuartosElement(cuartosId) {
  var cuartosIdString = 'cuartos' + (1 + cuartosId);
  var cuartosElement = document.getElementById(cuartosIdString);
  return cuartosElement;
}