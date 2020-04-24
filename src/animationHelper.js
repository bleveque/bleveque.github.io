const animationHelper = ({ animationLength = 400, intervalLength = 50, onTick, onDone }) => {
  let timeInInterval = 0;
  let interval = setInterval(() => {
    timeInInterval += intervalLength;

    onTick(Math.min(1, timeInInterval / animationLength));

    if (timeInInterval >= animationLength) {
      clearInterval(interval);
      onDone();
    }
  }, intervalLength);
};

export default animationHelper;
