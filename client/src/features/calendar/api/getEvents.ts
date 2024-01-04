import { axios } from '@/lib/axios';

export const getEvents = async () => {
  const res = await axios.get('/event', {
    params: {
      startDate: '',
    },
  });
  return res.data;
};
