import express from 'express';
import bodyParser from 'body-parser';
import graphQLServer from './src/';

const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Accept');
  
    if(req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
});

app.use(bodyParser.json());

graphQLServer.applyMiddleware({ app });

app.listen({ port:process.env.PORT }, () => {
    console.log(`Server ready at http://localhost:${ process.env.PORT }${ graphQLServer.graphqlPath }`)
});


