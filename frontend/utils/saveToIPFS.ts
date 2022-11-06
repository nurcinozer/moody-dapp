import axios from "axios";
import { WEB3_STORAGE_KEY } from "./constants";

const saveToIPFS = async (file: File | undefined) => {
  const formData = new FormData();
  if (file) {
    formData.append("file", file);
  }

  const response = await axios.post(
    "https://api.web3.storage/upload",
    formData,
    {
      headers: {
        Authorization: `Bearer ${WEB3_STORAGE_KEY}`,
        "Content-Type": "text/plain",
      },
    }
  );
  console.log(response.data);

  return response.data.cid;
};

export default saveToIPFS;
