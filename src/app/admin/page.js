'use server';
import CigaretteForm from '@/components/cigaretteForm';
import {
  getCigarettes,
  deleteCigarette,
  insertOneCigarette,
} from '../../lib/Cigarettes';
import { redirect } from 'next/navigation';
import CigarettesList from '@/components/cigarettesList';
import { Button } from 'antd';
import Link from 'next/link';

const columns = [
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
];

export default async function Admin() {
  const cigarettesArray = await getCigarettes();
  const cigaretesList = [];
  cigarettesArray.forEach((cig) =>
    cigaretesList.push({
      ...cig,
      key: cig._id.toString(),
      _id: cig._id.toString(),
    })
  );

  const onAddCigarette = 'use server';
  async (cig) => {
    await insertOneCigarette(cig);
    redirect(`/`);
  };

  return (
    <div className='flex flex-col items-center justify-center '>
      <p>Admin Page</p>
      <Button>
        <Link href='/admin/cigaretteForm'>Add One</Link>
      </Button>
      <CigarettesList
        cigarettesList={cigaretesList}
        columns={columns}
        deleteCigarette={deleteCigarette}
      />
    </div>
  );
}
