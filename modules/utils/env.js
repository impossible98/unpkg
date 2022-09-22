export function getEnv(key, value) {
  if (process.env[key] === undefined || process.env[key] === "") {
    return value
  } else {
    return process.env[key]
  }
}
