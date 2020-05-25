export const LIMIT = 80;

export default function getFontSize(length) {
  if (length < 35) {
    return;
  }

  if (length >= 35 && length < 60) {
    return 16;
  }

  if (length >= 60 && length <= LIMIT) {
    return 12;
  }
}
