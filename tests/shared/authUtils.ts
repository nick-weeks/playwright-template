import { request } from '@playwright/test';
import config from '../../config';

export async function fetchAuthToken(): Promise<string> {
  const requestContext = await request.newContext();
  const response = await requestContext.post(`${config.homeUrl}/api/user/login`, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    data: `username=${config.successfulLogin.username}&password=${config.successfulLogin.password}&terminate=true`,
  });

  if (response.ok()) {
    const responseBody = await response.json();
    await requestContext.dispose();
    return responseBody.authToken;
  } else {
    await requestContext.dispose();
    throw new Error(`Failed to login: ${response.status()} ${response.statusText()}`);
  }
}