/**
 *
 * @param txt
 * @param max
 * @returns
 */
export function txtSlicer(txt: string, max: number = 59) {
  if (txt.length >= max) {
    return `${txt.slice(0, max)}...`;
  } else {
    return txt;
  }
}
