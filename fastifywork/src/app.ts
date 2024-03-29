import Fastify from "fastify";

const server = Fastify()

server.get('/healthcheck', async function(request, response){
    return {status: "OK"}; 
});

async function main(){

    try{
        await server.listen(3000, '0.0.0.0');
        console.log('server ready at http://localhost:3000');
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}

main()