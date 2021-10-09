describe('my first test with jest-puppeteer', () => {
    beforeEach(async () => {
        await page.goto('http://localhost:9999');
    });
    it('can count', async () => {
        // refer to the elements we need
        const counter = await page.$('#counter');
        const btn = await page.$('#btn');

        // before any click we expect 0
        let counterText = await page.evaluate(el => el.textContent, counter)
        expect(+counterText).toEqual(0);

        // cick the button
        await btn.click();

        // expect counter to increament
        counterText = await page.evaluate(el => el.textContent, counter)
        expect(+counterText).toEqual(1);
    });
})