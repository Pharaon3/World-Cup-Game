var leagueWinner = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],];

function selectWinner(group, place, country) {
  console.log('selectWinner BEGINE');
  console.log('groupNumber', group);
  console.log('countryNumber', country);
  console.log('place', place);

  if(leagueWinner[group, place] == country) return;
  leagueWinner[group, place] = country;
  selectInitialKnockout(group, place, country);
  if(leagueWinner[group, 1 - place] == country) {
    clearSelection(group, 1 - place);
    leagueWinner[group, 1 - place] = 0;
  }

  console.log('leagueWinner[', group, ',', place,']: ', leagueWinner[group, place]);
  console.log('leagueWinner[', group, ',', 1 - place,']: ', leagueWinner[group, 1 - place]);
  console.log('leagueWinner: ', leagueWinner);
  console.log('selectWinner END');
}

function clearSelection(group, place) {
  console.log('clearSelection BEGINE');
  // Asecondpos
  var Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  var groupName = Alphabet[group];
  var PlaceArray = ['first', 'second'];
  var placeName = PlaceArray[place];

  var className = groupName + placeName + 'pos';
  const clearGroup = document.getElementsByName(className);
  console.log('clearGroup: ', clearGroup);
  for(var i=0;i<clearGroup.length;i++)
    clearGroup[i].checked = false; 
  console.log('clearSelection END');
}

function selectInitialKnockout(group, place, country) {
  console.log('selectInitialKnockout BEGINE');
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
  console.log('className: ', className);
    var gTag = document.getElementById(className);
    gTag.class="etapa active";
    var rectangle = gTag.getElementsByTagName("rect")[0];
    var text = gTag.getElementsByTagName("text")[0];
    var image = gTag.getElementsByTagName("image")[0];
    text.innerHTML = countryNames[group][country - 1];
    var imageUrl = './World Cup Game_Files/TS/' + countryNames[group][country - 1] + '.png'
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
    text.style.color = "#000";
    // rectangle.style.fill = '#dfc5ce';
    console.log('rectangle', rectangle);
    console.log('image', image);
  console.log('selectInitialKnockout END');
}