import CigaretteForm from '@/components/cigaretteForm';
import { getCigarette } from '@/lib/Cigarettes';
export default async function AdminCigaretteForm({ searchParams }) {
  return (
    <>
      <p>Cigarette Form Page</p>
      <CigaretteForm cigId={searchParams.cigId}></CigaretteForm>
    </>
  );
}
