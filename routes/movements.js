const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.list().then(movements => {
        response.json({movements});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(movement => {
        movement
            ? response.json({movement})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(movement => {
        response.status(201).json({movement});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(movement => {
        response.json({movement});
    }).catch(next);
});

module.exports = router;


// const knex = require('../db/knex-config') // TODO: Adjust path as needed!

// // RESTful Knex Router Template:
// const router = module.exports = require('express').Router();

// router.get('/',       getAll)
// router.get('/:id',    getOne)
// router.post('/',      create)
// router.put('/:id',    update)
// router.delete('/:id', remove)

// // TODO: Don't forget data validation/restrictions:
// // - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one

// /

// function getAll(req, res, next) {
//   knex('movements')
//     .select('*')
//     .then(movements => res.status(200).send({data: movements}))
//     .catch(next)
// }

// function getOne(req, res, next) {
//   knex('movements')
//     .select('*')
//     .where({id: req.params.id})
//     .then(([item]) => {
//       if (!item) return res.status(404).send({message: 'Movement not found.' })
//       res.status(200).send({data: item})
//     })
//     .catch(next)
// }

// function create(req, res, next) {
//   // TODO: Validate input data
//   knex('movements')
//     .insert(req.body)
//     .then(() => res.status(201).json({ data: req.body }))
//     .catch(next)
// }

// function update(req, res, next) {
//   // TODO: Validate input data
//   knex('movements')
//     .where({id: req.params.id})
//     .update(req.body)
//     .then(count => count >= 1
//       ? res.status(200).json({ data: req.body })
//       : res.status(410).json())
//     .catch(next)
// }

// function remove(req, res, next) {
//   // TODO: Validate authentication
//   knex('movements').where({id: req.params.id})
//     .delete()
//     .then(count => count >= 1
//       ? res.status(204).json()
//       : res.status(404).json({message: 'Nothing deleted!'}))
//     .catch(next)
// }