var leagueWinner = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],];

function selectWinner(group, place, country) {
  if(leagueWinner[group][place] == country) return;
  leagueWinner[group][place] = country;
  selectInitialKnockout(group, place, country);
  if(leagueWinner[group][1 - place] == country) {
    clearSelection(group, 1 - place, country);
    leagueWinner[group][1 - place] = 0;
    clearInitialKnockout(group, 1 - place);
  }
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

function selectInitialKnockout(group, place, country) {
  var Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var countryNames = [
                    ['qtr', 'ecu', 'sen', 'hol'],
                    ['ing', 'irn', 'usa', 'gal'],
                    ['arg', 'ara', 'mex', 'pol'],
                    ['fra', 'aus', 'din', 'tun'],
                    ['esp', 'cri', 'ale', 'jpn'],
                    ['bel', 'can', 'mar', 'cro'],
                    ['bra', 'ser', 'sui', 'cam'],
                    ['por', 'ghn', 'uru', 'cor']];
  var groupName = Alphabet[group];
  var className = "_" + (place + 1) + groupName;
  var gTag = document.getElementById(className);
  gTag.classList.add('active');
  var rectangle = gTag.getElementsByTagName("rect")[0];
  var text = gTag.getElementsByTagName("text")[0];
  var image = gTag.getElementsByTagName("image")[0];
  text.innerHTML = countryNames[group][country - 1];
  var imageUrl = './World Cup Game_Files/TS/' + countryNames[group][country - 1] + '.png';
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
  text.style.color = "#000";
}
function clearInitialKnockout(group, place) {
  var Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var groupName = Alphabet[group];
  var className = "_" + (place + 1) + groupName;
  var gTag = document.getElementById(className);
  gTag.classList.remove('active');
  var rectangle = gTag.getElementsByTagName("rect")[0];
  var text = gTag.getElementsByTagName("text")[0];
  var image = gTag.getElementsByTagName("image")[0];
  text.innerHTML = "";
  var imageUrl = '';
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
  text.style.color = "#000";
}