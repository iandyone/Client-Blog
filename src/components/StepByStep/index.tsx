import { Pages } from '@appTypes/enums';
import { Button } from '@ui/Button';
import { Sen } from 'next/font/google';
import Link from 'next/link';

import { data } from './data';
import styles from './sbs.module.scss';

const sen = Sen({ subsets: ['latin'] });
const { wrapper, container, subtitle, title, contacts, description, content } = styles;
const { author, buttonText, date, descriptionText, label, labelMarked, titleText } = data;

export default function StepByStep() {
  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <p className={subtitle}>
            {label} <span>{labelMarked}</span>
          </p>
          <h1 className={`${title} ${sen}`}>{titleText}</h1>
          <p className={contacts}>
            By <span>{author}</span> | {date}
          </p>
          <p className={description}>{descriptionText}</p>
          <Link href={Pages.POST}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
