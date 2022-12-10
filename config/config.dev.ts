// config/config.test.ts the configuration file corresponding to the test environment
// https://pro.ant.design/docs/environment-manage/#multiple-environments-and-multiple-configuration-files
import { defineConfig } from 'umi';

/**
 * Exported multi-environment variable naming convention: always capitalize and use underscore to separate words
 * Note: After adding the variable, you need to add the declaration of the variable in src/typing.d.ts, otherwise the IDE will report an error when using the variable.
 */
export default defineConfig({
  define: {
    API_URL: 'https://api-test.xxx.com', // API address
    API_SECRET_KEY: 'XXXXXXXXXXXXXXXX', // API call key
    FILE_UPLOAD_URL: 'http://localhost:4567/file/upload',
  },
});
