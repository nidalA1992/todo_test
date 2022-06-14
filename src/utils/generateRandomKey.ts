export function generateRandomKey () {
  return Math.random().toString(16).substring(3, 9);
}
