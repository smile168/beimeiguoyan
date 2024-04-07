import { GET } from '../api/Cigarettes';
export default async function MobileHome() {
  //   const data = await GET();
  const response = await GET();
  const data = await response.json();
  const id = data.id;
  return <p>mobile home, with mongo {id}</p>;
}
