const express = require('express')
const app = express();
const compression = require('compression');
const router = require('./app.router');

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(compression());
app.use(express.static(`${process.cwd()}/public`))

app.use(router);


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).sendFile(`${process.cwd()}/views/error.html`)
    // res.status(error.status || 500).send({
    //     error: {
    //         status: error.status || 500,
    //         message: error.message || 'Internal Server error'
    //     }
    // })
}
)

app.listen(8001);