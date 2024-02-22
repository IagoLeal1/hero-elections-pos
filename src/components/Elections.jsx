import { useEffect, useState } from 'react';
import { getElection } from '../api/api';
import { Election } from './Election';
import { Loading } from './Loading';

export function Elections({ cities }) {
  const [selectedCityId, setSelectedCityId] = useState(cities[0].id);
  const [currentElection, setCurrentElection] = useState(null);

  // const [shouldRenderSpinner, setShouldRenderSpinner] = useState(true);

  // useEffect(() => {
  //   if(shouldRenderSpinner){
  //       setTimeout(() => {
  //         setShouldRenderSpinner(false);
  //       }, 500);
  //     }
  //   }, [shouldRenderSpinner]);

  useEffect(() => {
    setCurrentElection(null);
    // setShouldRenderSpinner(true)
    getElection(selectedCityId).then((backendElection) =>
      setCurrentElection(backendElection)
    );
  }, [selectedCityId]);

  const isLoading = !currentElection;

  return (
    <div>
      <div className="grid place-items-center mt-4">
        <span className="m-2"> Escolha o Município</span>
        <select
          className="border"
          value={selectedCityId}
          onChange={(event) => {
          setSelectedCityId(event.currentTarget.value);
          }}>
          {cities.map((city) => {
            return (
              <option
                key={city.id}
                value={city.id}>
                {city.name}
              </option>
            );
          })}
        </select>
      </div>

      {isLoading ? (
        <div className="mt-4">
          <Loading />
        </div>
      ) : (
        <Election data={currentElection} />
      )}
    </div>
  );
}
