function winGrupo(group, place, country) {
  if (leagueWinner[group][place] == country) return;
  leagueWinner[group][place] = country;
  var octavosGroupId = grupo2octavosGroup(group, place);
  var octavosCountryId = grupo2octavosCountry(group, place);
  setOctavos(octavosGroupId, octavosCountryId, group, country);
  setOctavosProcess(octavosGroupId, 1 - octavosCountryId);
  if (leagueWinner[group][1 - place] == country) {
    leagueWinner[group][1 - place] = 0;
    clearSelection(group, 1 - place, country);
    setOctavosEmpty(
      grupo2octavosGroup(group, 1 - place),
      grupo2octavosCountry(group, 1 - place)
    );
    setOctavosProcess(
      grupo2octavosGroup(group, 1 - place),
      1 - grupo2octavosCountry(group, 1 - place)
    );
  }
  notFinished();
}
function setOctavos(octavosGroupId, octavosCountryId, group, country) {
  // Set Octavos Element Part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  octavosWinner[octavosGroupId] = -1;
  octavosElement.classList.add("active");
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var text = octavosElement.getElementsByTagName("text")[0];
  var image = octavosElement.getElementsByTagName("image")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  var imageUrl = "./img/TS/" + countryNames[group][country - 1] + ".png";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
  // Set Cuartos Part
  var cuartosId = octavosGroupId;
  var opCuartosId = -octavosGroupId + 1 + 4 * Math.floor(octavosGroupId / 2);
  setCuartosEmpty(cuartosId);
  setCuartosProcess(opCuartosId);
  // Mobile version
  var octavosElement = getOctavosElementMobile(
    octavosGroupId,
    octavosCountryId
  );
  octavosWinner[octavosGroupId] = -1;
  octavosElement.classList.add("active");
  var rectangle = octavosElement.getElementsByTagName("path")[0];
  var text = octavosElement.getElementsByTagName("text")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = initialRectColor;
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
}
function setOctavosProcess(octavosGroupId, octavosCountryId) {
  // Set Octavos Element Part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = initialRectColor;
  circle.style.fill = initialCircleColor;
  // Mobile version
  var octavosElement = getOctavosElementMobile(
    octavosGroupId,
    octavosCountryId
  );
  var rectangle = octavosElement.getElementsByTagName("polygon")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = initialRectColor;
  circle.style.fill = initialCircleColor;
}
function setOctavosEmpty(octavosGroupId, octavosCountryId) {
  // Set Octavos Element Part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  octavosWinner[octavosGroupId] = -1;
  octavosElement.classList.remove("active");
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var text = octavosElement.getElementsByTagName("text")[0];
  var image = octavosElement.getElementsByTagName("image")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  var imageUrl = "";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;
  // Mobile version
  var octavosElement = getOctavosElementMobile(
    octavosGroupId,
    octavosCountryId
  );
  octavosWinner[octavosGroupId] = -1;
  octavosElement.classList.remove("active");
  var rectangle = octavosElement.getElementsByTagName("polygon")[0];
  var text = octavosElement.getElementsByTagName("text")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  var imageUrl = "";
  rectangle.style.fill = initialRectColor;
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;
  // Set Cuartos Part
  var cuartosId = octavosGroupId;
  var opCuartosId = -octavosGroupId + 1 + 4 * Math.floor(octavosGroupId / 2);
  setCuartosEmpty(cuartosId);
  setCuartosProcess(opCuartosId);
}
function winOctavos(octavosGroupId, octavosCountryId) {
  // check if can win this octavos
  if (octavosWinner[octavosGroupId] == octavosCountryId) return;
  var grupoId = octavos2grupoGroup(octavosGroupId, octavosCountryId);
  var grupoCountry = octavos2grupoCountry(octavosGroupId, octavosCountryId);
  var opGrupoId = octavos2grupoGroup(octavosGroupId, 1 - octavosCountryId);
  var opGrupoCountry = octavos2grupoCountry(
    octavosGroupId,
    1 - octavosCountryId
  );
  if (!leagueWinner[grupoId][grupoCountry]) return;
  if (!leagueWinner[opGrupoId][opGrupoCountry]) return;
  octavosWinner[octavosGroupId] = octavosCountryId;
  // win octavos part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = winnerRectColor;
  circle.style.fill = winnerCircleColor;
  // Mobile version
  var octavosElement = getOctavosElementMobile(
    octavosGroupId,
    octavosCountryId
  );
  var rectangle = octavosElement.getElementsByTagName("path")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = winnerRectColor;
  circle.style.fill = winnerCircleColor;

  loseOctavos(octavosGroupId, 1 - octavosCountryId);
  setCuartosProcess(octavosGroupId);
  var opOctavosGroupId =
    -octavosGroupId + 1 + 4 * Math.floor(octavosGroupId / 2);
  setCuartosProcess(opOctavosGroupId);
  notFinished();
}
function loseOctavos(octavosGroupId, octavosCountryId) {
  // win octavos part
  var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
  var rectangle = octavosElement.getElementsByTagName("rect")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
  // Mobile version
  var octavosElement = getOctavosElementMobile(
    octavosGroupId,
    octavosCountryId
  );
  var rectangle = octavosElement.getElementsByTagName("polygon")[0];
  var circle = octavosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
}
function clearSelection(group, place, country) {
  var Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var groupName = Alphabet[group];
  var PlaceArray = ["first", "second"];
  var placeName = PlaceArray[place];

  var className = groupName + placeName + "pos";
  const clearGroup = document.getElementsByName(className);
  for (var i = 0; i < clearGroup.length; i++) clearGroup[i].checked = false;
}
function getOctavosElement(octavosGroupId, octavosCountryId) {
  var grupoId = octavos2grupoGroup(octavosGroupId, octavosCountryId);
  var grupoCountry = octavos2grupoCountry(octavosGroupId, octavosCountryId);
  var gTagId = getGtagId(grupoId, grupoCountry);
  var octavosElement = document.getElementById(gTagId);
  return octavosElement;
}
function getOctavosElementMobile(octavosGroupId, octavosCountryId) {
  var grupoId = octavos2grupoGroup(octavosGroupId, octavosCountryId);
  var grupoCountry = octavos2grupoCountry(octavosGroupId, octavosCountryId);
  var gTagId = getMobileGtagId(grupoId, grupoCountry);
  var octavosElement = document.getElementById(gTagId);
  return octavosElement;
}
function winCuartos(cuartosId) {
  // check if can win this cuartos
  var semifinalId = Math.floor(cuartosId / 2);
  if (cuartosWinner[semifinalId] == cuartosId) return;
  var opCuartosId = -cuartosId + 1 + 4 * Math.floor(cuartosId / 2);
  if (octavosWinner[opCuartosId] == -1) return;
  // win octavos part
  cuartosWinner[semifinalId] = cuartosId;
  var cuartosElement = getCuartosElement(cuartosId);
  var rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = winnerRectColor;
  circle.style.fill = winnerCircleColor;

  // Mobile version
  var cuartosElement = getCuartosElementMobile(cuartosId);
  var rectangle = cuartosElement.getElementsByTagName("polygon")[0];
  if (!rectangle) rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = winnerRectColor;
  circle.style.fill = winnerCircleColor;

  loseCuartos(opCuartosId);
  setSemifinalProcess(semifinalId);
  var opSemifinalId = -semifinalId + 1 + 4 * Math.floor(semifinalId / 2);
  setSemifinalProcess(opSemifinalId);
  notFinished();
}
function loseCuartos(cuartosId) {
  var cuartosElement = getCuartosElement(cuartosId);
  var rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
  // Mobile version
  var cuartosElement = getCuartosElementMobile(cuartosId);
  var rectangle = cuartosElement.getElementsByTagName("polygon")[0];
  if (!rectangle) rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
}
function setCuartosEmpty(cuartosId) {
  var cuartosElement = getCuartosElement(cuartosId);
  cuartosWinner[Math.floor(cuartosId / 2)] = -1;
  cuartosElement.classList.remove("active");
  var rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var text = cuartosElement.getElementsByTagName("text")[0];
  var image = cuartosElement.getElementsByTagName("image")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  var imageUrl = "";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;
  // Mobile version
  var cuartosElement = getCuartosElementMobile(cuartosId);
  cuartosWinner[Math.floor(cuartosId / 2)] = -1;
  cuartosElement.classList.remove("active");
  var rectangle = cuartosElement.getElementsByTagName("polygon")[0];
  if (!rectangle) rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var text = cuartosElement.getElementsByTagName("text")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  // rectangle.setAttribute("fill", initialRectColor);
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;

  setSemifinalEmpty(Math.floor(cuartosId / 2));
}
function setCuartosProcess(cuartosId) {
  if (octavosWinner[cuartosId] == -1) return;
  var cuartosElement = getCuartosElement(cuartosId);
  cuartosWinner[Math.floor(cuartosId / 2)] = -1;
  cuartosElement.classList.add("active");
  var rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var text = cuartosElement.getElementsByTagName("text")[0];
  var image = cuartosElement.getElementsByTagName("image")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  var imageUrl = "./img/TS/" + countryNames[group][country - 1] + ".png";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
  // Mobile version
  var cuartosElement = getCuartosElementMobile(cuartosId);
  cuartosWinner[Math.floor(cuartosId / 2)] = -1;
  cuartosElement.classList.add("active");
  var rectangle = cuartosElement.getElementsByTagName("polygon")[0];
  if (!rectangle) rectangle = cuartosElement.getElementsByTagName("rect")[0];
  var text = cuartosElement.getElementsByTagName("text")[0];
  var circle = cuartosElement.getElementsByTagName("circle")[0];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  rectangle.style.fill = initialRectColor;
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
  // Set Semifinal Part
  var semifinalId = Math.floor(cuartosId / 2);
  var opSemifinalId = -semifinalId + 1 + 4 * Math.floor(semifinalId / 2);
  setSemifinalEmpty(semifinalId);
  setSemifinalProcess(opSemifinalId);
}

