function speeding(speeds, limit) {
  // speeding vehicles above the limit
  let spdVehicles = speeds.filter(i => i > limit);

  // number of speeding vehicles
  let numOfVehSpd = spdVehicles.length;

  if (numOfVehSpd === 0) {
    return [0, 0];
  }

  // much each exceeded the limit
  let excesses = spdVehicles.map(s => s - limit);

  // average
  let avgAmtBeyondLimit = excesses.reduce((a, b) => a + b, 0) / numOfVehSpd;

  return [numOfVehSpd, avgAmtBeyondLimit];
}
