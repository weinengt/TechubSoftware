// A refresh opens the page from the top, the same as opening its address (browsers normally put a refreshed page
// back where the visitor was). This tiny script runs in <head>, before anything is laid out, and only on a refresh:
// - history.scrollRestoration = "manual" keeps Safari at the top.
// - Chrome puts the page back anyway (other browsers may too), a step at a time while it loads. Each time, the page
//   goes back to the top before it is drawn: on the scroll event, and when the page grows (ResizeObserver runs after
//   layout and before paint). This stops when the visitor scrolls, or a second after the page has loaded.
// - Back and Forward keep their usual behaviour: "auto" comes back a second after the page has loaded, or sooner if
//   a link opens another page or the visitor leaves.
// An address with a #part is left to the browser.
const script = `(function () {
  try {
    var w = window, h = history, p = performance;
    var nav = p.getEntriesByType && p.getEntriesByType("navigation")[0];
    if (!(nav ? nav.type === "reload" : p.navigation && p.navigation.type === 1) || location.hash) return;
    var can = "scrollRestoration" in h;
    var auto = function () {
      if (can) h.scrollRestoration = "auto";
    };
    if (can) h.scrollRestoration = "manual";
    var push = h.pushState;
    h.pushState = function () {
      auto();
      return push.apply(h, arguments);
    };
    w.addEventListener("pagehide", auto);

    var top = function () {
      if (w.scrollY) w.scrollTo(0, 0);
    };
    var grow = w.ResizeObserver && new ResizeObserver(top);
    var inputs = ["wheel", "touchstart", "keydown", "mousedown"], opt = { capture: true, passive: true };
    var stop = function () {
      w.removeEventListener("scroll", top);
      if (grow) grow.disconnect();
      inputs.forEach(function (type) { w.removeEventListener(type, stop, opt); });
    };
    w.addEventListener("scroll", top);
    if (grow) grow.observe(document.documentElement);
    inputs.forEach(function (type) { w.addEventListener(type, stop, opt); });
    w.addEventListener("load", function () {
      top();
      setTimeout(function () {
        stop();
        auto();
      }, 1000);
    });
  } catch (e) {}
})();`;

export default function RefreshScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
