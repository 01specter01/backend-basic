const http = require("http");

console.log("starting server...");

const server = http.createServer((request, response) => {
    console.log("getting a request!", request.method, request.url);

    switch (request.url) {
        case "/photo": {
            const photos = [];
            console.log("requested photos");
            response.setHeader;
            response.write(JSON.stringify({ photos }));
            response.end();
            break;
        }
        case "/albums": {
            console.log("requested albums");
            response.write("my albums");
            response.end();
        }
    }
});
