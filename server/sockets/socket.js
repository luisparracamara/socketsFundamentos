const {io} = require("../server");

//mensajes en consola
io.on("connection", (client) => {
    console.log("usuario conectado");

    client.emit("enviarMensaje", {
        usuario: "admin",
        mensaje: "bienvenido a mi socket"
    });

    client.on("disconnect", () => {
        console.log("usuario desconectado");

    });

    // escuchar el cliente
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);

        //enviar mensaje a todo mundo
        client.broadcast.emit("enviarMensaje",data);

    //     if (data.usuario) {
    //         callback({
    //             resp: "todo salió bien"
    //         })
    //     } else {
    //         callback({
    //             resp: "todo salió mal!!!!!"
    //         })
    //     }

     })



});