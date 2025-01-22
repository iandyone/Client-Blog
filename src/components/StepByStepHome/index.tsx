import { MainContent } from '@components/MainContent';

import styles from './sbsh.module.scss';
import { IStepByStepProps } from './types';

export function StepByStepHome({ data }: IStepByStepProps) {
  const { author, date } = data;

  return (
    <section className={styles.wrapper} data-testid='step-by-step-home-component'>
      <div className={styles.container}>
        <div className={styles.content}>
          <MainContent {...data} credentials={{ date, author }} buttonTestID={'sbsh-button'} colored />
        </div>
      </div>
    </section>
  );
}
