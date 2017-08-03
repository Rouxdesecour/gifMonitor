var stompClient = null;
var myTimeoutId;

function connect() {
    //WebSocketConfig.java
    var socket = new SockJS('/gifMonitor-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        //Sender.java
        stompClient.subscribe('/topic/receiverGif', function (gifCode) {
            var urlGif = JSON.parse(gifCode.body).code;
            showGif(urlGif);
        });
    });
}

function showGif(gifCode) {
    clearTimeout(myTimeoutId);
    var size = "100%";
    $("#gif-mp4").off("click");
    $("#main-content").html("<video id=\"gif-mp4\" poster=\"\" style=\"margin:0;padding:0\" width=\""+size+"\" height=\""+size+"\" autoplay=\"\" loop=\"\"><source src=\"https://media.giphy.com/media/"+gifCode+"/giphy.mp4\" type=\"video/mp4\">Your browser does not support the mp4 video codec.</video>");
    addFullScreenTrigger();
    myTimeoutId=setTimeout(function () {
        $("#gif-mp4").off("click");
        $("#main-content").html("");
    }, 7000);
}


function addFullScreenTrigger() {
    $("#gif-mp4").click(function(){
        screenfull.toggle();
});
}

$(document).ready(function () {
    connect();
    showGif("3og0IDEbp5uLAEsQ9y");
});