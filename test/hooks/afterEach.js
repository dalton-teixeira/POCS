var AfterEachHook = module.exports = function (done) {
    this.browser.end(done);
};
