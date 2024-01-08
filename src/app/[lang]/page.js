import { getDictionary } from '../../../dictionary';

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang);
  return (
   <h1>{lang.MainTitle}</h1>
  )
}
