import { useEffect, useState } from "react";
import type { IPData } from "../types/ip";

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

export function useIPData() {
  const [data, setData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchIPData = async (ip?: string) => {
    setLoading(true);
    setError("");

    let url: string;

    if (!ip) {
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
    } else if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) {
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
    } else {
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${ip}`;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const result: IPData = await response.json();

      console.log(result);

      setData(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIPData();
  }, []);

  return {
    data,
    loading,
    error,
    searchIP: fetchIPData,
  };
}