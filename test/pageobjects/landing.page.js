

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */

    get acceptCookieBtn() {
        return $('#onetrust-accept-btn-handler');
    }

    async acceptCookies() {
        await this.acceptCookieBtn.click();
    }

    get modelIntro1() {
        return $('.a');
    }

    get video1() {
        return $('#Video-1');
    }

    get videoIframe() {
        //return $('video[src*="youtube.com"]');
        //return $('.video-stream');
        return $('iframe[src*="youtube.com"]');
    }

    get carSafetyLink() {
        return $('a[data-di-id="di-id-23be74dd-64ce4e61"]');
    }

    get videoTestimonialHeading() {
        return $('//div[@id="VideoTestimonials-1"]//section/div/div/h2');
    }

    get videoTestimonial1() {
        return $('video[data-autoid="videoTestimonials:video-0"]');
    }

    get videoTestimonial1Playback() {
        return $('video[data-autoid="videoTestimonials:video-0"][controls]');
    }

    get videoTestimonial2() {
        return $('video[data-autoid="videoTestimonials:video-1"]');
    }

    get videoTestimonial2Playback() {
        return $('video[data-autoid="videoTestimonials:video-1"][controls]');
    }

    get videoTestimonial3() {
        return $('video[data-autoid="videoTestimonials:video-2"]');
    }

    get videoTestimonial3Playback() {
        return $('video[data-autoid="videoTestimonials:video-2"][controls]');
    }

    get videoTestimonial4() {
        return $('video[data-autoid="videoTestimonials:video-3"]');
    }

    get videoTestimonial4Playback() {
        return $('video[data-autoid="videoTestimonials:video-3"][controls]');
    }

    async pageDown() {
        await browser.keys(['\uE00F']);
    }

    get decadesOfInnovationHeading() {
        return $('[data-autoid="imageWithText:title"]');
    }

    get learnMoreLink() {
        return $('a.cn');
    }

    get exploreOurModelsHeading() {
        return $('[data-autoid="productListCarousel:title"]');
    }

    get model1Name() {
        return $('//a[@data-autoid="productListCarouselItem-0"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model1RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-0"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    get model2Name() {
        return $('//a[@data-autoid="productListCarouselItem-1"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model2RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-1"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    get model3Name() {
        return $('//a[@data-autoid="productListCarouselItem-2"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model3RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-2"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    get model4Name() {
        return $('//a[@data-autoid="productListCarouselItem-3"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model4RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-3"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    get nextButton() {
        return $('[data-autoid="springCarouselNextButton"]');
    }

    get model5Name() {
        return $('//a[@data-autoid="productListCarouselItem-4"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model5RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-4"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    get model6Name() {
        return $('//a[@data-autoid="productListCarouselItem-5"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model6RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-5"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    get model7Name() {
        return $('//a[@data-autoid="productListCarouselItem-6"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model7RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-6"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    get model8Name() {
        return $('//a[@data-autoid="productListCarouselItem-7"]/div/h3/span[@data-autoid="productListCarouselItem:modelName"]');
    }

    get model8RechargeType() {
        return $('//a[@data-autoid="productListCarouselItem-7"]/div/h3/span[@data-autoid="productListCarouselItem:rechargeType"]');
    }

    open() {
        return super.open('a-million-more');
    }
}

module.exports = new LandingPage();
