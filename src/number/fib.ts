export const fib = (term: number): number => {
  if (term < 2) return term;

  const sequence = [0, 1];

  let [semiLastIndex, lastIndex] = sequence;

  while (sequence.length < term) {
    sequence.push(sequence[lastIndex] + sequence[semiLastIndex]);
    lastIndex++ && semiLastIndex++;
  }

  return sequence[lastIndex] + sequence[semiLastIndex];
};
