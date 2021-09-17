export type BeforeUploadFileType = File | Blob | boolean | string

export type Action = string | ((file: AtFile) => string | PromiseLike<string>)

export interface AtFile extends File {
  uid: string
}

export interface ParsedFileInfo {
  file: AtFile
  data: object
  error: Error
}
