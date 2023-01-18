const spinner = (spinAmount) => {
  let delay = 0;
  const animation = ["\r|", "\r/", "\r-", "\r\\", "\r|" ,'\r/', '\r-', '\r\\', '\r|'];
  for (let x = 0; x <= spinAmount; x++) {
    for (const frame of animation) {
      setTimeout(() => {
        process.stdout.write(frame);
      }, delay += 50);
    }
  }
};

spinner(10);