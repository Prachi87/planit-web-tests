class shopPage {
    clickShopTab() {
        cy.get('#nav-shop > [href="#/shop"]').should('contain.text', 'Shop').click();
    }
    clickFrogBuyButton() {
        Cypress._.times(2, () => {
            cy.get('#product-2 > div > p > [ng-click="add(item)"]').click();
        });
    }
    clickBunnyBuyButton() {
        Cypress._.times(5, () => {
            cy.get('#product-4 > div > p > [ng-click="add(item)"]').click();
        });
    }
    clickValentineBearBuyButton() {
        Cypress._.times(3, () => {
            cy.get('#product-7 > div > p > [ng-click="add(item)"]').click();
        });
    }
    getCartItemNumber(itemCount) {
        cy.get('#nav-cart > [href="#/cart"] > .cart-count').invoke('text').then((count) => {
            expect(parseInt(count), 10).to.equal(itemCount)
            return count;
        });
    }
    getFrogPrice() {
        cy.get('#product-2 > div > p > .product-price').invoke('text').then((price) => {
            cy.readFile('cypress/fixtures/shopPage.json', (err) => {
                if (err) {
                    return console.error(err);
                }
              }).then((data) => {
                  const cost = price.slice(1);
                  data.frogPrice = cost;
                  cy.writeFile('cypress/fixtures/shopPage.json', JSON.stringify(data));
                  cy.readFile('cypress/fixtures/shopPage.json').then((name) => {
                      expect(name.frogPrice).to.equal(cost)
                  });
            });
        });
    }
    getBunnyPrice() {
        cy.get('#product-4 > div > p > .product-price').invoke('text').then((price) => {
            cy.readFile('cypress/fixtures/shopPage.json', (err) => {
                if (err) {
                    return console.error(err);
                }
              }).then((data) => {
                  const cost = price.slice(1);
                  data.bunnyPrice = cost;
                  cy.writeFile('cypress/fixtures/shopPage.json', JSON.stringify(data));
                  cy.readFile('cypress/fixtures/shopPage.json').then((name) => {
                      expect(name.bunnyPrice).to.equal(cost)
                  });
            });
        })
    }
    getValentineBearPrice() {
        cy.get('#product-7 > div > p > .product-price').invoke('text').then((price) => {
            cy.readFile('cypress/fixtures/shopPage.json', (err) => {
                if (err) {
                    return console.error(err);
                }
              }).then((data) => {
                  const cost = price.slice(1);
                  data.valentineBearPrice = cost;
                  cy.writeFile('cypress/fixtures/shopPage.json', JSON.stringify(data));
                  cy.readFile('cypress/fixtures/shopPage.json').then((name) => {
                      expect(name.valentineBearPrice).to.equal(cost)
                  });
            });
        })
    }
    subTotalCost(fprice, bPrice, vbPrice) {
        cy.get('.cart-items > tbody').within(() => {
            cy.get(':nth-child(1) > :nth-child(1)').should('contain.text', 'Stuffed Frog');
            cy.get(':nth-child(1) > :nth-child(2)').invoke('text').then((price) => {
                expect(price).to.equal(`$${fprice}`)
            });
            cy.get(':nth-child(1) > :nth-child(4)').invoke('text').then((subPrice) => {
                const frogPrice = fprice *2
                expect(subPrice).to.equal(`$${frogPrice}`)
            });
            cy.get(':nth-child(2) > :nth-child(1)').should('contain.text', 'Fluffy Bunny');
            cy.get(':nth-child(2) > :nth-child(2)').invoke('text').then((price) => {
                expect(price).to.equal(`$${bPrice}`)
            });
            cy.get(':nth-child(2) > :nth-child(4)').invoke('text').then((subPrice) => {
                const bunnyPrice = bPrice *5
                expect(subPrice).to.equal(`$${bunnyPrice}`)
            });
            cy.get(':nth-child(3) > :nth-child(1)').should('contain.text', 'Valentine Bear');
            cy.get(':nth-child(3) > :nth-child(2)').invoke('text').then((price) => {
                expect(price).to.equal(`$${vbPrice}`)
            });
            cy.get(':nth-child(3) > :nth-child(4)').invoke('text').then((subPrice) => {
                const bearPrice = vbPrice *3
                expect(subPrice).to.equal(`$${bearPrice}`)
            });
        })
    }
    totalCost(fprice, bPrice, vbPrice) {
        const totalCost = (fprice*2)+(bPrice*5)+(vbPrice*3)
        cy.get('.cart-items > tfoot > :nth-child(1) > td > strong').invoke('text').then((cost) => {
            expect(cost).to.equal(`Total: ${totalCost}`)
        })
    }
    clickCart() {
        cy.get('#nav-cart').click();
    }
    cartUrL() {
        cy.url().should('include', '/#/cart')
    }
}

export default new shopPage();