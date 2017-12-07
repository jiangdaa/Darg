function darg(id) {
    var el = document.getElementById(id)

    var disX = 0,
        disY = 0;

    el.onmousedown = function (ev) {
        disX = ev.clientX - el.offsetLeft;
        disY = ev.clientY - el.offsetTop;

        document.onmousemove = function (ev) {
            el.style.left = ev.clientX - disX + 'px';
            el.style.top = ev.clientY - disY + 'px';
        }

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    } 
}