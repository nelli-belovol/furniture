import { ICommentPair, IHeroSlider, IProject } from './types';

export const breakArr = (
  size: number,
  items: IHeroSlider[] | ICommentPair[] | IProject[],
) => {
  const subarray = [];

  for (let i = 0; i < Math.ceil(items.length / size); i++) {
    subarray[i] = items.slice(i * size, i * size + size);
  }

  return subarray;
};
