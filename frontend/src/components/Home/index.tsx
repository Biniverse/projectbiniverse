import { useEffect, useState } from "react";
import { homeService } from "../../service/Home/homeService";
import useTestStore from "../../store/useTestStore";

export const HomeComponent = () => {
  const { apiResponse, setApiResponse } = useTestStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const result = await homeService();
      console.log(result);
      setApiResponse(result.message);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col'>
      <h1> {apiResponse}</h1>
    </div>
  );
};
