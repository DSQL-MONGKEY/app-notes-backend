const { nanoid } = require("nanoid");
const notes = require("./notes")

const addNoteHandler = (req, h) => {
    const { title, tag, body } = req.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, 
        tag, 
        body, 
        id, 
        createdAt, 
        updatedAt
    };
    notes.push(newNote)

    const isSuccess = notes.filter( (note) => note.id === id).length > 0;
    if(isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Note success to be added',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }
        const response = h.response({
        status: 'fail',
        message: 'Note fail to added'
    })
        res.code(500);
        return res;
}

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes
    }
})

const getNoteByIdHandler = (req, h) => {
    const { id } = req.params;
    const note = notes.filter( (noteIndex) => noteIndex.id === id)[0];

    if(note !== undefined) {
        return {
            status: 'success',
            data: {
                note
            },
        }
    };

    const response = h.response({
        status: 'fail',
        message: 'note not found',
    });
    response.code(404);
    return response
}

const editNoteByIdHandler = (req, h) => {
    const { id } = req.params;

    const { title, tags, body } = req.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex( (noteIndex) => noteIndex.id === id);
    if(index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt
        };
        const response = h.response({
            status: 'success',
            message: 'Note has been added'
        });
        response.code(200);
        return response;
    };
    const response = h.response({
        status: 'fail',
        message: 'Note fail to added'
    });
    response.code(404);
    return response;

}

const deletNoteByIdHandler = (req, h) => {
    const { id } = req.params;
    const index = notes.filter( (note) => note.id === id );

    if(index !== -1) {
        notes.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Note has been deleted',
        })
        response.code(200);
        return response
    }
}

module.exports = { 
    addNoteHandler, 
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deletNoteByIdHandler
}