import { useEffect, useState } from "react";
import { homeService } from "../../service/Home/apiService";
import { IData } from "../../shared/interface";
import useGlobalStore from "../../store/useGlobalStore";

export const HomeComponent = () => {
  const { apiMessage, setApiMessage } = useGlobalStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const result = await homeService();
      console.log(result);
      setApiMessage(result.message);
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
      <h1> {apiMessage}</h1>
    </div>
  );
};
