export interface IAboutUsProps {
  data: {
    label: string;
    header: string;
    description: string;
    banner: {
      blogsCounter: string;
      blogsText: string;
      viewsCounter: string;
      viewsText: string;
      usersCounter: string;
      usersText: string;
    };
    content: {
      label1: string;
      label2: string;
      title1: string;
      title2: string;
      text1: string;
      text2: string;
    };
  };
}