function winSemifinal(semifinalId) {
  var finalId = Math.floor(semifinalId / 2);
  if (semifinalWinner[finalId] == semifinalId) return;
  var semifinalElement = getSemifinalElement(semifinalId);
  var opSemifinalId = -semifinalId + 1 + 4 * Math.floor(semifinalId / 2);
  if (cuartosWinner[opSemifinalId] == -1) return;
  semifinalWinner[finalId] = semifinalId;
  semifinalElement.classList.add("active");
  var rectangle = semifinalElement.getElementsByTagName("rect")[0];
  var text = semifinalElement.getElementsByTagName("text")[0];
  var image = semifinalElement.getElementsByTagName("image")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  var imageUrl = "./img/TS/" + countryNames[group][country - 1] + ".png";
  rectangle.style.fill = winnerRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = winnerCircleColor;
  loseSemifinal(opSemifinalId);
  // Set Final Part
  var finalId = Math.floor(semifinalId / 2);
  var opFinalId = -finalId + 1 + 4 * Math.floor(finalId / 2);
  setFinalProcess(finalId);
  setFinalProcess(opFinalId);
  notFinished();
  // Mobile version
  var semifinalElement = getSemifinalElementMobile(semifinalId);
  semifinalElement.classList.add("active");
  var rectangle = semifinalElement.getElementsByTagName("polygon")[0];
  var text = semifinalElement.getElementsByTagName("text")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  rectangle.style.fill = winnerRectColor;
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = winnerCircleColor;
}
function loseSemifinal(semifinalId) {
  var semifinalElement = getSemifinalElement(semifinalId);
  var rectangle = semifinalElement.getElementsByTagName("rect")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
  // Mobile version
  var semifinalElement = getSemifinalElementMobile(semifinalId);
  var rectangle = semifinalElement.getElementsByTagName("polygon")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
}
function setSemifinalEmpty(semifinalId) {
  cuartosWinner[semifinalId] == -1;
  var semifinalElement = getSemifinalElement(semifinalId);
  semifinalWinner[Math.floor(semifinalId / 2)] = -1;
  semifinalElement.classList.remove("active");
  var rectangle = semifinalElement.getElementsByTagName("rect")[0];
  var text = semifinalElement.getElementsByTagName("text")[0];
  var image = semifinalElement.getElementsByTagName("image")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  var imageUrl = "";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;
  // Mobile version
  var semifinalElement = getSemifinalElementMobile(semifinalId);
  semifinalElement.classList.remove("active");
  var rectangle = semifinalElement.getElementsByTagName("polygon")[0];
  var text = semifinalElement.getElementsByTagName("text")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = initialRectColor;
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;
  // Set Final Part
  var finalId = Math.floor(semifinalId / 2);
  var opFinalId = -finalId + 1 + 4 * Math.floor(finalId / 2);
  setFinalEmpty(finalId);
  setFinalProcess(opFinalId);
}
function setSemifinalProcess(semifinalId) {
  if (cuartosWinner[semifinalId] == -1) return;
  var semifinalElement = getSemifinalElement(semifinalId);
  semifinalWinner[Math.floor(semifinalId / 2)] = -1;
  semifinalElement.classList.add("active");
  var rectangle = semifinalElement.getElementsByTagName("rect")[0];
  var text = semifinalElement.getElementsByTagName("text")[0];
  var image = semifinalElement.getElementsByTagName("image")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  var imageUrl = "./img/TS/" + countryNames[group][country - 1] + ".png";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
  // Mobile version
  var semifinalElement = getSemifinalElementMobile(semifinalId);
  semifinalElement.classList.add("active");
  var rectangle = semifinalElement.getElementsByTagName("polygon")[0];
  var text = semifinalElement.getElementsByTagName("text")[0];
  var circle = semifinalElement.getElementsByTagName("circle")[0];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  rectangle.style.fill = initialRectColor;
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
  // Set Final Part
  var finalId = Math.floor(semifinalId / 2);
  var opFinalId = -finalId + 1 + 4 * Math.floor(finalId / 2);
  setFinalEmpty(finalId);
  setFinalProcess(opFinalId);
}
function winFinal(finalId) {
  if (semifinalWinner[finalId] == -1) return;
  var finalElement = getFinalElement(finalId);
  var opFinalId = -finalId + 1 + 4 * Math.floor(finalId / 2);
  if (semifinalWinner[opFinalId] == -1) return;
  finalWinner[0] = finalId;
  finalElement.classList.add("active");
  var rectangle = finalElement.getElementsByTagName("rect")[0];
  var text = finalElement.getElementsByTagName("text")[0];
  var image = finalElement.getElementsByTagName("image")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  var semifinalId = semifinalWinner[finalId];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  var imageUrl = "./img/TS/" + countryNames[group][country - 1] + ".png";
  rectangle.style.fill = winnerRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = winnerCircleColor;
  loseFinal(opFinalId);
  // First Color
  rectangle.style.fill = firstRectColor;
  text.style.fill = firstTextColor;
  var semifinalElement = getSemifinalElement(semifinalId);
  rectangle = semifinalElement.getElementsByTagName("rect")[0];
  text = semifinalElement.getElementsByTagName("text")[0];
  rectangle.style.fill = firstRectColor;
  text.style.fill = firstTextColor;
  var opSemifinalId = -semifinalId + 1 + 4 * Math.floor(semifinalId / 2);
  semifinalElement = getSemifinalElement(opSemifinalId);
  rectangle = semifinalElement.getElementsByTagName("rect")[0];
  text = semifinalElement.getElementsByTagName("text")[0];
  rectangle.style.fill = winnerRectColor;
  var cuartosElement = getCuartosElement(cuartosId);
  rectangle = cuartosElement.getElementsByTagName("rect")[0];
  text = cuartosElement.getElementsByTagName("text")[0];
  rectangle.style.fill = firstRectColor;
  text.style.fill = firstTextColor;
  var octavosElement = getOctavosElement(cuartosId, octavosWinner[cuartosId]);
  rectangle = octavosElement.getElementsByTagName("rect")[0];
  text = octavosElement.getElementsByTagName("text")[0];
  rectangle.style.fill = firstRectColor;
  text.style.fill = firstTextColor;

  var championCountry = countryFullNames[group][country - 1];
  var championString = document.getElementById("champion");
  championString.innerHTML = "¡" + championCountry;
  document.getElementById("champions").style.display = "block";
  document.getElementById("worldcup").style.opacity = 1;
  // Mobile version
  var finalElement = getFinalElementMobile(finalId);
  finalElement.classList.add("active");
  var rectangle = finalElement.getElementsByTagName("path")[0];
  var text = finalElement.getElementsByTagName("text")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  var semifinalId = semifinalWinner[finalId];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  rectangle.style.fill = winnerRectColor;
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = winnerCircleColor;

  var semifinalElementm = getSemifinalElementMobile(semifinalId);
  textm = semifinalElementm.getElementsByTagName("text")[0];
  textm.style.fill = firstTextColor;
  var opSemifinalId = -semifinalId + 1 + 4 * Math.floor(semifinalId / 2);
  semifinalElement = getSemifinalElementMobile(opSemifinalId);
  rectanglem = semifinalElement.getElementsByTagName("polygon")[0];
  rectanglem.style.fill = winnerRectColor;
  var cuartosElement = getCuartosElementMobile(cuartosId);
  rectanglem = cuartosElement.getElementsByTagName("polygon")[0];
  if (!rectanglem) rectanglem = cuartosElement.getElementsByTagName("rect")[0];
  textm = cuartosElement.getElementsByTagName("text")[0];
  rectanglem.style.fill = firstRectColor;
  textm.style.fill = firstTextColor;
  var octavosElementM = getOctavosElementMobile(
    cuartosId,
    octavosWinner[cuartosId]
  );
  rectangleM = octavosElementM.getElementsByTagName("path")[0];
  textM = octavosElementM.getElementsByTagName("text")[0];
  rectangleM.style.fill = firstRectColor;
  textM.style.fill = firstTextColor;

  var championCountry = countryFullNames[group][country - 1];
  var worldcup = document.getElementById("mobCopa");
  worldcup.classList.add("active");
}
function loseFinal(finalId) {
  var finalElement = getFinalElement(finalId);
  var rectangle = finalElement.getElementsByTagName("rect")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
  // Second Color
  rectangle.style.fill = secondRectColor;
  var semifinalId = semifinalWinner[finalId];
  var semifinalElement = getSemifinalElement(semifinalId);
  rectangle = semifinalElement.getElementsByTagName("rect")[0];
  rectangle.style.fill = secondRectColor;
  var opSemifinalId = -semifinalId + 1 + 4 * Math.floor(semifinalId / 2);
  semifinalElement = getSemifinalElement(opSemifinalId);
  rectangle = semifinalElement.getElementsByTagName("rect")[0];
  text = semifinalElement.getElementsByTagName("text")[0];
  rectangle.style.fill = winnerRectColor;
  var cuartosId = cuartosWinner[semifinalId];
  var cuartosElement = getCuartosElement(cuartosId);
  rectangle = cuartosElement.getElementsByTagName("rect")[0];
  rectangle.style.fill = secondRectColor;
  var octavosElement = getOctavosElement(cuartosId, octavosWinner[cuartosId]);
  rectangle = octavosElement.getElementsByTagName("rect")[0];
  rectangle.style.fill = secondRectColor;
  // Mobile version
  var finalElement = getFinalElementMobile(finalId);
  var rectangle = finalElement.getElementsByTagName("rect")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = loserRectColor;
  circle.style.fill = loserCircleColor;
  // Second Color
  rectangle.style.fill = secondRectColor;
  var semifinalId = semifinalWinner[finalId];
  var semifinalElement = getSemifinalElementMobile(semifinalId);
  rectangle = semifinalElement.getElementsByTagName("polygon")[0];
  rectangle.style.fill = secondRectColor;
  var opSemifinalId = -semifinalId + 1 + 4 * Math.floor(semifinalId / 2);
  semifinalElement = getSemifinalElementMobile(opSemifinalId);
  rectangle = semifinalElement.getElementsByTagName("polygon")[0];
  text = semifinalElement.getElementsByTagName("text")[0];
  rectangle.style.fill = winnerRectColor;
  var cuartosId = cuartosWinner[semifinalId];
  var cuartosElement = getCuartosElementMobile(cuartosId);
  rectangle = cuartosElement.getElementsByTagName("polygon")[0];
  if (!rectangle) rectangle = cuartosElement.getElementsByTagName("rect")[0];
  rectangle.style.fill = secondRectColor;
  var octavosElement = getOctavosElementMobile(
    cuartosId,
    octavosWinner[cuartosId]
  );
  rectangle = octavosElement.getElementsByTagName("path")[0];
  rectangle.style.fill = secondRectColor;
}
function setFinalEmpty(finalId) {
  var finalElement = getFinalElement(finalId);
  finalElement.classList.remove("active");
  var rectangle = finalElement.getElementsByTagName("rect")[0];
  var text = finalElement.getElementsByTagName("text")[0];
  var image = finalElement.getElementsByTagName("image")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  var imageUrl = "";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;

  // Mobile version
  var finalElement = getFinalElementMobile(finalId);
  finalElement.classList.remove("active");
  var rectangle = finalElement.getElementsByTagName("path")[0];
  var text = finalElement.getElementsByTagName("text")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  rectangle.style.fill = initialRectColor;
  text.style.fill = textColor;
  text.innerHTML = "";
  circle.style.fill = initialCircleColor;
}
function setFinalProcess(finalId) {
  if (semifinalWinner[finalId] == -1) return;
  var finalElement = getFinalElement(finalId);
  finalWinner[0] = -1;
  finalElement.classList.add("active");
  var rectangle = finalElement.getElementsByTagName("rect")[0];
  var text = finalElement.getElementsByTagName("text")[0];
  var image = finalElement.getElementsByTagName("image")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  var semifinalId = semifinalWinner[finalId];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  var imageUrl = "./img/TS/" + countryNames[group][country - 1] + ".png";
  rectangle.style.fill = initialRectColor;
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageUrl);
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;

  // Mobile Version
  var finalElement = getFinalElementMobile(finalId);
  finalElement.classList.add("active");
  var rectangle = finalElement.getElementsByTagName("path")[0];
  var text = finalElement.getElementsByTagName("text")[0];
  var circle = finalElement.getElementsByTagName("circle")[0];
  var semifinalId = semifinalWinner[finalId];
  var cuartosId = cuartosWinner[semifinalId];
  var group = octavos2grupoGroup(cuartosId, octavosWinner[cuartosId]);
  var place = octavos2grupoCountry(cuartosId, octavosWinner[cuartosId]);
  var country = leagueWinner[group][place];
  rectangle.style.fill = initialRectColor;
  text.style.fill = textColor;
  text.innerHTML = countryNames[group][country - 1];
  circle.style.fill = initialCircleColor;
}
function notFinished() {
  document.getElementById("champions").style.display = "none";
  document.getElementById("worldcup").style.opacity = 0.1;

  for (let i = 0; i < 16; i++) {
    var octavosGroupId = Math.floor(i / 2);
    var octavosCountryId = i - 2 * octavosGroupId;
    var octavosElement = getOctavosElement(octavosGroupId, octavosCountryId);
    var rectangle = octavosElement.getElementsByTagName("rect")[0];
    var circle = octavosElement.getElementsByTagName("circle")[0];
    var text = octavosElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    var grupId = octavos2grupoGroup(octavosGroupId, octavosCountryId);
    var countryId = octavos2grupoCountry(octavosGroupId, octavosCountryId);
    if (leagueWinner[grupId][countryId] == 0)
      rectangle.style.fill = initialRectColor;
    else {
      if (octavosWinner[octavosGroupId] == octavosCountryId)
        rectangle.style.fill = winnerRectColor;
      else rectangle.style.fill = loserRectColor;
    }
  }
  for (let i = 0; i < 8; i++) {
    var cuartosId = i;
    var cuartosElement = getCuartosElement(cuartosId);
    var rectangle = cuartosElement.getElementsByTagName("rect")[0];
    var circle = cuartosElement.getElementsByTagName("circle")[0];
    var text = cuartosElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    if (octavosWinner[cuartosId] == -1) rectangle.style.fill = initialRectColor;
    else {
      if (cuartosWinner[Math.floor(cuartosId / 2)] == cuartosId)
        rectangle.style.fill = winnerRectColor;
      else rectangle.style.fill = loserRectColor;
    }
  }
  for (let i = 0; i < 4; i++) {
    var semifinalId = i;
    var semifinalElement = getSemifinalElement(semifinalId);
    var rectangle = semifinalElement.getElementsByTagName("rect")[0];
    var circle = semifinalElement.getElementsByTagName("circle")[0];
    var text = semifinalElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    if (cuartosWinner[semifinalId] == -1)
      rectangle.style.fill = initialRectColor;
    else {
      if (semifinalWinner[Math.floor(semifinalId / 2)] == semifinalId)
        rectangle.style.fill = winnerRectColor;
      else rectangle.style.fill = loserRectColor;
    }
  }
  for (let i = 0; i < 2; i++) {
    var finalId = i;
    var finalElement = getFinalElement(finalId);
    var rectangle = finalElement.getElementsByTagName("rect")[0];
    var circle = finalElement.getElementsByTagName("circle")[0];
    var text = finalElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    rectangle.style.fill = initialRectColor;
  }

  // Mobile version
  document.getElementById("mobCopa").classList.remove("active");

  for (let i = 0; i < 16; i++) {
    var octavosGroupId = Math.floor(i / 2);
    var octavosCountryId = i - 2 * octavosGroupId;
    var octavosElement = getOctavosElementMobile(
      octavosGroupId,
      octavosCountryId
    );
    var rectangle = octavosElement.getElementsByTagName("polygon")[0];
    var circle = octavosElement.getElementsByTagName("circle")[0];
    var text = octavosElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    var grupId = octavos2grupoGroup(octavosGroupId, octavosCountryId);
    var countryId = octavos2grupoCountry(octavosGroupId, octavosCountryId);
    if (leagueWinner[grupId][countryId] == 0)
      rectangle.style.fill = initialRectColor;
    else {
      if (octavosWinner[octavosGroupId] == octavosCountryId)
        rectangle.style.fill = winnerRectColor;
      else rectangle.style.fill = loserRectColor;
    }
  }
  for (let i = 0; i < 8; i++) {
    var cuartosId = i;
    var cuartosElement = getCuartosElementMobile(cuartosId);
    var rectangle = cuartosElement.getElementsByTagName("polygon")[0];
    if (!rectangle) rectangle = cuartosElement.getElementsByTagName("rect")[0];
    var circle = cuartosElement.getElementsByTagName("circle")[0];
    var text = cuartosElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    if (octavosWinner[cuartosId] == -1) rectangle.style.fill = initialRectColor;
    else {
      if (cuartosWinner[Math.floor(cuartosId / 2)] == cuartosId)
        rectangle.style.fill = winnerRectColor;
      else rectangle.style.fill = loserRectColor;
    }
  }
  for (let i = 0; i < 4; i++) {
    var semifinalId = i;
    var semifinalElement = getSemifinalElementMobile(semifinalId);
    var rectangle = semifinalElement.getElementsByTagName("polygon")[0];
    var circle = semifinalElement.getElementsByTagName("circle")[0];
    var text = semifinalElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    if (cuartosWinner[semifinalId] == -1)
      rectangle.style.fill = initialRectColor;
    else {
      if (semifinalWinner[Math.floor(semifinalId / 2)] == semifinalId)
        rectangle.style.fill = winnerRectColor;
      else rectangle.style.fill = loserRectColor;
    }
  }
  for (let i = 0; i < 2; i++) {
    var finalId = i;
    var finalElement = getFinalElementMobile(finalId);
    var rectangle = finalElement.getElementsByTagName("path")[0];
    var circle = finalElement.getElementsByTagName("circle")[0];
    var text = finalElement.getElementsByTagName("text")[0];
    text.style.fill = textColor;
    rectangle.style.fill = initialRectColor;
  }
}

