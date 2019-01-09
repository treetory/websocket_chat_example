window.onload = function(e) {

    connect();
    /*

        let send_button = document.getElementById("send");
        send_button.onclick = function() {

            let message = document.getElementById("message_input").innerHTML;
            console.log(message);

            console.log("BBBBBBB");

            stompClient.send("/app/sendMessage", {}, JSON.stringify({message : message}));
        }

        let reset_button = document.getElementById("reset");
        reset_button.onclick = function() {
            document.getElementById("message_input").innerHTML = "";
        }
    */

};

function sendMessage() {
    let message = document.getElementById("message_input").value;
    stompClient.send("/app/sendMessage", {}, JSON.stringify({ message : message }));
}

function resetMessageInput() {
    document.getElementById("message_input").innerHTML = "";
}