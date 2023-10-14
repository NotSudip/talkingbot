function stringSimilarity(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  
  const matrix = [];
  
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
    for (let j = 1; j <= len2; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else {
        const cost = str1.charAt(i - 1) !== str2.charAt(j - 1) ? 1 : 0;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
  }
  
  const maxLen = Math.max(len1, len2);
  const similarity = 1 - matrix[len1][len2] / maxLen;
  
  return similarity;
}
