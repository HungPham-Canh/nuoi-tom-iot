import sys
from Adafruit_IO import MQTTClient
import time
import random
from simple_ai import *
from uart import *
import requests
import json

AIO_FEED_IDs = []
AIO_USERNAME = "CurtisDo"
AIO_KEY = "aio_njWD31QmgZKQYNasDifPvO8ApTQG"

def connected(client):
    print("Ket noi thanh cong ...")
    for topic in AIO_FEED_IDs:
        client.subscribe(topic)

def subscribe(client , userdata , mid , granted_qos):
    print("Subscribe thanh cong ...")

def disconnected(client):
    print("Ngat ket noi ...")
    sys.exit (1)

def message(client , feed_id , payload):
    print("Nhan du lieu: " + payload + " , feed id:" + feed_id)
    if feed_id == "dadn.sepump":
        if payload == "0":
            writeData("1")
        else:
            writeData("2")
    if feed_id == "dadn.sefan":
        if payload == "0":
            writeData("3")
        else:
            writeData("4")

# Set up the API endpoint URL
url = "https://io.adafruit.com/api/v2/{0}/feeds".format(AIO_USERNAME)

# Set up the headers with your Adafruit IO API key
headers = {
    "Content-Type": "application/json",
    "X-AIO-Key": AIO_KEY
}

# Make a GET request to the API endpoint to retrieve a list of all feeds
response = requests.get(url, headers=headers, verify=False)

# Check if the API request was successful
if response.status_code == 200:
    # Parse the response JSON data
    feeds = json.loads(response.text)

    # Loop through the feeds and save their keys into an array
    for feed in feeds:
        AIO_FEED_IDs.append(feed["key"])
        # print(feed["key"])
else:
    print("Failed to retrieve feeds. Error code: {0}".format(response.status_code))

client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

while True:
    readSerial(client)
    time.sleep(1)
    pass