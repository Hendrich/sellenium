const { Builder, By } = require("selenium-webdriver");

async function tesAlami() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://uitestingplayground.com/ajax");

    console.log("Mengklik tombol biru untuk memanggil data API...");
    await driver.findElement(By.id("ajaxButton")).click();

    console.log("Mencari teks hijau yang muncul...");
    // Di sini Selenium akan LANGSUNG mencari tanpa mau menunggu proses loading selesai
    let successText = await driver.findElement(By.css(".bg-success")).getText();

    console.log("Berhasil! Teksnya adalah: " + successText);
  } catch (error) {
    console.error("\n💥 ERROR ALAMI TERJADI KARENA SELENIUM TERLALU CEPAT:");
    console.error(error.name + ": " + error.message);
  } finally {
    await driver.quit();
  }
}

tesAlami();
