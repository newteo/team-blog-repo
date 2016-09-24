
const timeHandle = (time) => {
  return time.slice(0,10).replace(/-/g,'/')
}

export { timeHandle }