import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    return res.status(200).send('Servidor si jala');
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { prompt } = req.body;

    const response = await client.responses.create({
      model: 'gpt-5.4-nano',
      input: prompt,
    });

    const texto =
      (response.output?.[0] as any)?.content?.[0]?.text ??
      'No se pudo generar, todo lo que pudo fallar ha fallado💔🌹';

    return res.status(200).json({
      historia: texto,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error generando historia. Si nosotros nos hubieramos casado... 💔💔',
    });
  }
}
