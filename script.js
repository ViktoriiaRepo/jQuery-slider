$(window).on('load', () => {
  'use strict';

  const imageCount = $('#slider ul li').length;
  const imageWidth = $('#slider ul li img').first().width();
  const totalWidth = imageCount * imageWidth + 'px';

  let leftPosition = 0;
  let counter = 0;

  $('#slider ul').css('width', totalWidth);

  $('#next').click(() => {
    counter++;

    if (counter === imageCount) {
      $('#slider ul').clone().appendTo('#slider');
      $('#slider ul')
        .last()
        .css('left', imageWidth + 'px');

      leftPosition = `-${totalWidth}`;

      $('#slider ul').last().animate({ left: 0 }, 700, 'easeOutCirc');
      $('#slider ul')
        .first()
        .animate({ left: leftPosition }, 700, 'easeOutCirc', () => {
          $('#slider ul').first().remove();
        });

      counter = 0;
    } else {
      leftPosition = `-${counter * imageWidth}px`;
      $('#slider ul').animate({ left: leftPosition }, 700, 'easeOutCirc');
    }
  });

  $('#previous').click(() => {
    counter--;

    if (counter < 0) {
      counter = imageCount - 1;

      $('#slider ul').clone().appendTo('#slider');
      $('#slider ul').last().css('left', `-${totalWidth}`);
      leftPosition = `-${counter * imageWidth}px`;

      $('#slider ul')
        .last()
        .animate({ left: leftPosition }, 700, 'easeOutCirc');

      $('#slider ul')
        .first()
        .animate({ left: imageWidth + 'px' }, 700, 'easeOutCirc', () => {
          $('#slider ul').first().remove();
        });
    }

    leftPosition = `-${counter * imageWidth}px`;
    $('#slider ul').animate({ left: leftPosition }, 700, 'easeOutCirc');
  });
});
