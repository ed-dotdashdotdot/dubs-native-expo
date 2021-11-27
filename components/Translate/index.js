import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

const Translate = ({ textKey }) => {
  const { language }  = useSelector(state => state);
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en-GB';
  return polyglot.t(`${textKey}.${lang}`);
};

Translate.propTypes = {
  textKey: PropTypes.string.isRequired
};

export default Translate;
