/* Two page-local effects. The engine handles the rest (fade-ins, counters,
   the sideways rail, the contact wipe).
   1. The training-room photo grows from a rounded card to full bleed.
   2. The profile paragraph lights up word by word as you read down. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };

  var zoom = document.querySelector('.zoom');
  var frame = document.querySelector('.zoom__frame');

  var text = document.querySelector('[data-words]');
  var words = [];
  if (text) {
    var parts = text.textContent.trim().split(/\s+/);
    text.textContent = '';
    parts.forEach(function (w, i) {
      var s = document.createElement('span');
      s.className = 'w';
      s.textContent = w;
      text.appendChild(s);
      if (i < parts.length - 1) text.appendChild(document.createTextNode(' '));
      words.push(s);
    });
  }

  if (reduce) { words.forEach(function (w) { w.classList.add('on'); }); return; }

  var lit = -1;
  function frameTick() {
    var vh = innerHeight;
    if (zoom) {
      var r = zoom.getBoundingClientRect();
      var p = clamp(-r.top / Math.max(r.height - vh, 1));
      var e = 1 - Math.pow(1 - p, 3);
      frame.style.setProperty('--zs', (0.82 + 0.18 * e).toFixed(4));
      frame.style.setProperty('--zr', (28 * (1 - e)).toFixed(1) + 'px');
      frame.style.setProperty('--zi', (1.12 - 0.12 * e).toFixed(4));
      frame.style.setProperty('--zt', clamp((p - 0.55) / 0.3).toFixed(3));
    }
    if (words.length) {
      var t = text.getBoundingClientRect();
      var q = clamp((vh * 0.82 - t.top) / (t.height + vh * 0.3));
      var n = Math.round(q * words.length);
      if (n !== lit) {
        for (var i = 0; i < words.length; i++) words[i].classList.toggle('on', i < n);
        lit = n;
      }
    }
  }

  var queued = false;
  function request() { if (!queued) { queued = true; requestAnimationFrame(function () { queued = false; frameTick(); }); } }
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  frameTick();
})();
