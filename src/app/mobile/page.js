import { getCigarettes } from '../lib/Cigarettes';

export default async function MobileHome() {
  const cigarettesArray = await getCigarettes();
  return (
    <>
      <p>mobile home</p>
      {cigarettesArray.map((cig) => (
        <div key={cig.id}>{cig.id}</div>
      ))}
    </>
  );
}
