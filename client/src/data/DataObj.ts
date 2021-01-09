export type DataObj = {
  title: string,
  isParent: Boolean,
  children?: Array<DataObj>,
  content?: Array<any>
}