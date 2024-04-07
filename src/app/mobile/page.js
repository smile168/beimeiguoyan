export default async function MobileHome() {
  //   const data = await GET();
  const response = await fetch(`${process.env.SERVER}/api`, {
    cache: 'no-store',
  }); // Assuming you have an API route named data.js
  const data = await response.json();
  const id = data.id;
  return <p>mobile home, with mongo {id}</p>;
}
