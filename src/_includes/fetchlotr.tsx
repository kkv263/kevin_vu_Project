export async function fetchCollection(collection: string, id:string='') {
  const res = await fetch(`https://the-one-api.dev/v2/${collection}/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY,
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}