function debounce (callback, time) {
    var timer;
    return function () {
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback(args[0])
        }, time)
    }
}
var delay = document.querySelector('input');
  delay.addEventListener('input', debounce(function (event) {
        console.log(event.target.value)
  }, 250), false);
