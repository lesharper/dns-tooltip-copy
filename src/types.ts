export interface Input  {
  type: string,
  text: string,
  name?:string
}
export type InputNode = Array<Input> | Input
