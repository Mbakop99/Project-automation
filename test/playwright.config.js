/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */

const config = {
    testDir: './test', 
    timeout: 8000, 
    use:{
        baseURL: 'https://kitmon360.de',
        headless: false, 
        screenshot: 'only-on-failure',
        launchOptions: {
            slowMo: 1000,
        },

    },

    projects: [
         { 
            name: 'Chromium',
            use: { browserName: 'chromium' },
         }, 
         {
             name: 'Firefox', 
             use: { browserName: 'firefox' },
         },
             
         { 
              name: 'WebKit', 
              use: { browserName: 'webkit' }, 
         }, 
        ],
     };
   