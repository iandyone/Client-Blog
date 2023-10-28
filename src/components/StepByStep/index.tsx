import { Pages } from '@appTypes/enums';
import { Button } from '@ui/Button';
import { Preview } from '@ui/Preview';
import Link from 'next/link';

import { data } from './data';
import styles from './sbs.module.scss';

const { wrapper, container, content } = styles;
const { author, buttonText, date, body, label, labelMarked, title } = data;

export default function StepByStep() {
  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <Preview
            body={body}
            header={title}
            label={label}
            labelMarked={labelMarked}
            credentials={{ date, author }}
            colored
          />
          <Link href={Pages.POST}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
