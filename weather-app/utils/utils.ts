import { AxiosError } from "axios";

const fetchWithErrorHandling = async <T>(
  fetchFn: () => Promise<T>,
  setData: (data: T | null) => void,
  setError: (error: string) => void,
  setLoading?: (loading: boolean) => void
) => {
  try {
    if (setLoading) setLoading(true);
    setError("");

    const data = await fetchFn();
    setData(data);
  } catch (err) {
    if (err instanceof AxiosError)  {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Ошибка загрузки данных. Попробуйте позже.");
      }
    }
    console.error("Fetch error:", err);
  } finally {
    if (setLoading) setLoading(false);
  }
};

export { fetchWithErrorHandling };
