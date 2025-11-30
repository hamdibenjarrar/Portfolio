const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToWebP() {
  const inputPath = path.join(__dirname, 'public', 'img.png');
  const outputPath = path.join(__dirname, 'public', 'img.webp');
  
  console.log('Converting img.png to WebP...');
  
  try {
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ Conversion complete!`);
    console.log(`   Original PNG: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`   WebP: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`   Savings: ${savings}%`);
    
    // Also convert logo.png
    const logoInput = path.join(__dirname, 'public', 'logo.png');
    const logoOutput = path.join(__dirname, 'public', 'logo.webp');
    
    if (fs.existsSync(logoInput)) {
      console.log('\nConverting logo.png to WebP...');
      await sharp(logoInput)
        .webp({ quality: 90, effort: 6 })
        .toFile(logoOutput);
      
      const logoOriginal = fs.statSync(logoInput).size;
      const logoNew = fs.statSync(logoOutput).size;
      const logoSavings = ((logoOriginal - logoNew) / logoOriginal * 100).toFixed(2);
      
      console.log(`✅ Logo conversion complete!`);
      console.log(`   Original PNG: ${(logoOriginal / 1024).toFixed(2)} KB`);
      console.log(`   WebP: ${(logoNew / 1024).toFixed(2)} KB`);
      console.log(`   Savings: ${logoSavings}%`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

convertToWebP();
