var current_position = 0;
const flickity_slider = document.getElementsByClassName("flickity-slider");
function leftArrowButtonClicked() {
  var w = window.innerWidth;
  if(w > 640){
    if (current_position < 0) {
      current_position += 50;
      flickity_slider[0].style.marginLeft = current_position + "px";
    }
    else flickity_slider[0].style.marginLeft ="0px";
  }
  else {
    var tmp = current_position;
    var tmpUnit = 293;
    current_position = - tmpUnit * 6;
    if (tmp >= - tmpUnit * 7) current_position = - tmpUnit * 6;
    if (tmp >= - tmpUnit * 6) current_position = - tmpUnit * 5;
    if (tmp >= - tmpUnit * 5) current_position = - tmpUnit * 4;
    if (tmp >= - tmpUnit * 4) current_position = - tmpUnit * 3;
    if (tmp >= - tmpUnit * 3) current_position = - tmpUnit * 2;
    if (tmp >= - tmpUnit * 2) current_position = - tmpUnit * 1;
    if (tmp >= - tmpUnit * 1) current_position = - tmpUnit * 0;
    if (tmp >= 0) current_position = 0;
    flickity_slider[0].style.marginLeft = current_position + "px";
  }
}
function rightArrowButtonClicked() {
  var w = window.innerWidth;
  if(w > 640){
    var maxLeft = 1050;
    // 1340
    // 1060
    if (w < 1400) {
      maxLeft = 2244 - w * 0.85;
    }
    if (w < 1000) maxLeft += 35;
    if (w < 700) maxLeft += 35;
    if (w < 550) maxLeft += 15;
    if (current_position > -maxLeft) {
      current_position -= 50;
      flickity_slider[0].style.marginLeft = current_position + "px";
    } else {
      current_position - maxLeft;
      flickity_slider[0].style.marginLeft = current_position + "px";
    }
  }
  else {
    var tmp = current_position;
    var tmpUnit = 293;
    if (tmp > - tmpUnit * 7) current_position = - tmpUnit * 7;
    if (tmp > - tmpUnit * 6) current_position = - tmpUnit * 6;
    if (tmp > - tmpUnit * 5) current_position = - tmpUnit * 5;
    if (tmp > - tmpUnit * 4) current_position = - tmpUnit * 4;
    if (tmp > - tmpUnit * 3) current_position = - tmpUnit * 3;
    if (tmp > - tmpUnit * 2) current_position = - tmpUnit * 2;
    if (tmp > - tmpUnit * 1) current_position = - tmpUnit * 1;
    if (tmp > 0) current_position = 0;
    flickity_slider[0].style.marginLeft = current_position + "px";    
  }

}
window.addEventListener("resize", screenSizeChanged);
function screenSizeChanged() {
  var w = window.innerWidth;
  var maxLeft = 1050;
  // 1340
  // 1060
  if (w < 1400) {
    maxLeft = 2244 - w * 0.85;
  }
  if (w < 1000) maxLeft += 35;
  if (w < 700) maxLeft += 35;
  if (w < 550) maxLeft += 15;
  var str = flickity_slider[0].style.marginLeft;
  var current_position = str.slice(0, str.length - 2);
  if (current_position < -maxLeft) {
    flickity_slider[0].style.marginLeft = -maxLeft + "px";
  }
  document.getElementById("champions").style.top =
    ((580 - 475) / (1360 - 640)) * (w - 1360) + 580 + "px";
  document.getElementById("champions").style.fontSize =
    8 + ((16.81 - 8) / (1360 - 640)) * (w - 640) + "pt";
  // style.font-size =141.6 + 0.52 * w;

  if (w > 1360) {
    document.getElementById("champions").style.top = "580px";
    // document.getElementById("champions").setAttribute("font-size", "16.81pt");
    document.getElementById("champions").style.fontSize = "16.81pt";
  }
  document.getElementById("upcham").style.display = "block";
  if (w < 640) document.getElementById("upcham").style.display = "none";
}

