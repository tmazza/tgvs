/**
 * Override the original w3IncludeHTML() to pass a callback.
 *
 * Origin:
 * stackoverflow.com/questions/38211961/javascript-not-working-without-alert
 */
function w3IncludeHTML(callback) {
    var z, i, file, xhttp;

    z = document.querySelector('[w3-include-html]');

    if (!z) {
        if (callback) { callback(); }
        return;
    }

    file = z.getAttribute('w3-include-html');
    z.removeAttribute('w3-include-html');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                z.innerHTML = xhttp.responseText;
            }
            w3IncludeHTML(callback);
        }
    }

    xhttp.open('GET', file, true);
    xhttp.send();
}
