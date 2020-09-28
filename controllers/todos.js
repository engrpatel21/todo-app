const Todo = require('../models/todo')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteTodo
}

async function index(req, res) {
    const todos = await Todo.find({})
    res.status(200).json(todos)
}


function create(req, res) {
    Todo.create(req.body)
        .then(todo => res.json(todo))
     
}

async function show(req, res) {
    const todo = await Todo.findById(req.params.id)
    res.status(200).json(todo)
}

function update(req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(todo => res.json(todo))
        .catch(err => res.status(500).json(err))
}

async function deleteTodo(req, res) {
    const deletedPuppy = await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedPuppy)
}