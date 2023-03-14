const spin = () => {
  const sequence = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
  const delays = [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900]
  delays.forEach((delay, index) => {
    const currentSequence = sequence[index % 5];
    setTimeout(() => {
      process.stdout.write(`\r${currentSequence}`)}, delay);
  });
}
spin()
