export default function orderByProps(object, arr) {
  const sortKeys = Object.keys(object).sort((a, b) => {
    if (arr.indexOf(a) === -1 && arr.indexOf(b) === -1) {
      if (a > b) return 1;
      return -1;
    }
    if (arr.indexOf(a) !== -1 && arr.indexOf(b) !== -1) return arr.indexOf(a) - arr.indexOf(b);
    if (arr.indexOf(a) === -1) return 1;
    return -1;
  });

  return sortKeys.map((elem) => ({ key: elem, value: object[elem] }));
}