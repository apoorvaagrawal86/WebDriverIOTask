const LandingPage = require('../pageobjects/landing.page');


describe('My Landing application', () => {

    it('should accept the cookies', async () => {
        await LandingPage.open();
        await LandingPage.acceptCookies();
    });

    it('should have the right title', async () => {
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('A million more | Volvo Cars - International');
        await expect(LandingPage.modelIntro1).toHaveTextContaining(
            'Ideas that change the world are often the most controversial.');
    });

    it('should verify A-million-more video appears on clicking the videolink', async () => {
        await LandingPage.video1.click();
        await expect(LandingPage.videoIframe).toBeExisting();
    });

    it('should verify the car safety link', async () => {
        await expect(LandingPage.carSafetyLink).toHaveHrefContaining('car-safety');
    })

    it('should verify the video testimonials heading', async () => {
        await expect(LandingPage.videoTestimonialHeading).toHaveText('One of a million');
    })

    it('should verify the video testimonials videos and play them', async () => {
        await LandingPage.pageDown();
        await LandingPage.pageDown();
        await expect(LandingPage.videoTestimonial1).toBeExisting();
        await LandingPage.videoTestimonial1.click();
        await expect(LandingPage.videoTestimonial1Playback).toBeExisting();
        await expect(LandingPage.videoTestimonial2).toBeExisting();
        await LandingPage.videoTestimonial2.click();
        await expect(LandingPage.videoTestimonial2Playback).toBeExisting();
        await LandingPage.pageDown();
        await expect(LandingPage.videoTestimonial3).toBeExisting();
        await LandingPage.videoTestimonial3.click();
        await expect(LandingPage.videoTestimonial3Playback).toBeExisting();
        await expect(LandingPage.videoTestimonial4).toBeExisting();
        await LandingPage.videoTestimonial4.click();
        await expect(LandingPage.videoTestimonial4Playback).toBeExisting();
    })

    it('should verify the decades of innovation section with link', async () => {
        await LandingPage.pageDown();
        await expect(LandingPage.decadesOfInnovationHeading).toHaveText('Decades of innovation');
        await expect(LandingPage.learnMoreLink).toHaveHrefContaining('/intl/v/car-safety/safety-heritage');
    })

    it('should verify the heading and content of models section', async () => {
        await LandingPage.pageDown();
        await expect(LandingPage.exploreOurModelsHeading).toHaveText('Explore our models');
        await expect(LandingPage.model1Name).toHaveText('XC90 Recharge');
        await expect(LandingPage.model1RechargeType).toHaveText('plug-in hybrid');
        await expect(LandingPage.model2Name).toHaveText('XC60 Recharge');
        await expect(LandingPage.model2RechargeType).toHaveText('plug-in hybrid');
        await expect(LandingPage.model3Name).toHaveText('XC40 Recharge');
        await expect(LandingPage.model3RechargeType).toHaveText('plug-in hybrid');
        await expect(LandingPage.model4Name).toHaveText('XC40 Recharge');
        await expect(LandingPage.model4RechargeType).toHaveText('pure electric');
        await LandingPage.nextButton.click();
        await expect(LandingPage.model5Name).toHaveText('V90 Recharge');
        await expect(LandingPage.model5RechargeType).toHaveText('plug-in hybrid');
        await LandingPage.nextButton.click();
        await expect(LandingPage.model6Name).toHaveText('V60 Recharge');
        await expect(LandingPage.model6RechargeType).toHaveText('plug-in hybrid');
        await LandingPage.nextButton.click();
        await expect(LandingPage.model7Name).toHaveText('S90 Recharge');
        await expect(LandingPage.model7RechargeType).toHaveText('plug-in hybrid');
        await LandingPage.nextButton.click();
        await expect(LandingPage.model8Name).toHaveText('S60 Recharge');
        await expect(LandingPage.model8RechargeType).toHaveText('plug-in hybrid');
    })

});