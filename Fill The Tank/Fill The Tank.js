function costToFill(tankSize, fuelLevel, pricePerGallon) {
    const gallonsNeeded = Math.max(tankSize - fuelLevel, 0);
    const cost = gallonsNeeded * pricePerGallon;
    return `$${cost.toFixed(2)}`;
}
