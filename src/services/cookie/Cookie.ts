import { bind } from 'decko';
import { IAccessInfo } from 'shared/types/models';

interface ICookieOptions {
  expires?: Date | number;
  path?: string;
  domain?: string;
  secure?: string;
}

interface ICookieArg {
  name: string;
  value: string;
  options: ICookieOptions;
}

class Cookie {
  constructor() {
    //
  }

  @bind
  public async loadCookie(): Promise<IAccessInfo | null> {
    const accessToken = this.getCookie('access');
    const refreshToken = this.getCookie('refresh');
    const timestamp = this.getCookie('exp');

    if (!this.isUndefined(accessToken) && !this.isUndefined(releaseEvents) && !this.isUndefined(timestamp)) {
      return {
        accessToken,
        refreshToken,
        timestamp: parseInt(timestamp as string, 10),
      } as IAccessInfo;
    }

    return null;
  }

  @bind
  private getCookie(name: string): string | undefined {
    const matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)',
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  @bind
  private deleteCookie(name: string) {
    //
  }

  @bind
  private setCookie({name, value, options = {}}: ICookieArg) {
    //
  }

  @bind
  private validateCookie() {
    //
  }

  @bind
  private isUndefined(value: any): boolean {
    return typeof value === undefined ? true : false;
  }
}

export default Cookie;
