'use client';

import { ErrorBoundaryProps, ErrorBoundaryState } from '@components/ErrorBoundary/types';
import { Spinner } from '@components/Spinner';
import React, { PureComponent, Suspense } from 'react';

import styles from './boundary.module.scss';

const { container, title, text } = styles;

class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <Suspense fallback={<Spinner />}>
          <div className={container}>
            <h1 className={title}></h1>
            <p className={text}>{error}</p>
          </div>
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
