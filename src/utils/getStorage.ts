import { ITodoStorage } from "../context/localStorageContext";

export function getStorage():ITodoStorage[] {
  return JSON.parse(
    localStorage.getItem('todos') || '[]'
  );
}
