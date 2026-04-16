export const generateTale = async (prompt: string) => {
  const res = await fetch('http://localhost:3000/generar-tale', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  return await res.json();
};
