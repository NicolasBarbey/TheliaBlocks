import { i18nString } from '../types';
import { CURRENT_LOCAL } from '../constants';

export function getI18nText(text: i18nString){
    return text[CURRENT_LOCAL] || text['default'];
}
