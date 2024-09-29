import { Loader2 } from 'lucide-react';

import { ReactQueryProps } from './types';

const ReactQuery = <T,>({ queryResult, render, ...props }: ReactQueryProps<T>) => {
  const { data, isLoading, isFetching, isError, isSuccess } = queryResult;

  if (isLoading && isFetching) {
    return props.renderLoading ? props.renderLoading : <Loader2 className="text-secondary-40 animate-spin" />;
  }

  if (isError) {
    return props.renderError ? props.renderError : <p>Error</p>;
  }

  if (isSuccess && data) {
    return render(data);
  }

  return 'Something went wrong';
};

export default ReactQuery;
