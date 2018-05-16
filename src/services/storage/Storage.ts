import { bind } from 'decko';
import { IAccessInfo } from 'shared/types/models';
import { delay } from 'redux-saga';

class Storage {
  constructor() {
    //
  }

  @bind
  public async loadAccessInfo(): Promise<IAccessInfo | null> {
    await delay(500);
    return JSON.parse(localStorage.getItem('user') as string) as IAccessInfo | null;
  }

  @bind
  private isUndefined(value: any): boolean {
    return typeof value === undefined ? true : false;
  }
}

export default Storage;
