const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config(); // { debug: true }

const NETFLIXURL = process.env.NETFLIXURL;
const NETFLIXUSERNAME = process.env.NETFLIXUSERNAME;
const NETFLIXPASSWORD = process.env.NETFLIXPASSWORD;

(async () => {
  try {
    const minimal_args = [
      '--autoplay-policy=user-gesture-required',
      '--disable-background-networking',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-breakpad',
      '--disable-client-side-phishing-detection',
      '--disable-component-update',
      '--disable-default-apps',
      '--disable-dev-shm-usage',
      '--disable-domain-reliability',
      '--disable-extensions',
      '--disable-features=AudioServiceOutOfProcess',
      '--disable-hang-monitor',
      '--disable-ipc-flooding-protection',
      '--disable-notifications',
      '--disable-offer-store-unmasked-wallet-cards',
      '--disable-popup-blocking',
      '--disable-print-preview',
      '--disable-prompt-on-repost',
      '--disable-renderer-backgrounding',
      '--disable-setuid-sandbox',
      '--disable-speech-api',
      '--disable-sync',
      '--hide-scrollbars',
      '--ignore-gpu-blacklist',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-default-browser-check',
      '--no-first-run',
      '--no-pings',
      '--no-sandbox',
      '--no-zygote',
      '--password-store=basic',
      '--use-gl=swiftshader',
      '--use-mock-keychain',
    ];

    // Open new browswer and set timeout
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      userDataDir: '../../../.cache',
      args: minimal_args
    })

    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(0);

    await page.goto(NETFLIXURL)

    await page.type('input#id_userLoginId', NETFLIXUSERNAME)
    await page.type('input#id_password', NETFLIXPASSWORD)

    await Promise.all([
      page.click('button.login-button'),
      page.waitForNavigation()
    ]);

    // await navigating to Adult profile

    // Wait for
    const adultProfile = 'a.profile-link[tabindex="0"]';
    await page.waitForSelector(adultProfile);
    await page.click(adultProfile);

    // Wait for
    const pinInput1 = "input[data-uia='pin-number-0']";
    const pinInput2 = "input[data-uia='pin-number-1']";
    const pinInput3 = "input[data-uia='pin-number-2']";
    const pinInput4 = "input[data-uia='pin-number-3']";

    await page.waitForSelector(pinInput1);
    await page.click(pinInput1);
    await page.type(pinInput, "1");

    await page.waitForSelector(pinInput2);
    await page.type(pinInput, "4");

    await page.waitForSelector(pinInput3);
    await page.type(pinInput, "7")

    await page.waitForSelector(pinInput4);
    await page.type(pinInput, "0")

    // // Wait for
    // const dpt__ES = '#dpt__ES';
    // await page.waitForSelector(dpt__ES);
    // await page.click(dpt__ES);

    // // Wait for
    // const wrk__PayrollandBenefits = '#wrk__PayrollandBenefits';
    // await page.waitForSelector(wrk__PayrollandBenefits);
    // await page.click(wrk__PayrollandBenefits);

    // // Wait for
    // const actvty__ESQLVSTAT = '#actvty__ESQLVSTAT';
    // await page.waitForSelector(actvty__ESQLVSTAT);
    // await page.click(actvty__ESQLVSTAT);

    // // await Leave Status input
    // await page.waitForSelector('#CURRENT_BAL-_0_E')

    // // Access to the raw HTML for input
    // const leaveStatus = await page.evaluate(() => {
    //   return {
    //     html: document.getElementById('CURRENT_BAL-_0_E').value
    //   };
    // });

    // console.log(leaveStatus.html)
  } catch (error) {
    console.error(error)
  }
})();
