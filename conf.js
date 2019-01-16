exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["./spec/specs/*spec.js"],


    onPrepare: function() {
        var ChercherTechJasmineReporter = require('chercher-tech-jasmine-reporter');
    
        jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
            reportName:'Assessment',
            showSkipped:true,
            showLineChart:true
        }));
    }
  }