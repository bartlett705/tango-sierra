import * as React from 'react';

interface LoadingComponentProps {
  isLoading: boolean;
}

export const Loading: React.SFC<LoadingComponentProps> = ({ isLoading }) => {
  return isLoading ? <img src='loading.svg' alt='Loading...'/> : null;
  );
};
