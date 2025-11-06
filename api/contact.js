import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(2000),
});

const sanitize = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = ContactSchema.parse(req.body || {});
    // In a real app, persist or forward the sanitized payload here
    const payload = {
      name: sanitize(data.name),
      email: sanitize(data.email),
      subject: sanitize(data.subject),
      message: sanitize(data.message),
      receivedAt: new Date().toISOString(),
    };

  // Example: server-side logging
  console.log('contact_submission', payload);

    return res.status(200).json({ ok: true });
  } catch (err) {
    const message = err?.errors?.[0]?.message || 'Invalid input';
    return res.status(400).json({ error: message });
  }
}
