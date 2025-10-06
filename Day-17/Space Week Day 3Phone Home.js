function sendMessage(distances) {
 const totalDistance = distances.reduce((a, b) => a + b, 0);
  const travelSeconds = totalDistance / 300000;
  const satellitesPassed = Math.max(0, distances.length - 1);
  const delaySeconds = satellitesPassed * 0.5;

  const total = travelSeconds + delaySeconds;

  return parseFloat(total.toFixed(4));
}
