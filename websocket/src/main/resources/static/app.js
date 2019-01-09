let stompClient = null;

//페이지 로딩완료 시점
document.addEventListener("DOMContentLoaded", function(){
	//WebSocket.init();
	
	console.log("load");
});

function connect() {
    let socket = new SockJS('/gs-guide-websocket');
    
    stompClient = Stomp.over(socket); // STOMP 초기화 후 sockJS 정보 설정
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/chat', function (data) { // 구독자 설정
            if (data.body.length > 0) {
                appendMessageToChatRoom(data.body);
            }
        });

    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

function appendMessageToChatRoom(message) {

    let chat_room = document.getElementById("chat_room");
    let chat_value = chat_room.value;
    console.log(chat_value);
    chat_value += "\n";
    chat_value += message;
    chat_room.value = chat_value;

}
