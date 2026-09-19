export interface IPData {
  ip: string;
  isp: string;
  location: {
    city: string;
    region: string;
    country: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}