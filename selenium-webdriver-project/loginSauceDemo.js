const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// Fungsi untuk membuat jeda waktu
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

(async function loginExample() {
  let options = new chrome.Options();
  // Uncomment opsi berikut untuk menjalankan di headless mode
  // options.addArguments('--headless');

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    // Kunjungi situs web
    await driver.get("https://www.saucedemo.com/");
    console.log("Kunjungi situs web");
    await delay(2000); // Jeda 2 detik

    // Masukkan username
    let usernameInput = await driver.findElement(By.id("user-name"));
    await usernameInput.sendKeys("standard_user");
    console.log("Username diisi");
    await delay(2000);

    // Masukkan password
    let passwordInput = await driver.findElement(By.id("password"));
    await passwordInput.sendKeys("secret_sauce");
    console.log("Password diisi");
    await delay(2000);

    // Klik tombol login
    let loginButton = await driver.findElement(By.id("login-button"));
    await loginButton.click();
    console.log("Tombol login diklik");
    await delay(2000);

    // Tunggu sampai URL berubah ke halaman home setelah login
    await driver.wait(until.urlContains("inventory"), 10000);
    console.log("Login berhasil, halaman home terbuka");
    await delay(2000);
  } finally {
    // Tutup browser
    await driver.quit();
  }
})();
