import { ReactComponent as LightIcon } from "./icon/light-bulb.svg"
import { ReactComponent as PumpIcon } from "./icon/pump.svg"
import { ReactComponent as FanIcon } from "./icon/fan.svg"
import { ReactComponent as TempIcon } from "./icon/temp.svg"

const devices = [
    {
        id: 0,
        name: "Đèn",
        icon: <LightIcon />
    },
    {
        id: 1,
        name: "Máy bơm",
        icon: <PumpIcon />
    },
    {
        id: 2,
        name: "Nhiệt độ",
        icon: <TempIcon />
    },
    {
        id: 3,
        name: "Quạt",
        icon: <FanIcon />
    },
];

export default devices;