function getGtagId(grupoId, countryId) {
  var gTagId = "_";
  var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
  gTagId += countryId + 1;
  gTagId += Alphabet[grupoId];
  return gTagId;
}
function getMobileGtagId(grupoId, countryId) {
  var gTagId = "mob_";
  var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
  gTagId += countryId + 1;
  gTagId += Alphabet[grupoId];
  return gTagId;
}
function loserGroup(winnerGroup) {
  return 1 - winnerGroup + 4 * Math.floor(winnerGroup / 2);
}
function loserCountry(winnerCountry) {
  return 1 - winnerCountry;
}
function grupo2octavosGroup(winnerGroup, winnerCountry) {
  return (
    Math.floor(winnerGroup / 2) +
    (winnerGroup +
      winnerCountry -
      Math.floor((winnerGroup + winnerCountry) / 2) * 2) *
      4
  );
}
function grupo2octavosCountry(winnerGroup, winnerCountry) {
  return winnerCountry;
}
function octavos2grupoGroup(octavosGroup, octavosCountry) {
  if (octavosGroup < 4) return octavosGroup * 2 + octavosCountry;
  return (octavosGroup - 4) * 2 + (1 - octavosCountry);
}
function octavos2grupoCountry(octavosGroup, octavosCountry) {
  return octavosCountry;
}
function getCuartosElement(cuartosId) {
  var cuartosIdString = "cuartos" + (1 + cuartosId);
  var cuartosElement = document.getElementById(cuartosIdString);
  return cuartosElement;
}
function getSemifinalElement(semifinalId) {
  var semifinalIdString = "semis" + (1 + semifinalId);
  var semifinalElement = document.getElementById(semifinalIdString);
  return semifinalElement;
}
function getFinalElement(finalId) {
  var finalIdString = "final" + (1 + finalId);
  var finalElement = document.getElementById(finalIdString);
  return finalElement;
}

// Mobile version

function getCuartosElementMobile(cuartosId) {
  var cuartosIdString = "mobCuartos" + (1 + cuartosId);
  var cuartosElement = document.getElementById(cuartosIdString);
  return cuartosElement;
}
function getSemifinalElementMobile(semifinalId) {
  var semifinalIdString = "mobSemis" + (1 + semifinalId);
  var semifinalElement = document.getElementById(semifinalIdString);
  return semifinalElement;
}
function getFinalElementMobile(finalId) {
  var finalIdString = "mobFinal" + (1 + finalId);
  var finalElement = document.getElementById(finalIdString);
  return finalElement;
}
