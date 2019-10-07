const express = require('express');
const TodoService = require('../service');

const router = express.Router();

router.get('/todos', TodoService.list);
router.get('/todos/:id', TodoService.get);
router.delete('/todos/:id', TodoService.remove);
router.post('/todos', TodoService.createOrUpdate);
router.put('/todos/:id', TodoService.createOrUpdate);

module.exports = {
    api: {
        todo: router
    }
};