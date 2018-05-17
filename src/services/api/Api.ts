import { bind } from 'decko';
import { IAccessInfo, ILogin, IUser } from 'shared/types/models';
import { mockUsers, tokens } from 'shared/helpers/mocks';
// import HttpActions from './HttpActions';

import { delay } from 'redux-saga';

class Api {
  // private actions: HttpActions;

  constructor(public baseUrl: string, public version: string = 'v1') {
   //
  }

  @bind
  public async authentication(loginData: ILogin): Promise<IAccessInfo | null> {
    await delay(1000);
    const user = this.findUser(loginData);
    return user ? tokens[user.uid] : null;
  }

  @bind
  public async authorization(accessInfo: IAccessInfo): Promise<boolean> {
    await delay(1000);
    return true;
  }

  @bind
  private validateLoginData(users: IUser[], loginData: ILogin): boolean {
    return users.some((user) => {
      if (user.email === loginData.email &&
          user.password === loginData.password) {
        return true;
      }
      return false;
    });
  }

  @bind
  private findUser(loginData: ILogin): IUser | undefined {
    return mockUsers.find((user) => {
      if (user.email === loginData.email &&
          user.password === loginData.password) {
        return true;
      }
      return false;
    });
  }
}

export default Api;
