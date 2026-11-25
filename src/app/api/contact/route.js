import nodemailer from "nodemailer";
import landing from "@/data/landing.json";

export const runtime = "nodejs";

const recipient = "shapingotoursperu@gmail.com";
const sender = "contacto@shapingotours.com";
const experienceNames = {
  "programa-4-dias": "Programa Amazonía 4 días / 3 noches",
  "lago-sandoval": "Lago Sandoval",
  "rio-tambopata": "Safari por el río Tambopata",
  "fauna-aves": "Observación de fauna y aves",
  "encuentro-amazonico": "Encuentro amazónico",
  "caminata-nocturna": "Safari nocturno",
  colpa: "Collpa de Guacamayos",
  "paseo-kayak": "Paseo en kayak",
  "sabores-comunidad": "Inmersión gastronómica",
  "lago-yacumama": "Lago Yacumama",
  "collpa-loros": "Collpa de Loros",
  otra: "Quiero una recomendación",
};
const languageNames = { es: "Español", en: "Inglés", it: "Italiano", fr: "Francés", "zh-cn": "Chino" };
const roomNames = { "": "Sin preferencia", individual: "Individual", doble: "Doble", matrimonial: "Matrimonial", triple: "Triple", recomendacion: "Necesita una recomendación" };
const legacyExperienceNames = new Map(
  Object.values(landing).flatMap(({ contact }) =>
    contact.experienceOptions.slice(1).map((label, index) => [label, landing.es.contact.experienceOptions[index + 1]])
  )
);

export async function POST(request) {
  try {
    const body = await request.json();
    if (body.website) return Response.json({ ok: true });

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const country = String(body.country || "").trim();
    const phone = String(body.phone || "").trim();
    const selectedExperience = String(body.experience || "").trim();
    const experience = Object.hasOwn(experienceNames, selectedExperience)
      ? experienceNames[selectedExperience]
      : legacyExperienceNames.get(selectedExperience);
    const date = String(body.date || "").trim();
    const travelers = Number(body.travelers);
    const selectedRoom = String(body.room || "").trim();
    const room = Object.hasOwn(roomNames, selectedRoom) ? roomNames[selectedRoom] : null;
    const message = String(body.message || "").trim();
    const selectedLanguage = String(body.language || "es").trim();
    const language = Object.hasOwn(languageNames, selectedLanguage) ? languageNames[selectedLanguage] : null;

    if (!body.consent || !name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !country || country.length > 120 || phone.length > 40 || !experience || !room || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isInteger(travelers) || travelers < 1 || travelers > 30 || message.length > 1500 || !language) {
      return Response.json({ error: "Invalid contact details." }, { status: 400 });
    }

    if (!process.env.SMTP_PASSWORD) {
      return Response.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const [year, month, day] = date.split("-");
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
        `País: ${country}`,
        `WhatsApp o teléfono: ${phone || "No indicado"}`,
        `Experiencia: ${experience}`,
        `Habitación: ${room}`,
        `Fecha aproximada: ${day}/${month}/${year}`,
        `Viajeros: ${travelers}`,
        `Idioma del formulario: ${language}`,
        `Mensaje: ${message || "Sin mensaje adicional"}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return Response.json({ error: "Unable to send message." }, { status: 500 });
  }
}
