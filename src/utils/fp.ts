// if not exist, add
// if exist, remove
export const reverse = <A>(a: A, b: A[]): A[] => {
  if (b.includes(a)) return b.filter((c) => c != a);
  return [...b, a];
};
