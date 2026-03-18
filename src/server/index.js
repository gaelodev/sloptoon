import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
  res.send('Servidor si jala');
});

app.post('/generar-historia', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await client.responses.create({
      model: 'gpt-5.4-nano',
      input: prompt,
    });

    const texto =
      response.output?.[0]?.content?.[0]?.text ||
      'No se pudo generar, todo lo que pudo fallar ha fallado💔🌹';

    res.json({
      historia: texto,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error generando historia. Si nosotros nos hubieramos casado... 💔💔' });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
