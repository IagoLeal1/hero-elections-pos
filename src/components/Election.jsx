export function Election({ data }) {
  return (
    <div className="grid place-items-center">
      <ul className="flex items-center gap-4 m-8">
        <li>Eleitorado : {data.city.votingPopulation}</li>
        <li>Abstenção : {data.city.absence}</li>
        <li>Comparecimento : {data.city.presence}</li>
      </ul>

      <ul className=" p-8 border m-8 flex flex-row flex-wrap items-center justify-center gap-5">
        {data.electionResults.map((candidate, index) => {
          const isElected = index === 0;
          return (
            <li
              key={candidate.id}
              className="h-31 w-31 shadow-md flex flex-col items-center justify-between p-2 hover:bg-gray-100">
              <div className="flex flex-row items-center justify-between w-full gap-5">
                <span>
                  <img
                    className="w-13 h-12 rounded-full"
                    src={`/img/${candidate.username}.png`}
                    alt=""
                  />
                </span>
                <div className="flex flex-col items-center justify-center text-xs">
                  <span
                    className={
                      isElected ? 'text-green-600 font-bold' : 'text-orange-700 font-bold'
                    }>
                    {candidate.percent.toFixed(2)}%
                  </span>
                  <span>{candidate.votes}</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-8">
                <span>{candidate.name}</span>
                <span
                  className={isElected ? 'text-green-700' : 'text-orange-700'}>
                  {isElected ? 'Eleito' : 'Não eleito'}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
