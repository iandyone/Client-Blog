export interface IBlogPostProps {
  data: {
    user: string;
    date: string;
    header: string;
    title: string;
    content: string;
    label: string;
    list: {
      item1: string;
      item2: string;
      item3: string;
    };
  };
}
