import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).send('Servidor sí jala en Vercel 🚀');
  }

  if (req.method === 'POST') {
    try {
      const { prompt } = req.body;

      const response = await client.responses.create({
        model: 'gpt-5.4-nano',
        input: prompt,
      });

      const texto = response.output?.[0]?.content?.[0]?.text || 'No se pudo generar 💔';

      return res.status(200).json({
        historia: texto,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Error generando historia 💀',
      });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
