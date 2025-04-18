import type { MetaFunction } from '@remix-run/node';
import { useActionData, useFetcher, useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
    { property: 'og:url', content: '' },
    { property: 'og:site_name', content: '' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ko_KR' }
  ];
};

// entry load action
export async function loader() {
  return { state: 'SUCCESS', data: [] };
  return { state: 'FAIL', data: [] };
}

export default function Index() {
  const loader = useLoaderData();
  console.log(loader);
  const action = useActionData();
  console.log(action);

  // const fetcher = useFetcher();
  // console.log(fetcher);
  return (
    <main className='flex h-screen items-center justify-center relative'>
      <button className='btn btn-primary'>Hello world!</button>
    </main>
  );
}

// form req action
export async function action({ request }: any) {
  const formData = await request.formData();
  return { state: 'SUCCESS', data: [] };
  return { state: 'FAIL', data: [] };
}
