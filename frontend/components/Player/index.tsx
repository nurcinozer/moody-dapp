import { useAsset } from "@livepeer/react";

export const Player = ({ id }: { id: string }) => {
  const { data: asset } = useAsset(id);

  return <audio src={asset?.downloadUrl} controls />;
};
