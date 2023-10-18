import express from "express";
import cors from "cors";
import httpStatus from "http-status";
// import router from "./app/routes/router.js";

const app = express();

// use the middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends : true}));

// app.use('/api/v1', router);
// app.get(env)

app.get("/", (req,res) =>{
    res.send("Server is Running....");
});

// app.use((err, req, res, next) => {
//     res.status(err.status || httpStatus.NOT_FOUND).send({
//         error : {
//             status : err.status || httpStatus.NOT_FOUND,
//             message : err.message
//         }
//     })
// })

app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        success : false,
        message : "Route Not Found!!",
        errorMessages : [
            {
                path : "",
                message : "Route Not Found!!"
            }
        ]
    })
})

export default app;