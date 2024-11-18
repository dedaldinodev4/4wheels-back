import { IBase } from "./Base";


export interface IDriver extends IBase, IDriverRequest { }

export interface IDriverRequest {
  name: string;
  identity: string;
  country: string;
  gender: string;
  birth: Date;
}
