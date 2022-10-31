var current_position = 0;
function leftArrowButtonClicked() {
  console.log('leftArrowButtonClicked BEGINE');
    console.log('current_position: ', current_position);
  if (current_position < 0){
    current_position += 100;
    const flickity_slider = document.getElementsByClassName('flickity-slider');
    console.log('flickity_slider: ', flickity_slider);
    flickity_slider[0].style.marginLeft = current_position + 'px';
  }
  console.log('current_position: ', current_position);
  console.log('leftArrowButtonClicked END');
}
function rightArrowButtonClicked() {
  console.log('rightArrowButtonClicked BEGINE');
  console.log('current_position: ', current_position);
  if (current_position > -1000){
    current_position -= 100;
    const flickity_slider = document.getElementsByClassName('flickity-slider');
    console.log('flickity_slider: ', flickity_slider);
    flickity_slider[0].style.marginLeft = current_position + 'px';
  }
  console.log('current_position: ', current_position);
  console.log('rightArrowButtonClicked END');
}