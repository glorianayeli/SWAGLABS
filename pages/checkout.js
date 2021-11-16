const FRISTNAME = {id: "first-name"};
const LASTNAME = {id: "last-name"};
const POSTALCODE = {id: "postal-code"};
const CONTINUE = {id: "continue"};
const FINISH = {id:"finish"};

class checkout {
    constructor(driver){
        this.driver = driver;
    }
    async formCheckout(){
        await this.driver.findElement(FRISTNAME).sendKeys('Elvira');
        await this.driver.findElement(LASTNAME).sendKeys('Lopez');
        await this.driver.findElement(POSTALCODE).sendKeys('28219');
        await this.driver.findElement(CONTINUE).click(); 
    }
    async checkoutOverview(){
        await this.driver.findElement(FINISH).click();
        return await this.driver.getCurrentUrl();
    }
}

module.exports = checkout;