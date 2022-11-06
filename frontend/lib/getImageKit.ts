import { IMAGEKIT_URL } from "../utils/constants";

const imagekitURL = (url: string, name?: string, blur?: string): string => {
  return blur
    ? `${IMAGEKIT_URL}/tr:di-placeholder.webp,w-30,h-30,bl-6/${url}`
    : name
    ? `${IMAGEKIT_URL}/tr:n-${name},tr:di-placeholder.webp/${url}`
    : `${IMAGEKIT_URL}/tr:di-placeholder.webp/${url}`;
};

export default imagekitURL;
