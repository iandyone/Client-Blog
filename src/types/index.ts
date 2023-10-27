export interface IPost extends ICredentials {
  title: string;
  content: string;
  preview: any;
}

export interface ICredentials {
  author: string;
  date: string;
}
