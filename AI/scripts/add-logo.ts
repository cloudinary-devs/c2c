import cloudinary from '@/lib/cloudinary';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const validateEnv = (): void => {
  const errors: string[] = [];

  const requiredEnvVars: string[] = [
    'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME',
    'NEXT_PUBLIC_CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET',
    'NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET',
    'NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME',
  ];

  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    errors.push('Missing required environment variables:');
    missingEnvVars.forEach((envVar) => errors.push(`  - ${envVar}`));
  }

  if (process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET !== 'baseball-cap-store') {
    errors.push(
      `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET must be set to "baseball-cap-store" ` +
        `(current: "${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'not set'}")`,
    );
  }

  if (process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME !== 'baseball-cap-store') {
    errors.push(
      `NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME must be set to "baseball-cap-store" ` +
        `(current: "${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME || 'not set'}")`,
    );
  }

  if (errors.length > 0) {
    console.error('⚠️ Environment variable validation failed:\n');
    errors.forEach((err) => console.error(err));
    process.exit(1);
  }

  console.log('✅ All required environment variables are set correctly');
};

validateEnv();

const logo = join(__dirname, '../logo/logo.png');
try {
  const upload = await cloudinary.uploader.upload(logo, {
    public_id: 'capital-caps-logo',
    folder: process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME,
    upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  });
  console.log(
    '✅ Logo uploaded successfully. This is the response from the Cloudinary Upload API:',
    upload,
  );
} catch (error) {
  console.error('⚠️ Failed to upload logo:', error);
}
