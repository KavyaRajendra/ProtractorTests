const fs = require('fs');
describe('Assessment', function() {
	it('handle JSON file', function() {
		var totalContent = require("../../jsonfiles/base-json.json");
        totalContent["name"] = "Wipro Ltd"
        // write to file
        let data = JSON.stringify(totalContent);
        fs.writeFile("./jsonfiles/newly-created-details.json", data, function(err, data){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
    });
});
