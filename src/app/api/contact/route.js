import nodemailer from "nodemailer";

export const runtime = "nodejs";

const recipient = "shapingotoursperu@gmail.com";

export async function POST(request) {
  try {
    const { name, email, experience, date, travelers, language, website } = await request.json();

    if (website) return Response.json({ ok: true });
    if (!name || !email || !experience || !date || !travelers) return Response.json({ error: "Missing required fields." }, { status: 400 });
    if (!process.env.SMTP_PASSWORD) return Response.json({ error: "Email service is not configured." }, { status: 503 });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_PORT || 465) === "465",
      auth: { user: process.env.SMTP_USER || "contacto@shapingotours.com", pass: process.env.SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: `Shapingo Turs <${process.env.SMTP_USER || "contacto@shapingotours.com"}>`,
      to: process.env.CONTACT_RECIPIENT || recipient,
      replyTo: email,
      subject: `Consulta web · ${experience}`,
      text: [
        "Nueva consulta desde shapingotours.com",
        "",
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Experiencia: ${experience}`,
        `Fecha aproximada: ${date}`,
        `Viajeros: ${travelers}`,
        `Idioma: ${language || "es"}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return Response.json({ error: "Unable to send message." }, { status: 500 });
  }
}
