import { ReactComponent as LightIcon } from "./light-bulb.svg"
import { ReactComponent as PumpIcon } from "./pump.svg"
import { ReactComponent as FanIcon } from "./fan.svg"
import { ReactComponent as TempIcon } from "./temp.svg"

const devices = [
    // {
    //     id: 0,
    //     name: "Đèn",
    //     icon: <LightIcon />
    // },
    {
        id: 1,
        type: "pump",
        name: "Máy bơm",
        icon: <PumpIcon />
    },
    // {
    //     id: 2,
    //     name: "Nhiệt độ",
    //     icon: <TempIcon />
    // },
    {
        id: 3,
        type: "fan",
        name: "Quạt",
        icon: <FanIcon />
    },
];

export default devices;