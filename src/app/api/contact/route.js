import nodemailer from "nodemailer";

export const runtime = "nodejs";

const recipient = "shapingotoursperu@gmail.com";
const sender = "contacto@shapingotours.com";

export async function POST(request) {
  try {
    const body = await request.json();
    if (body.website) return Response.json({ ok: true });

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const experience = String(body.experience || "").trim();
    const date = String(body.date || "").trim();
    const travelers = Number(body.travelers);
    const language = String(body.language || "es").trim();

    if (!body.consent || !name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !experience || experience.length > 160 || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isInteger(travelers) || travelers < 1 || travelers > 30 || language.length > 10) {
      return Response.json({ error: "Invalid contact details." }, { status: 400 });
    }

    if (!process.env.SMTP_PASSWORD) {
      return Response.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER || sender;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port,
      secure: port === 465,
      auth: { user, pass: process.env.SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: `Shapingo Turs <${user}>`,
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
        `Idioma: ${language}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return Response.json({ error: "Unable to send message." }, { status: 500 });
  }
}
