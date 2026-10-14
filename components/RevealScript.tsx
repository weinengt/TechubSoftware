// Scroll-in animations for every page. This tiny script runs before the page is drawn: it adds .js-reveal to <html>
// (only when the browser can tell what is on screen and the visitor hasn't asked for less motion), then waits for
// each block marked data-reveal to scroll into view and gives it data-in, which starts its animation in
// app/globals.css. Blocks that come into view together get a growing delay (--rd), so they come in one after
// another, from the top down and left to right. A number marked data-count counts up to its value as its block comes in. When the animation is over
// the marks are removed, so the block is plain again. Without this script nothing is hidden.
const script = `(function () {
  var d = document, html = d.documentElement;
  if (!window.IntersectionObserver || !window.MutationObserver || !window.WeakSet || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  html.classList.add("js-reveal");
  try {
    var seen = new WeakSet(), done = [];
    var io = new IntersectionObserver(function (entries) {
      var list = [];
      for (var i = 0; i < entries.length; i++) if (entries[i].isIntersecting) list.push(entries[i]);
      list.sort(function (a, b) {
        var ra = a.boundingClientRect, rb = b.boundingClientRect;
        return Math.round(ra.top / 24) - Math.round(rb.top / 24) || ra.left - rb.left;
      });
      // Top to bottom, and left to right along a row: the lower and further right, the later (at most 0.5 s).
      var first = list.length ? list[0].boundingClientRect.top : 0, row = null, n = 0;
      for (var j = 0; j < list.length; j++) {
        var r = list[j].boundingClientRect, bucket = Math.round(r.top / 24);
        n = bucket === row ? n + 1 : 0;
        row = bucket;
        show(list[j].target, Math.min(Math.round(((r.top - first) / innerHeight) * 300) + n * 80, 500));
      }
      if (list.length) requestAnimationFrame(tidy);
    }, { rootMargin: "0px 0px -6% 0px" });

    function show(el, delay) {
      io.unobserve(el);
      el.style.setProperty("--rd", delay + "ms");
      el.setAttribute("data-in", "");
      var nums = el.querySelectorAll("[data-count]");
      for (var i = 0; i < nums.length; i++) count(nums[i], delay + 300);
      done.push([el, delay]);
    }

    // Once a block's own animations (named rv-...) are over, remove its marks.
    function tidy() {
      var list = done;
      done = [];
      list.forEach(function (item) {
        var el = item[0];
        var end = function () {
          el.removeAttribute("data-reveal");
          el.removeAttribute("data-in");
          el.style.removeProperty("--rd");
        };
        if (!el.getAnimations) return setTimeout(end, item[1] + 2500);
        var all = el.getAnimations({ subtree: true }), mine = [];
        for (var i = 0; i < all.length; i++) if (/^rv-/.test(all[i].animationName || "")) mine.push(all[i].finished);
        Promise.all(mine).then(end, end);
      });
    }

    // Counts from 0 up to the number, in step with the ring around it (1.8 s, slowing down at the end).
    function count(el, delay) {
      var target = el.getAttribute("data-count"), to = parseFloat(target), dp = (target.split(".")[1] || "").length;
      var node = el.firstChild;
      if (!node || node.nodeType !== 3 || isNaN(to)) return;
      var start = performance.now() + delay;
      node.nodeValue = (0).toFixed(dp);
      requestAnimationFrame(function step(now) {
        var p = Math.min(Math.max((now - start) / 1800, 0), 1);
        node.nodeValue = (to * (1 - Math.pow(1 - p, 3))).toFixed(dp);
        if (p < 1) requestAnimationFrame(step);
        else node.nodeValue = target;
      });
    }

    function watch(node) {
      if (node.nodeType !== 1) return;
      var list = node.matches("[data-reveal]") ? [node] : [];
      list.push.apply(list, node.querySelectorAll("[data-reveal]"));
      for (var i = 0; i < list.length; i++) {
        if (!seen.has(list[i])) {
          seen.add(list[i]);
          io.observe(list[i]);
        }
      }
    }
    function forget(node) {
      if (node.nodeType !== 1) return;
      if (node.matches("[data-reveal]")) io.unobserve(node);
      var list = node.querySelectorAll("[data-reveal]");
      for (var i = 0; i < list.length; i++) io.unobserve(list[i]);
    }

    // Watch blocks as the page is read in, and the blocks of each new page opened from a link.
    new MutationObserver(function (records) {
      for (var r = 0; r < records.length; r++) {
        var added = records[r].addedNodes, removed = records[r].removedNodes;
        for (var a = 0; a < added.length; a++) watch(added[a]);
        for (var b = 0; b < removed.length; b++) forget(removed[b]);
      }
    }).observe(html, { childList: true, subtree: true });
    d.addEventListener("DOMContentLoaded", function () { watch(d.body); });
  } catch (e) {
    html.classList.remove("js-reveal");
  }
})();`;

export default function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
