import path from 'path';
import fs from 'fs/promises';
import { Products } from '@/global/types';

export const getData = async (): Promise<Products> => {
    const dataPath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(dataPath);

    return JSON.parse(jsonData.toString());
};
