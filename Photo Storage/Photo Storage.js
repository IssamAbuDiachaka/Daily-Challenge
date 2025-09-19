function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  let numOfPhotos = (hardDriveSizeGb*1000) / photoSizeMb

  return Math.floor(numOfPhotos);
}