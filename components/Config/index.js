import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';
import PropTypes from 'prop-types';

import { sanitiseDeviceLocale } from '../../js/helpers/sanitiseDeviceLocale';

const Config = props => {
  let { deviceLocale } = { ...props };
  // console.log('---');
  // console.log(deviceLocale);
  // console.log('---');
  const deviceLanguage = sanitiseDeviceLocale(deviceLocale).language;
  const deviceFlag = sanitiseDeviceLocale(deviceLocale).flag;
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();
  // alert(`deviceLocale: ${deviceLocale}`);

  useEffect(() => {
    dispatch(languageActions.setChangeFlag(deviceFlag));
    dispatch(languageActions.setChangeLanguage(deviceLanguage));
    dispatch(languageActions.setChangeLocale(deviceLocale));
    // return (() => {
    //   AppState.removeEventListener('change', handleAppStateChange);
    // });
  }, []);

  return null;
};

Config.defaultProps = {
  deviceLocale: 'en-GB',
};

Config.propTypes = {
  deviceLocale: PropTypes.string.isRequired,
};

export default Config;
