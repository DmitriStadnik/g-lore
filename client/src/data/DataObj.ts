export type DataObj = {
  route?: string,
  title: string,
  isParent: Boolean,
  children?: Array<DataObj>,
  content?: Array<any>
}