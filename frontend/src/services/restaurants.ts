import axios from 'axios';

import { SectionType } from '../types';

const getAll = async () => {
  const { data } = await axios.get<SectionType[]>('/sections');
  return data;
};

export default {
  getAll
};