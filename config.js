mqtt_broker = '192.168.2.115'
mqtt_broker_ws_port = '1885'
mqtt_broker_username = 'admin'
mqtt_broker_password = 'instar'
mqtt_lwt = 'webclient/lwt'
mqtt_lwt_msg = '{"val":"offline"}'
mqtt_prefix = 'cameras/'
mqtt_camera_id = '115/'
mqtt_qos = 1
mqtt_retain = false
mqtt_sub_topic = mqtt_prefix + '#'
mqtt_pub_topic = mqtt_prefix + mqtt_camera_id +'multimedia/privacy/region1/enable'
mqtt_pub_payload = '{"val":"1"}'


// Kamera Privatsphäre Masken

const buttonPrivacy1On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region1/enable/raw',
    payload : '1',
};

const buttonPrivacy1Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region1/enable/raw',
    payload : '0',
};

const buttonPrivacy2On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region2/enable/raw',
    payload : '1',
};

const buttonPrivacy2Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region2/enable/raw',
    payload : '0',
};

const buttonPrivacy3On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region3/enable/raw',
    payload : '1',
};

const buttonPrivacy3Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region3/enable/raw',
    payload : '0',
};

const buttonPrivacy4On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region4/enable/raw',
    payload : '1',
};

const buttonPrivacy4Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region4/enable/raw',
    payload : '0',
};


const buttonPrivacy5On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region5/enable/raw',
    payload : '1',
};

const buttonPrivacy5Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region5/enable/raw',
    payload : '0',
};

const buttonPrivacy6On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region6/enable/raw',
    payload : '1',
};

const buttonPrivacy6Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region6/enable/raw',
    payload : '0',
};

const buttonPrivacy7On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region7/enable/raw',
    payload : '1',
};

const buttonPrivacy7Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region7/enable/raw',
    payload : '0',
};

const buttonPrivacy8On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region8/enable/raw',
    payload : '1',
};

const buttonPrivacy8Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'multimedia/privacy/region8/enable/raw',
    payload : '0',
};


// Kamera Preset Positionen

const buttonGoToPos1 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '1',
};

const buttonGoToPos2 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '2',
};

const buttonGoToPos3 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '3',
};

const buttonGoToPos4 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '4',
};

const buttonGoToPos5 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '5',
};

const buttonGoToPos6 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '6',
};

const buttonGoToPos7 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '7',
};

const buttonGoToPos8 = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/preset/goto/raw',
    payload : '8',
};

const buttonStop = {
    topic  : mqtt_prefix + mqtt_camera_id + 'features/ptz/move/raw',
    payload : 'stop',
};


// Kamera Bewegungserkennung

const buttonAlarmOn = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/actions/enable/raw',
    payload : '1',
};

const buttonAlarmOff = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/actions/enable/raw',
    payload : '0',
};

const buttonAlarmPIROn = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/actions/pir/enable/raw',
    payload : '1',
};

const buttonAlarmPIROff = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/actions/pir/enable/raw',
    payload : '0',
};

const buttonAlarmTrigger = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/pushalarm/raw',
    payload : '1',
};

const buttonAlarmEmailOn = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/actions/email/enable/raw',
    payload : '1',
};

const buttonAlarmEmailOff = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/actions/email/enable/raw',
    payload : '0',
};

const buttonAlarmPushOn = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/push/enable/raw',
    payload : '1',
};

const buttonAlarmPushOff = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/push/enable/raw',
    payload : '0',
};

const buttonAlarmArea1On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/red/enable/raw',
    payload : '1',
};

const buttonAlarmArea1Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/red/enable/raw',
    payload : '0',
};

const buttonAlarmArea2On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/blue/enable/raw',
    payload : '1',
};

const buttonAlarmArea2Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/blue/enable/raw',
    payload : '0',
};

const buttonAlarmArea3On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/green/enable/raw',
    payload : '1',
};

const buttonAlarmArea3Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/green/enable/raw',
    payload : '0',
};

const buttonAlarmArea4On = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/yellow/enable/raw',
    payload : '1',
};

const buttonAlarmArea4Off = {
    topic  : mqtt_prefix + mqtt_camera_id + 'alarm/areas/yellow/enable/raw',
    payload : '0',
};