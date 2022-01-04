describe('NY Times News', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    describe('Search Flow', () => {
        // test case for wallet generation
        it('should walk in the search process', async () => {
            // search some keyword in text input
            await expect(element(by.id('articles-list'))).toBeVisible();
            await element(by.id('search-input')).typeText('python');

            //scroll to item with index 6 in flatlist and navigate to its details
            const itemId = 'item-6';
            const listId = 'articles-flatlist';
            await waitFor(element(by.id(itemId))).toBeVisible()
                .whileElement(by.id(listId))
                .scroll(100, 'down');
            await element(by.id(itemId)).atIndex(0).tap();

        });
    });
});