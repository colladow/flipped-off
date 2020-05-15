export default function handleEnterPress(callback) {
  return e => {
    if (e.key === 'Enter') {
      callback();
    }
  };
}
