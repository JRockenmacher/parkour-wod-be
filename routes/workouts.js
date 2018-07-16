const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.list().then(workouts => {
        response.json({workouts});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(workout => {
        workout
            ? response.json({workout})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(workout => {
        response.status(201).json({workout});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(workout => {
        response.json({workout});
    }).catch(next);
});

module.exports = router;
