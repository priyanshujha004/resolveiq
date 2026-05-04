<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
import { apiGet, apiPost } from './api';
import type { UserDto } from '../types';

export async function getUser(): Promise<UserDto | null> {
  try {
    return await apiGet<UserDto>('/auth/me');
  } catch {
    return null;
  }
<<<<<<< HEAD
}

export async function logout(): Promise<void> {
  try {
    await apiPost('/auth/logout');
  } catch {
    // Even if the API call fails, redirect to login
  }
  window.location.href = '/login';
=======
// TODO P1: getUser(), logout()
export async function getUser() {
  // TODO P1
}
export async function logout() {
  // TODO P1
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
=======
}

export async function logout(): Promise<void> {
  try {
    await apiPost('/auth/logout');
  } catch {
    // Even if the API call fails, redirect to login
  }
  window.location.href = '/login';
>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
}
