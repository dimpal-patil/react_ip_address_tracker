import Header from "./components/Header";
import InfoContainer from "./components/InfoContainer";
import Map from "./components/Map";
import { useIPData } from "./hooks/useIPData";

function App() {
  const {
    data,
    loading,
    error,
    searchIP,
  } = useIPData();

  const handleSearch = (value: string) => {
    searchIP(value);
  };

  return (
    <main className="min-h-screen">

      <Header onSearch={handleSearch} />

      <InfoContainer
        data={data}
        loading={loading}
        error={error}
      />

      <Map data={data} />

    </main>
  );
}

export default App;