'use client';
import { Table } from 'antd';
import { useRouter } from 'next/navigation';

export default function CigarettesList({
  cigarettesList,
  columns,
  deleteCigarette,
}) {
  const router = useRouter();
  const onRow = (record, rowIndex) => {
    return {
      onClick: async (event) => {
        //await deleteCigarette(record._id);
        router.push(`/admin/cigaretteForm/?cigId=${record._id}`);
      },
    };
  };

  return (
    <Table
      className='w-4/5'
      dataSource={cigarettesList}
      columns={columns}
      onRow={onRow}
    ></Table>
  );
}
