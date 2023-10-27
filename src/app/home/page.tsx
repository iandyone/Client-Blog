import { TAB_TITLE } from '@constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Home`,
};

export default function HomePage() {
  return <div>home page</div>;
}
