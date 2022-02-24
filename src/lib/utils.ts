import { Maybe } from 'graphql/jsutils/Maybe';

export const formatText = (string: Maybe<string>) => {
  return string && string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
export const formatSize = (string: Maybe<string>) => {
  return string && string.toUpperCase();
};
