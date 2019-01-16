const fs = require('fs');
var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;
var basefile = "./xmlfiles/base-xml.xml";
var target = "./xmlfiles/new-data.xml";

describe('QA Assesment', function() {
    it('XML file', function() {
        
        fs.readFile(basefile, "utf-8", function (err,data) 
        {
            if(err) console.log(err)
            var customerConfig = new DOMParser().parseFromString(data);
            customerConfig.getElementsByTagName("company")[0].childNodes[0].data = "Wipro Ltd";
            var xmlString = new XMLSerializer().serializeToString(customerConfig);
            fs.writeFile(target, xmlString, function(err, data){
                if (err) console.log(err);
                console.log("Successfully Written to XML File.");
            });
        });
	});
});