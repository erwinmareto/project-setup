export const combineSearchParams = (
  searchParams: string | URLSearchParams,
  newParams: Record<string, unknown>
) => {
  const searches = new URLSearchParams(searchParams);
  Object.keys(newParams).forEach((key) => {
    searches.append(key, newParams[key] as string);
  });
  //   searches.append('foo', 4);
  return searches.toString();
};

export const removeSearchParams = (searchParams: URLSearchParams, paramsToRemove: string[]) => {
  const params = new URLSearchParams(searchParams);
  paramsToRemove.forEach((key) => {
    params.delete(key);
  });
  return params.toString();
};
