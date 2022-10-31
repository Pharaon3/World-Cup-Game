var current_position = 0;
function leftArrowButtonClicked() {
  if (current_position < 0){
    current_position += 100;
    const flickity_slider = document.getElementsByClassName('flickity-slider');
    flickity_slider[0].style.marginLeft = current_position + 'px';
  }
}
function rightArrowButtonClicked() {
  if (current_position > -1000){
    current_position -= 100;
    const flickity_slider = document.getElementsByClassName('flickity-slider');
    flickity_slider[0].style.marginLeft = current_position + 'px';
  }
}