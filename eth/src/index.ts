require('dotenv').config();

import Unity from './Unity';

const unity = new Unity();

unity.startMonitoring().catch((err) => {
  console.error(`Exit with ${err}`);
});
