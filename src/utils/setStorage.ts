import { ITodoStorage } from "../context/localStorageContext";

export function setStorage(value:ITodoStorage[]) {
  localStorage.setItem(
    'todos', 
    JSON.stringify(value)
  );
}
