import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get(
  '/',
  (req: Request, res: Response): Response =>
    res.json({ message: 'Hello Typescript' }),
);

app.listen(3333, () => {
  console.log('Server Running');
});
