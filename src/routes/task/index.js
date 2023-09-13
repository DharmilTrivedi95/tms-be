const express = require('express');
const router = express.Router();
const validator = require('../../lib/validator/validator');
const task = require('../../controllers/task');
const { schema } = require('../../controllers/task/schema');

// To retreive all tasks
router.get('/', task.getAll);

router.get('/:id', task.get);

// To create new task
router.post('/', validator(schema), task.create);

// To update existing task
router.put('/:id', validator(schema), task.edit);

// To delete existing task
router.delete('/:id', task.delete);


module.exports = router;
