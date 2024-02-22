import { useEffect, useState } from 'react';
import { getCities } from './api/api';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { Main } from './components/Main';
import { Elections } from './components/Elections';

export default function App() {
  const [cities, setCities] = useState(null);

  const [shouldRenderSpinner, setShouldRenderSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldRenderSpinner(false);
    }, 300);
  }, [shouldRenderSpinner]);

  useEffect(() => {
    getCities().then((backendCities) => setCities(backendCities));
  }, []);

  const isLoading = !cities ||  shouldRenderSpinner;

  return (
    <>
      <Header>
        <h1>React-elections</h1>
      </Header>

      <Main>
        {isLoading ? (
          <div className="mt-4">
            <Loading />
          </div>
        ) : (
          <Elections cities={cities}/>
        )}
      </Main>
    </>
  );
}
