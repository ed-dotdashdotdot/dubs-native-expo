const defaultDeviceState = {
  device: '',
  orientation: '',
  vibration: true,
};

const device = (state = defaultDeviceState, action) => {
  switch (action.type) {
    case 'SET_DEVICE': return {
      ...state,
      ...{
        device: action.payload.device,
        innerHeight: action.payload.innerHeight,
        innerWidth: action.payload.innerWidth,
        orientation: action.payload.orientation,
        os: action.payload.os,
        isMacOs: action.payload.isMacOs,
        isWindows: action.payload.isWindows,
        browserName: action.payload.browserName,
        userAgent: action.payload.userAgent,
        browserTypes: action.payload.browserTypes,
      }
    };
    case 'SET_DEVICE_VIBRATION': return {
      ...state,
      ...{
        vibration: action.payload,
      }
    };
    default: return state;
  }
};

export default device;
