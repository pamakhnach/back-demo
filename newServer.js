const http = require('http');
const fs = require('fs');

const server = http.createServer(async (request, response) => {


    switch (request.url) {
        case '/students' : {
            try {
                const data = await readFile('pages/about.html')
                response.write(data)
                response.end()
            } catch (err) {
                response.write('something wrong, 500')
                response.end()
            }
            break;
        }
        case '/about' : {
            response.write('ABOUT')
            response.end()
            break;
        }
        case '/home' : {

            response.write('home')
            response.end()
            break;
        }
        case '/feedback' : {
            response.statusCode = 400
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify({error: 'incorrect text length'}))
            break;
        }
        default:
            response.write('NOT FOUND 404')
            response.end()
    }
});

server.listen(3003)