import { githubApi } from '../api/githubApi';
import { Label } from '../issues/interfaces/Label';

export const getLabelsService = async (): Promise<Label[]> => {
  const response = await githubApi.get<Label[]>('/labels');
  return response?.data;
};
