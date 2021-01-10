export type DataObj = {
  title: string,
  isMainArticle?: Boolean,
  children?: Array<DataObj>,
  content?: Array<any>
}