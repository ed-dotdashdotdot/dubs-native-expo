import i18nLanguages from './languages.json';
import i18nInfo from './info.json';

export default function i18n() {
  return {
    ...{},
    ...i18nLanguages,
    ...i18nInfo
  };
}
