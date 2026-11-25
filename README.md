# Shapingo Turs

Sitio Next.js con servidor Node.js (`npm run build` y `npm run start`).

## Formulario de contacto

El formulario envía consultas desde `contacto@shapingotours.com` a `shapingotoursperu@gmail.com` mediante la ruta `/api/contact/` y el SMTP de Hostinger. La contraseña SMTP se guarda solo en el servidor.

Para publicar:

1. Publicar la aplicación en un alojamiento que ejecute Next.js con Node.js. Subir solo los archivos de `out/` no permite que funcione `/api/contact/`.
2. Configurar en el servidor las variables de `.env.example`, especialmente `SMTP_PASSWORD`. No incluir la contraseña en el repositorio ni en variables `NEXT_PUBLIC_`.
3. Enviar una consulta de prueba y comprobar que llega al buzón, que muestra los datos correctos y que «Responder» usa el correo del visitante.

Si el servicio no acepta una consulta, la web ofrece el mensaje preparado para enviarlo por WhatsApp o, en chino, desde la aplicación de correo.
