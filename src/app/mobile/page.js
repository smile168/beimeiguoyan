async function getCigarette() {
  const res = await fetch(`${process.env.SERVER}/api`, { cache: 'no-store' });
  return res.json();
}

export default async function MobileHome() {
  const data = await getCigarette();
  const id = data.id;
  console.log(id);
  return <p>mobile home, with mongo {id}</p>;
}
