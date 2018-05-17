/* tslint:disable */
import { IUser, IAccessInfo } from 'shared/types/models';
export const mockUsers: IUser[] = [
  {
    "uid": 0,
    "username": "Ivan Ivanov",
    "email": "Ivan@mail.com",
    "password": "Ivan123",
    "tokens": null
  },
  {
    "uid": 1,
    "username": "Petr Petrov",
    "email": "Petr@mail.com",
    "password": "Petr123",
    "tokens": null
  }
]

export const tokens: IAccessInfo[] = [{
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwidXNlcm5hbWUiOiJJdmFuIEl2YW5vdiIsImVtYWlsIjoiSXZhbkBtYWlsLmNvbSJ9._TacXcZwNVqMjUl7C8kSAhVih2ZOaJJnBmvTP_3MHC0",
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwidXNlcm5hbWUiOiJJdmFuIEl2YW5vdiIsImVtYWlsIjoiSXZhbkBtYWlsLmNvbSJ9.jNgVxjM86vKK8djrZwt9t4rNdqusysYc0CYRnuQOAqs",
  timestamp: timestamp(1/48),
},{
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVzZXJuYW1lIjoiUGV0ciBQZXRyb3YiLCJlbWFpbCI6IlBldHJAbWFpbC5jb20ifQ.2prUy3XtPLiASrrCTLBdql0XW5Q9-p0dnolG1l2ivSQ",
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVzZXJuYW1lIjoiUGV0ciBQZXRyb3YiLCJlbWFpbCI6IlBldHJAbWFpbC5jb20ifQ.9Kh4mLxQfaiKFT-SULn7Bob8meAYcXbVDLDTKRW1ayA",
  timestamp: timestamp(1/48),
}]


function timestamp(time: number) {
  const today = new Date(Date.now());
  return today.setDate(today.getDate() + time);
}
