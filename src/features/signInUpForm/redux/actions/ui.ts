import * as NS from '../../namespace';

export function chooseTab(payload: NS.IFormActive): NS.IChooseTab {
  return {
    type: 'SIGN_IN_UP_FORM:CHOOSE_TAB',
    payload,
  };
}
