const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deletNoteByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler 
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler
    },
    {
        method: 'PUT',
        path: '/note/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/note/{id}',
        handler: deletNoteByIdHandler
    }
];

module.exports = routes;