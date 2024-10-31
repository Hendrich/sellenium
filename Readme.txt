Langkah 1: Instal Node.js
- https://nodejs.org/en klik download dan ikuti perintah 
- Verifikasi Instalasi:
  node --version
  npm --version

Langkah 2: Buat Proyek Baru
- Buat Direktori:
  mkdir selenium-webdriver-project
  cd selenium-webdriver-project
- Inisialisasi Proyek Node.js:
  npm init -y

Langkah 3: Instal Selenium WebDriver
- Instal Selenium WebDriver:
  npm install selenium-webdriver
- Instal ChromeDriver: Jika Anda menggunakan Chrome, instal juga ChromeDriver:
  npm install chromedriver
- Atau jika menggunakan Firefox:
  npm install geckodriver

Langkah 4: Buat Skrip Pengujian
- Buat File JavaScript Baru:
  Buat file baru, misalnya index.js, di dalam direktori proyek Anda.
- Tambahkan Kode Pengujian:
  Berikut adalah contoh skrip sederhana untuk membuka Google dan melakukan pencarian:
  
const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.RETURN);
        await driver.wait(until.titleIs('Selenium WebDriver - Google Search'), 1000);
    } finally {
        await driver.quit();
    }
}

example();

Langkah 5: Jalankan Skrip
- Jalankan Skrip:
  node index.js


