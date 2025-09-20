
function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  // Convert drive size (GB) to bytes
  const driveSizeBytes = driveSizeGb * 1000 * 1000 * 1000;

  // Convert file size to bytes based on the provided unit
  let fileSizeBytes;
  if (fileUnit === "B") {
    fileSizeBytes = fileSize;
  } else if (fileUnit === "KB") {
    fileSizeBytes = fileSize * 1000;
  } else if (fileUnit === "MB") {
    fileSizeBytes = fileSize * 1000 * 1000;
  } else {
    throw new Error("Unsupported file unit. Use 'B', 'KB', or 'MB'.");
  }
  return Math.floor(driveSizeBytes / fileSizeBytes);
}

