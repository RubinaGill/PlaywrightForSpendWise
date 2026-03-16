import * as fs from 'fs';
import path from 'path';

async function globalTeardown() {
  const storagePath = path.join(__dirname, '../storage/storageState.json');

  if (fs.existsSync(storagePath)) {
    fs.unlinkSync(storagePath);
    console.log('storageState.json deleted after test execution');
  } else {
    console.log('storageState.json not found, nothing to delete');
  }
}

export default globalTeardown;