const setDevice = data => ({
  type: 'SET_DEVICE',
  payload: data,
});
const exportedDeviceObject = {
  setDevice,
};

export default exportedDeviceObject;
