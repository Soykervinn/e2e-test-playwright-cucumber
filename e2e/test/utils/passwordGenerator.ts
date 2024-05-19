import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../data/userCredentials.json');

export async function randomPasswordGenerator(): Promise<string> {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const parsedData = JSON.parse(data);
  
      let previousPassword = parsedData.password;
      let randomPassword: string;
  
      // Genera contraseñas aleatorias hasta que obtengas una que no sea igual a la contraseña anterior
      do {
        randomPassword = Math.random().toString(36).substr(2, 8);
      } while (randomPassword === previousPassword);
  
      // Actualiza solo la propiedad de contraseña del objeto
      parsedData.password = randomPassword;
  
      // Guarda el objeto completo de nuevo en el archivo JSON
      await fs.writeFile(filePath, JSON.stringify(parsedData, null, 2));
  
      return randomPassword;
    } catch (error) {
      console.error('Error generating random password:', error);
      throw error;
    }
  }