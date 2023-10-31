import { MainContent } from '@components/MainContent';

import styles from './sbsh.module.scss';
import { IStepByStepProps } from './types';

const { wrapper, container, content } = styles;

export function StepByStepHome({ data }: IStepByStepProps) {
  const { author, date } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <MainContent {...data} credentials={{ date, author }} colored />
        </div>
      </div>
    </section>
  );
}
