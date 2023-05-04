import serial.tools.list_ports

def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB-SERIAL CH340" or "USB2.0-Serial" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort
    # return "COM4"

if getPort() != "None":
    ser = serial.Serial(port=getPort(), baudrate=115200)
    print(ser)

def processData(client, data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)

    if splitData[0] == "O":
        client.publish("dadn.sedo", str(int(splitData[1])/10))
    elif splitData[0] == "T":
        client.publish("dadn.setemp", splitData[1])
    elif splitData[0] == "P":
        client.publish("dadn.sepump", splitData[1])
    elif splitData[0] == "F":
        client.publish("dadn.sefan", splitData[1])

mess = ""
def readSerial(client):
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(client, mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end+1:]

def writeData(data):
    ser.write(str(data).encode())