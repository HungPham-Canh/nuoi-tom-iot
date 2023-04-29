import PumpData from "../models/TempData";

//use for adding data from adafruit
class PumpController {
    toggle(req, res) {
        const data = req.body;
        console.log(data)
        const newData = new PumpData(data)
        res.send("success full");
        // newData.save()
        //     .then(() => { console.log('Added successfully') })
        //     .catch((err) => console.log("Added failed, error: " + err))
    }
}

export default new PumpController