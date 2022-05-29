import shopPage from '../pages/shopPage.js';
import shopData from '../fixtures/shopPage.json';

describe('Shop Page Tests', () => {
    before(() => {
        cy.visitPage();
    });
    it('Verify Shop Page is displayed when clicked on Shop tab', () => {
        shopPage.clickShopTab();
    });
    it('Verify cart is empty before adding any items to cart', () => {
        shopPage.getCartItemNumber(0);
    });
    it('Verify Stuffed Frog can be added to the cart', () => {
        shopPage.getFrogPrice();
        shopPage.clickFrogBuyButton();
        shopPage.getCartItemNumber(2);
    });
    it('Verify Fluffy Bunny can be added to the cart', () => {
        shopPage.getBunnyPrice();
        shopPage.clickBunnyBuyButton();
        shopPage.getCartItemNumber(7);
    });
    it('Verify Valentine Bear can be added to the cart', () => {
        shopPage.getValentineBearPrice();
        shopPage.clickValentineBearBuyButton();
        shopPage.getCartItemNumber(10);
    });
    it('Verify cart page is displayed when clicked on Cart button', () => {
        shopPage.clickCart();
        shopPage.cartUrL();
        shopPage.subTotalCost(shopData.frogPrice, shopData.bunnyPrice, shopData.valentineBearPrice);
    });
    it('Verify that total is correct on the cart', () => {
        shopPage.totalCost(shopData.frogPrice, shopData.bunnyPrice, shopData.valentineBearPrice)
    });
})