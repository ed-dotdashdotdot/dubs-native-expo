const setDevice = data => ({
  type: 'SET_DEVICE',
  payload: data,
});
const setDeviceVibration = data => ({
  type: 'SET_DEVICE_VIBRATION',
  payload: data,
});

const exportedDeviceObject = {
  setDevice,
  setDeviceVibration,
};

export default exportedDeviceObject;
