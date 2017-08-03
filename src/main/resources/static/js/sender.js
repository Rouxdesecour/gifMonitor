var stompClient = null;

function setConnected(connected) {
    $("#send").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    //WebSocketConfig.java
    var socket = new SockJS('/gifMonitor-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        //Sender.java
        stompClient.subscribe('/topic/receiverGif', function (jsonUrlGif) {
            var urlGif = JSON.parse(jsonUrlGif.body).url;
            showGif(urlGif);
        });
    });
}

function sendurlGif() {
    //Sender.java
    stompClient.send("/app/sendgif", {}, JSON.stringify({'url': $("#urlGif").val()}));
}

function showGif(urlGif) {
    $("#greetings").append("<tr><td><video id=\"gif-mp4\" poster=\"https://media.giphy.com/media/3og0IDEbp5uLAEsQ9y/200_s.gif\" style=\"margin:0;padding:0\" width=\"480\" height=\"270\" autoplay=\"\" loop=\"\"><source src=\"https://media.giphy.com/media/3og0IDEbp5uLAEsQ9y/giphy.mp4\" type=\"video/mp4\">     Your browser does not support the mp4 video codec.    </video> </td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#send" ).click(function() { sendurlGif(); });
    connect();
});