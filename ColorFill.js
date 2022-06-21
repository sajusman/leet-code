/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const c1 = image[sr][sc];
  if (c1 === color) return image;
  image[sr][sc] = color;
  return colorFill(image, sr, sc, c1, color);
};

var colorFill = (image, sr, sc, c1, c2) => {
  const r = image.length;
  const c = image[0].length;
  if (sc - 1 >= 0 && image[sr][sc - 1] === c1) {
    // left
    image[sr][sc - 1] = c2;
    colorFill(image, sr, sc - 1, c1, c2);
  }
  if (sc + 1 < c && image[sr][sc + 1] === c1) {
    // right
    image[sr][sc + 1] = c2;
    colorFill(image, sr, sc + 1, c1, c2);
  }
  if (sr - 1 >= 0 && image[sr - 1][sc] === c1) {
    // top
    image[sr - 1][sc] = c2;
    colorFill(image, sr - 1, sc, c1, c2);
  }
  if (sr + 1 < r && image[sr + 1][sc] === c1) {
    // bottom
    image[sr + 1][sc] = c2;
    colorFill(image, sr + 1, sc, c1, c2);
  }
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
