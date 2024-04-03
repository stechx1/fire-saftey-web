import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      category,
      noOfFloors,
      noOfEmployees,
      firstName,
      lastName,
      email,
      Company,
      postcode,
      phoneNumber,
      previouslyEmployed,
    } = req.body;
    console.log('Rquest: ', req.body);
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailData = {
      from: '"Red Fire Safety" sunfunpower14@gmail.com>',
      to: process.env.NEXT_PUBLIC_TO_EMAIL,
      subject: 'Enquiry from Red Fire Safety Website',
      html: `
        <h1>Completed form details</h1>
        <p>Category: ${category}</p>
        <p>No of Floors: ${noOfFloors}</p>
        <p>No of Employees: ${noOfEmployees}</p>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Company: ${Company}</p>
        <p>Postcode: ${postcode}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Previously Employed: ${previouslyEmployed}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailData);
      console.log('Email would be sent from here');
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
