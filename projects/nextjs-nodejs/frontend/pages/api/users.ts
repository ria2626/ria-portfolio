import { NextApiRequest, NextApiResponse } from 'next';

// Mock user data (in a real app, this would come from a database)
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate API delay
    setTimeout(() => {
      res.status(200).json(users);
    }, 500);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}