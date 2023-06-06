import pumpController from '../app/controllers/PumpController';
import client from '../config/mqtt'

export function bridge(io) {

    io.on("connection", (socket) => {

        socket.on("toggle", (data) => {
            pumpController.addPumpData(data)
        })


        socket.on("join_channel", (id) => {
            console.log("join_channel", id)
            socket.join(id)
        })

        client.on('message', (topic, message) => {
            console.log(`received message from ${topic}: ${message.toString()}`);
            const feed_key = topic.split('/')[2]

            switch (feed_key) {
                case 'dadn.sepump':
                    socket.to(1).emit("render", message.toString() === "true")
                    break
            }
        });

    })
}
