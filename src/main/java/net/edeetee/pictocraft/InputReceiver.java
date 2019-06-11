package net.edeetee.pictocraft;

import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.IMqttMessageListener;
import org.eclipse.paho.client.mqttv3.MqttAsyncClient;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;

class InputReciever {
    //For other brokers if hivemq fails:
    //https://github.com/mqtt/mqtt.github.io/wiki/public_brokers
    //https://diyprojects.io/8-online-mqtt-brokers-iot-connected-objects-cloud/

    /**
     * Sourced from http://www.mqtt-dashboard.com/
     */
    static final String BROKER = "broker.hivemq.com";
    static final String BaseTopic = "pictocraft/input";

    InputReciever() throws MqttException {
        MqttAsyncClient client = new MqttAsyncClient(BROKER, MqttClient.generateClientId());

        client.connect();
        client.subscribe(BaseTopic, 2, (String topic, MqttMessage message) -> {
            System.out.println(message.getPayload());
        });
    }
}