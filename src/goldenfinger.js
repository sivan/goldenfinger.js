'use strict';

function GoldenFinger() {
  var len = 0;
  var gfTmpl = function defaultTmpl(knuckle) {
    var str = '░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n' +
    '░░░░░░░░░░░░░░░░░░░░░░░░░░████░░░\n' +
    '░░░░░░░░░░░░░░░░░░░░░░░░░█▀──▀█░░\n';
    var i = 0;
    for (;i < knuckle; i += 1) str += '░░░░░░░░░░░░░░░░░░░░░░░░░█────█░░\n';

    str += '░░░░░░░░░░░░░░░░░░░░░░░░░█────█░░\n' +
      '░░░░░░░░░░░░░░░░░░░░░░░░░█────█░░\n' +
      '░░░░░░░░░░░░░░░░░░░░░░░░░█────█░░\n' +
      '░░░░░░░░░░░░░░░░░░████░░███████░░\n' +
      '░░░░░░░░░░░░░░░░░██──████▀────█░░\n' +
      '░░░░░░░░░░░░░░░░██────██──────█░░\n' +
      '░░░░░░░░░░░░░░░██────██───────█░░\n' +
      '░░░████████░░░██────██────────█░░\n' +
      '░░█████████████─────██──▄█▄───█░░\n' +
      '░░██████████────────██▄████───█░░\n' +
      '░░█████████──────────▀▀███▀───█░░\n' +
      '░░█████████───────────────────█░░\n' +
      '░░█████████───────────────────█░░\n' +
      '░░█████████───────────────────█░░\n' +
      '░░█████████───────────────────█░░\n' +
      '░░█████████───────────────────█░░\n' +
      '░░█████████──────────────────██░░\n' +
      '░░██████████───────────────███░░░\n' +
      '░░██████████████████████████░░░░░\n' +
      '░░░████████░░░░░░░░░░░░░░░░░░░░░░\n' +
      '░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░';
    return str;
  };

  function renderStr(opt) {
    if (typeof opt !== 'undefined' && typeof opt.tmpl === 'function') gfTmpl = opt.tmpl;
    return gfTmpl(len, opt);
  }

  function infiniteFinger() {
    len += 1;
    return infiniteFinger;
  }
  infiniteFinger.text = function renderText(opt) {
    return renderStr(opt);
  };
  infiniteFinger.html = function renderHTML(opt) {
    return '<pre class="goldenfinger">' + renderStr(opt) + '</pre>';
  };
  infiniteFinger.toString = infiniteFinger.text;
  infiniteFinger.凸 = infiniteFinger.text;
  return infiniteFinger;
}

window.GoldenFinger = GoldenFinger;
