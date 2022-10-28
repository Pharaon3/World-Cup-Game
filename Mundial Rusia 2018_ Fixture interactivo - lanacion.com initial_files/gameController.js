var stateAF = 'NON';
var stateAS = 'NON';
var stateBF = 'NON';
var stateBS = 'NON';
var stateCF = 'NON';
var stateCS = 'NON';
var stateDF = 'NON';
var stateDS = 'NON';
var stateEF = 'NON';
var stateES = 'NON';
var stateFF = 'NON';
var stateFS = 'NON';
var stateGF = 'NON';
var stateGS = 'NON';
var stateHF = 'NON';
var stateHS = 'NON';

function selectFirstInGroup(country) {
  console.log('selectFirstInGroup: ', country);
  // Group A BEGINE
  console.log('stateAF: ', stateAF);
  console.log('stateAS: ', stateAS);  
  if(country == 'Qatar'){
    if(stateAF == 'Qatar') return;
    stateAF = 'Qatar';
    if(stateAS == 'Qatar') {
      clearSelection('Asecondpos');
      stateAS = 'NON';
    }
  }
  if(country == 'Ecuador'){
    if(stateAF == 'Ecuador') return;
    stateAF = 'Ecuador';
    if(stateAS == 'Ecuador') {
      clearSelection('Asecondpos');
      stateAS = 'NON';
    }
  }
  if(country == 'Senegal'){
    if(stateAF == 'Senegal') return;
    stateAF = 'Senegal';
    if(stateAS == 'Senegal') {
      clearSelection('Asecondpos');
      stateAS = 'NON';
    }
  }
  if(country == 'Holanda'){
    if(stateAF == 'Holanda') return;
    stateAF = 'Holanda';
    if(stateAS == 'Holanda') {
      clearSelection('Asecondpos');
      stateAS = 'NON';
    }
  }
  console.log('stateAF: ', stateAF);
  console.log('stateAS: ', stateAS); 
  // Group A END 
  // Group B BEGINE
  console.log('stateBF: ', stateBF);
  console.log('stateBS: ', stateBS);  
  if(country == 'Qatar'){
    if(stateBF == 'Qatar') return;
    stateBF = 'Qatar';
    if(stateBS == 'Qatar') {
      clearSelection('Asecondpos');
      stateBS = 'NON';
    }
  }
  if(country == 'Ecuador'){
    if(stateBF == 'Ecuador') return;
    stateBF = 'Ecuador';
    if(stateBS == 'Ecuador') {
      clearSelection('Asecondpos');
      stateBS = 'NON';
    }
  }
  if(country == 'Senegal'){
    if(stateBF == 'Senegal') return;
    stateBF = 'Senegal';
    if(stateBS == 'Senegal') {
      clearSelection('Asecondpos');
      stateBS = 'NON';
    }
  }
  if(country == 'Holanda'){
    if(stateBF == 'Holanda') return;
    stateBF = 'Holanda';
    if(stateBS == 'Holanda') {
      clearSelection('Asecondpos');
      stateBS = 'NON';
    }
  }
  console.log('stateBF: ', stateBF);
  console.log('stateBS: ', stateBS); 
  // Group B END 
}

function selectSecondInGroup(country) {
  console.log('selectSecondInGroup: ', country);
  console.log('stateAF: ', stateAF);
  console.log('stateAS: ', stateAS);  
  if(country == 'Qatar'){
    if(stateAS == 'Qatar') return;
    stateAS = 'Qatar';
    if(stateAF == 'Qatar') {
      clearSelection('Afirstpos');
      stateAF = 'NON';
    }
  }
  if(country == 'Ecuador'){
    if(stateAS == 'Ecuador') return;
    stateAS = 'Ecuador';
    if(stateAF == 'Ecuador') {
      clearSelection('Afirstpos');
      stateAF = 'NON';
    }
  }
  if(country == 'Senegal'){
    if(stateAS == 'Senegal') return;
    stateAS = 'Senegal';
    if(stateAF == 'Senegal') {
      clearSelection('Afirstpos');
      stateAF = 'NON';
    }
  }
  if(country == 'Holanda'){
    if(stateAS == 'Holanda') return;
    stateAS = 'Holanda';
    if(stateAF == 'Holanda') {
      clearSelection('Afirstpos');
      stateAF = 'NON';
    }
  }
  console.log('stateAF: ', stateAF);
  console.log('stateAS: ', stateAS);  
}

function clearSelection(group) {
  console.log('clearSelection: ', group);
  console.log('stateAF: ', stateAF);
  console.log('stateAS: ', stateAS);  
  const clearGroup = document.getElementsByName(group);
  console.log('clearGroup: ', clearGroup);
  for(var i=0;i<clearGroup.length;i++)
    clearGroup[i].checked = false;
  console.log('stateAF: ', stateAF);
  console.log('stateAS: ', stateAS);  
}