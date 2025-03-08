const { test, expect } = require('@playwright/test');

test('navigation header contains expected links', async ({ page }) => {

    // go to the website
    await page.goto('https://kitmon360.de');
    

    const navMenu = page.locator('.header-navbar__middle nav.header-navbar__menu ul#menu-header');

    await expect(navMenu).toBeVisible();

    await expect(navMenu).toContainText('Home');
    await expect(navMenu).toContainText('Preise');
    await expect(navMenu).toContainText('Buchen');
    await expect(navMenu).toContainText('Kontakt');
    await expect(navMenu).toContainText('Über uns');
   

    
});