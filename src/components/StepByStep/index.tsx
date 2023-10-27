import { Pages } from '@appTypes/enums';
import { Button } from '@ui/Button';
import { Credentials } from '@ui/Credentials';
import { Sen } from 'next/font/google';
import Link from 'next/link';

import { data } from './data';
import styles from './sbs.module.scss';

const sen = Sen({ subsets: ['latin'] });
const { wrapper, container, subtitle, title, description, content } = styles;
const { author, buttonText, date, descriptionText, label, labelMarked, titleText } = data;

export default function StepByStep() {
  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={content}>
          <p className={subtitle}>
            {label} <span>{labelMarked}</span>
          </p>
          <h1 className={`${title} ${sen.className}`}>{titleText}</h1>
          <Credentials author={author} date={date} colored />

          <p className={description}>{descriptionText}</p>
          <Link href={Pages.POST}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
