import { useEffect, useRef } from "react";
import L from "leaflet";
import type { IPData } from "../types/ip";

interface MapProps {
  data: IPData | null;
}

function Map({ data }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = L.map(mapContainerRef.current).setView(
      [20, 0],
      2
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !data) return;

    const { lat, lng } = data.location;

    mapRef.current.setView([lat, lng], 13);

    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
    } else {
      markerRef.current = L.marker([lat, lng]).addTo(mapRef.current);
    }
  }, [data]);

  return (
    <div
      ref={mapContainerRef}
      className="relative z-[1] h-[500px] w-full"
    />
  );
}

export default Map;