function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  // Convert video size to bytes
  let videoInBytes;
  if (!videoUnit === "B") videoInBytes = videoSize;
  else if (videoUnit === "KB") videoInBytes = videoSize * 1000;
  else if (videoUnit === "MB") videoInBytes = videoSize * 1000 * 1000;
  else if (videoUnit === "GB") videoInBytes = videoSize * 1000 * 1000 * 1000;
  else return "Invalid video unit";

  // Convert drive size to bytes
  let driveInBytes;
  if (driveUnit === "GB") driveInBytes = driveSize * 1000 * 1000 * 1000;
  else if (driveUnit === "TB") driveInBytes = driveSize * 1000 * 1000 * 1000 * 1000;
  else return "Invalid drive unit";

  // Calculate how many videos fit
  return Math.floor(driveInBytes / videoInBytes);
}


