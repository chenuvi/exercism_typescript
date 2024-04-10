export function count(words: string) {
  return words
    .toLocaleLowerCase()
    .match(/\b([\w']+)\b/g)
    ?.reduce(
      (counts, word: string) => counts.set(word, (counts.get(word) ?? 0) + 1),
      new Map<string, number>()
    );
}
