
if(document.getElementById) {
    window.alert = function(txt, headerCustom) {
        createCustomAlert(txt,headerCustom);
    }
}

var createCustomAlert = function (txt, headerCustom) {

    d = document;
    var punyModalElement = d.getElementsByClassName("puny-modal")[0];
    if(punyModalElement.classList.contains("opened")) return;

    var alertBox = d.getElementsByClassName("puny-alertBox")[0];

    h1 = alertBox.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(headerCustom));

    msg = alertBox.appendChild(d.createElement("p"));
    msg.innerHTML = txt;

    punyModalElement.classList += " opened";

    var btn = d.getElementsByClassName("puny-closeBtn")[0];
    btn = alertBox.appendChild(d.createElement("a"));
    btn.className = "puny-closeBtn";
    btn.appendChild(d.createTextNode("OK"));
    btn.href = "#";
    btn.focus();

    btn.onclick = function() {
      punyModalElement.classList.remove("opened");
      alertBox.removeChild(h1);
      alertBox.removeChild(msg);
      alertBox.removeChild(btn);
    }
}
