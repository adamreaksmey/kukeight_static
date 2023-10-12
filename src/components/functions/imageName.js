const imageName = (url) => {
  const parts = url.split("/");
  const fileName = parts[parts.length - 1];
  const baseName = fileName.split(".")[0];
  const extension = fileName.split(".")[2];
  return baseName + "." + extension;
};

export default imageName;
