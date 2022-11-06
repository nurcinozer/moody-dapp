import getIPFSLink from "./getIPFSLink";
import imagekitURL from "./getImageKit";

const getImage = (image: any): string => {
  return imagekitURL(getIPFSLink(image), "thumbnail");
};

export default getImage;
