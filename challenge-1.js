function findFirstRepeated(gifts) {
  const repeated = {};

  for(let i = 0; i < gifts.length; i++) {
    const n = gifts[i];

    repeated[n] = repeated[n] !== undefined ? repeated[n] + 1 : 1;

    if (repeated[n] > 1) return n;
  }
  return -1;
}

