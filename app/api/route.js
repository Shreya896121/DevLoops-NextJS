import nodemailer from "nodemailer";

//NOTES: Created a POST request route to handle contact form submissions and send emails via SMTP using nodemailer
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL, // SMTP mail being fetched for .env.local
        pass: process.env.SMTP_PASSWORD, // SMTP mail password being fetched for .env.local
      },
    });

    //NOTES: Enhanced HTML email template with better styling
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // SMTP receiver mail being  fetched for .env.local
      subject: `📩 New Contact Message from ${name}`,
      html: `
    <div style="
      font-family: Arial, sans-serif;
      padding: 20px;
      border-radius: 10px;
      background: #f7f7f7;
      border: 1px solid #ddd;
      max-width: 600px;
      margin: auto;
    ">
      <h2 style="color: #333; margin-bottom: 10px;">New Contact Message</h2>

      <div style="
        background: white;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #eee;
      ">
        <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
        <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
        <p style="margin-bottom: 10px;"><strong>Message:</strong></p>

        <p style="
          white-space: pre-line;
          background: #fafafa;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #555;
        ">
          ${message}
        </p>
      </div>

      <p style="text-align:center; margin-top: 25px; color:#777;">
        Sent automatically from the DevLoop website contact form.
      </p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    // Log any errors to the server console
    console.error("Email error:", error);
    return Response.json({ success: false, error: "Failed to send email" });
  }
}
