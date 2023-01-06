import { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomError } from '../types/types';

export default function useFetch(url: string) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<CustomError>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err: unknown) {
        setError(err as CustomError);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err: unknown) {
      setError(err as CustomError);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
}
