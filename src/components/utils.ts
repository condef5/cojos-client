export function sliceIntoChunks(arr: any[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export function shuffleArray(array: any[]) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array, got ${typeof array}`);
  }

  if (array.length === 0) return [];

  const arrayCopy = [...array];

  for (let index = arrayCopy.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [arrayCopy[index], arrayCopy[newIndex]] = [
      arrayCopy[newIndex],
      arrayCopy[index],
    ];
  }

  return arrayCopy;
}
