import cors from 'cors';
import express, { Request, Response } from 'express'; // Correct import
import WhatsAppRouter from './whatsapp';

const app = express(); // Initialize the app correctly

// Enable CORS
app.use(cors());

app.use(express.json());

app.get('/get', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use(WhatsAppRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
