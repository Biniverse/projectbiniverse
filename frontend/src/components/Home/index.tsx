import { useEffect, useState } from "react";
import { homeService } from "../../service/Home/homeService";
import useTestStore from "../../store/useTestStore";
import { useNavigate } from "../../hooks/useNavigate";
import { ROUTES } from "../../shared/enum";

export const HomeComponent = () => {
  const { apiResponse, setApiResponse } = useTestStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { navigate } = useNavigate();
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
    <div className="flex flex-col">
      <h1> {apiResponse}</h1>
      <p
        className="cursor-pointer text-center"
        onClick={() => navigate(ROUTES.ABOUT_US)}
      >
        About us
      </p>
    </div>
  );
};
