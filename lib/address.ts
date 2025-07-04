import {Address} from "wagmi";
import {bscTestnet, mainnet} from "@wagmi/chains";

export const NEST_ADDRESS: { [p: number]: Address } = {
  [mainnet.id]: "0x04abeda201850ac0124161f037efd70c74ddc74c",
  [bscTestnet.id]: "0x821edD79cc386E56FeC9DA5793b87a3A52373cdE",
}

export const NEST_SWITCH_ADDRESS: { [p: number]: Address } = {
  [mainnet.id]: "0xa5014706ed91a30f9bcc0dd777ed82d7eeca8a29",
  [bscTestnet.id]: "0xB64825a6bA80d65886b5123f5170ddffc935D9DE",
}

export const NEW_NEST_ADDRESS: { [p: number]: Address } = {
  [mainnet.id]: "0xcd6926193308d3B371FdD6A6219067E550000000",
  [bscTestnet.id]: "0x4D4B378eFbeb7eE15Aa498F3383C9949391557e0",
}