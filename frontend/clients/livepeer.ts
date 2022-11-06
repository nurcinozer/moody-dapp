import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";
import { LIVEPEER_KEY } from "../utils/constants";

const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: LIVEPEER_KEY }),
});

export default LivePeerClient;
