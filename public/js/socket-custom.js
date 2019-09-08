var socket = io();

socket.on("connect", function () {
    console.log("conectado al socket");

})

// on para escuchar
socket.on("disconnect", function () {
    console.log("perdimos conexion con el servidor");

})

//emit para enviar info
socket.emit("enviarMensaje", {
    usuario: "luis",
    mensaje: "hola we"
}, function (resp) { //callback
    console.log('respuesta server: ', resp);
});

//escuchar info
socket.on("enviarMensaje", function (mensaje) {
    console.log("servidor:", mensaje);

});