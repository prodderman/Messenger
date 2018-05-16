import { Entry } from './entry';

export function loadEntry(): Promise<Entry> {
  return import(/* webpackChunkName: "signInUpForm" */ './entry').then(feature => feature.entry);
}
