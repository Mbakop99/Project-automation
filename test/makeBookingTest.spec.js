const { test, expect } = require('@playwright/test');

test('Booking form submission', async ({ page }) => {

     // go to the website
     await page.goto('https://kitmon360.de');

     await page.click('text= Jetzt buchen');

     await page.waitForURL('**/360-photobooth-buchungsanfrageformular/');

     await page.fill('#wpforms-352-field_0', 'Sandra');

     await page.fill('#wpforms-352-field_16', '16.07.1999');

     await page.fill('#wpforms-352-field_21', 'Essen');

     await page.fill('#wpforms-352-field_20', 'Geburtstag');
     
     await page.fill('#wpforms-352-field_4', '3 Stunden');

     await page.fill('#wpforms-352-field_22', 'hip pop');

     await page.fill('#wpforms-352-field_12', 'Seien sie Pünklich');

     await page.fill('#wpforms-352-field_1', 'Sandra@gmail.com');

     await page.check('#wpforms-352-field_15_1');

     await page.click('#wpforms-submit-352');




     
     
     

     
     
    
});



    
