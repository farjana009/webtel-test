//test data strat from here ..............................
var potaconFreeCallUsers = [];

$.get('https://webtel.dev.jacos.jp:3000/get_all_users/01', {}, function(data) {


    potaconFreeCallUsers = data;
    goToNextPage();


});






//test data end here ..............................

function goToLast() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || safari.pushNotification);
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    if (isChrome || isFirefox) {
        window.history.back();
    } else {
        javascript: window.open('', '_self').close();
    }
}


function goToNext() {
    //die();
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
        var url="http://localhost/html/rtc/index.html";
    else if (location.hostname === "192.168.0.104")
        var url="http://192.168.0.104/html/rtc/index.html";
    else
        var url="https://webtel.dev.jacos.jp/rtc/index.html";

    var number = document.getElementById("user_number_input").value;
    if (number === "") {
        alert("give you mobile number");
    } else {

        var result = potaconFreeCallUsers.filter(function(obj) { return obj.mobile_number == number; });
        if (result.length > 0) {
            localStorage.setItem("jacosUserId", result[0].mobile_number);


            window.open(url+"?user_mobile_number=" + result[0].mobile_number, "_self")

        } else {
            alert("???????????????????????????????????????");
            //this array is empty
        }

    }
}



function goToNextPage() {
    var isLoogedIn = localStorage.getItem("jacosUserId");
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
        var url="http://localhost/html/rtc/index.html";
    else if (location.hostname === "192.168.0.104")
        var url="http://192.168.0.104/html/rtc/index.html";
    else
        var url="https://webtel.dev.jacos.jp/rtc/index.html";
    var result = potaconFreeCallUsers.filter(function(obj) { return obj.mobile_number == isLoogedIn; });
    if (result.length > 0) {
        localStorage.setItem("jacosUserId", result[0].mobile_number);


        window.open(url+"?user_mobile_number=" + result[0].mobile_number, "_self");

    }
}


/*navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});
*/