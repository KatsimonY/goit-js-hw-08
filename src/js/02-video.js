import Player from '@vimeo/player';
import tools from './storage';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const curTime = tools.load('videoplayer-current-time');
const throttled = throttle(getTimePoint, 1000);
const player = new Player(iframe);

player.on('timeupdate', throttled);
player
  .setCurrentTime(curTime)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

function getTimePoint(event) {
  tools.save('videoplayer-current-time', event.seconds);
}