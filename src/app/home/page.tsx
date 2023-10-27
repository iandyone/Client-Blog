import { FeaturedPost } from '@components/FeaturedPost';
import StepByStep from '@components/StepByStep';
import { TAB_TITLE } from '@constants';
import { posts } from '@constants/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Home`,
};

export default function HomePage() {
  return (
    <>
      <StepByStep />
      <FeaturedPost post={posts[0]} />
    </>
  );
}
