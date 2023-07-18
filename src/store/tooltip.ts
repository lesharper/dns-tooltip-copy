import {atom, RecoilState} from "recoil"

export const tooltipAtom:RecoilState<any> = atom({
  key: 'tooltipAtom',
  default: null
});
