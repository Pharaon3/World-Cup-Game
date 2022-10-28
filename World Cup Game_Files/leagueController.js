var leagueWinner = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],];

function selectWinner(group, place, country) {
  console.log('selectWinner BEGINE');
  console.log('groupNumber', group);
  console.log('countryNumber', country);
  console.log('place', place);

  if(leagueWinner[group, place] == country) return;
  leagueWinner[group, place] = country;
  if(leagueWinner[group, 1 - place] == country) {
    clearSelection(group, 1 - place);
    leagueWinner[group, 1 - place] = 0;
  }

  console.log('leagueWinner[', group, ',', place,']: ', leagueWinner[group, place]);
  console.log('leagueWinner[', group, ',', 1 - place,']: ', leagueWinner[group, 1 - place]);
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
}