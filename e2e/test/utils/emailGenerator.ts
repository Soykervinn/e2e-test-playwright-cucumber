import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../data/userCredentials.json');

export async function randomEmailGenerator(): Promise<string> {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(data);

    let previousEmail = parsedData.email;
    let randomEmail: string;

    // Genera correos electrónicos aleatorios hasta que obtengas uno que no sea igual al correo electrónico anterior
    do {
      randomEmail = `test${Math.floor(Math.random() * 10000)}@test.com`;
    } while (randomEmail === previousEmail);

    // Actualiza solo la propiedad de correo electrónico del objeto
    parsedData.email = randomEmail;

    // Guarda el objeto completo de nuevo en el archivo JSON
    await fs.writeFile(filePath, JSON.stringify(parsedData, null, 2));

    return randomEmail;
  } catch (error) {
    console.error('Error generating random email:', error);
    throw error;
  }
}