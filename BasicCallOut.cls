
String url='https://postman-echo.com/get?foo1=bar1&foo2=bar2';
HttpRequest req = new HttpRequest();
req.setEndpoint(url); // make this url in remote site settings other wise it will fail to send request
req.setMethod('GET');
Http http = new Http();
HTTPResponse res = http.send(req);
System.debug(res.getBody());