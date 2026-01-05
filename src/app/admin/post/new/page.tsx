import { Button } from "@/components/Button";
import { TagIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <>
      <div className='py-16 flex gap-4 items-center'>
        <Button size='sm' variant='default'>
          <TagIcon />
          Confirmar
        </Button>
        <Button size='md' variant='danger'>
          <TagIcon />
          Cancelar
        </Button>
        <Button size='lg' variant='ghost'>
          <TagIcon />
          Beleza
        </Button>
      </div>
    </>
  );
}
