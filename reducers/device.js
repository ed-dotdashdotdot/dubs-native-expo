const defaultDeviceState = {
  device: '',
  orientation: '',
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
    default: return state;
  }
};

export default device;
