export function throttle(fn, limit = 200) {
  let inThrottle = false;
  return (...args) => {
    if (inThrottle) return;
    inThrottle = true;
    fn(...args);
    setTimeout(() => (inThrottle = false), limit);
  };
}