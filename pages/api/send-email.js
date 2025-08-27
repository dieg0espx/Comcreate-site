import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Hardcoded Gmail credentials (replace with your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'analytics@comcreate.org', // replace with your Gmail address
      pass: 'vdwrkgwkcqnkdjxa', // replace with your Gmail app password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: 'analytics@comcreate.org', // replace with your Gmail address
      to: ['sales@comcreate.org', 'diego@comcreate.org', 'josh@comcreate.org'],
      subject: `New Contact Form Submission from ${name}`,
      text: `\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n      `,
      html: `\n<h2>New Contact Form Submission</h2>\n<p><strong>Name:</strong> ${name}</p>\n<p><strong>Email:</strong> ${email}</p>\n<p><strong>Message:</strong></p>\n<p>${message}</p>\n      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
} 