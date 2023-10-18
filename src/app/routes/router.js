import express from "express";

const router = express.Router();

const moduleRouter = [
    {
        path : "",
        route : ""
    },
    {
        path : "/blog",
        route : ""
    }
]

moduleRouter.forEach(route => {
    router.use(route.path, route.route)
});

export default router;

