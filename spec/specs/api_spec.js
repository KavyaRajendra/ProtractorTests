var request = require("request");
// var ge = ("api_utils.js")
describe("QA Assesment on GET & POST Calls",function(){
  it("Verification of GET method", function(done){
    let userID = 1
    request({
      method: 'GET',
      "headers": { "content-type": "application/json" },
      "url": "https://jsonplaceholder.typicode.com/posts/"+userID

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.log("Get status code : " +response.statusCode)
        expect(response.statusCode).toBe(200)
        expect(JSON.parse(body)["userId"]).toBe(userID)
        done();
    });
    
  });

  it("Verification of POST method",function(done){
    request({
      method: 'POST',
      "headers": { "content-type": "application/json; charset=UTF-8" },
      "url": "https://jsonplaceholder.typicode.com/posts",
      "body": JSON.stringify({
		"title": "foo",
        "body": "bar",
        "userId": "101"
      })

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.log("After post, status code : " + response.statusCode)
        expect(response.statusCode).toBe(201)
        done();
    });
  });
});