import {Address} from "wagmi";
import {bscTestnet} from "@wagmi/chains";

export const NEST_ADDRESS: { [p: number]: Address } = {
  [bscTestnet.id]: "0x821edD79cc386E56FeC9DA5793b87a3A52373cdE",
}

export const NEST_SWITCH_ADDRESS: { [p: number]: Address } = {
  [bscTestnet.id]: "0xB64825a6bA80d65886b5123f5170ddffc935D9DE",
}

export const NEW_NEST_ADDRESS: { [p: number]: Address } = {
  [bscTestnet.id]: "0x4D4B378eFbeb7eE15Aa498F3383C9949391557e0",
}