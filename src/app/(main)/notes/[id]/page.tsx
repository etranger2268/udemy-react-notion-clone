import { Suspense } from 'react';

type NotesIdPageProps = {
  params: Promise<{ id: string }>;
};

export default function NotesIdPage({ params }: NotesIdPageProps) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NotesIdPageContent params={params} />
    </Suspense>
  );
}

async function NotesIdPageContent({ params }: NotesIdPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { id } = await params;
  return <h1>NotesId Page #{id}</h1>;
}
