
const Ticket = require('../models/tickets');

var db = [
    {
        id: 0,
        project_id: 0,
        developer_id: 0,
        title: 'ticket',
        description: 'Same ticket description', 
        type: 'bug',
        priority: 'high',
        status: 'inprogress',
        due_date: '00-00-00',
        created_at: '00-00-00',
        updated_at: '00-00-00'
    }
];

exports.invalidRoute = (req, res, next) => {
    res.send('Invalid route');
}


exports.getAllTickets = async (req, res, next) => {

    // Return list of all tickets
    console.log("getAllTickets: [GET] /tickets");
    try {
        const ALL = await Ticket.findAll();
        console.log("OK getAllTickets TICKET: ", ALL.map(i => i.dataValues));
        return res.status(200).json(ALL);
    } catch (error) {
        console.log('ERROR in getAll ' + "TICKET:", error);
        return res.status(500).json(error);
    }

    // res.send(db);
};

exports.getTicketById = async (req, res, next) => {

    let id = req.params.id;

    console.log("getTicketById: [GET] /users/:id");
    try {
        const t = await Ticket.findByPk(id);
        console.log("OK getTicketById TICKET: ", t.dataValues);
        return res.status(200).json(t);
    } catch (error) {
        console.log('ERROR in getTicketById ' + "TICKET:", error);
        return res.status(500).json(error);
    }


    // // Return ticket by id
    // var lookup = {};
    // for (var i = 0, len = db.length; i < len; i++) {
    //     lookup[db[i].id] = db[i];
    // }

    // if (!lookup[req.params.id]) {
    //     res.status(500).json({
    //         error: 'Invalid request - id was invalid'
    //     });
    // }
    // else {
    //     res.json(lookup[req.params.id]);
    // }
    

};

exports.createNewTicket = async (req, res, next) => {

    let {title, description, type, priority, status, due_date} = req.body;

    try {
        const TICKET_MODEL = {
            title: title,
            description: description,
            type: type,
            priority: priority,
            status: status,
            due_date: due_date
        }

        try {
            const ticket = await Ticket.create(TICKET_MODEL);
            console.log("OK createNewTicket TICKET: ", ticket);
            return res.status(201).json(ticket);
        } catch (error) {
            console.log('ERROR in createNewTicket ' + "TICKET:", error);
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(400).json("Bad Request");
    }


    // db.push({
    //     id: parseInt(Date.now() + Math.random()),
    //     title: title,
    //     description: description,
    //     type: type,
    //     priority: priority,
    //     status: status,
    //     due_date: due_date
    // });
    
    // res.json({
    //     id: db.length,
    //     title: title,
    //     description: description
    // });
}

exports.deleteTicketById = async (req, res, next) => {

    console.log("[DELETE] /tickets/:id");

    let {id} = req.body;

    try {
        const t = await Ticket.destroy({ where: { id: id } });
        console.log("OK deleteTicketById Ticket: ", );
        return res.status(200).json(t);
    } catch (error) {
        console.log('ERROR in deleteTicketById ' + "TICKET:", error);
        return res.status(500).json(error);
    }

    // var lookup = {};
    // for (var i = 0, len = db.length; i < len; i++) {
    //     lookup[db[i].id] = db[i];
    // }

    // if (!lookup[req.body.id]) {
    //     res.status(500).json({
    //         error: 'Invalid delete request - id was invalid'
    //     });
    // }
    // else {
    //     let index = db.map( item => {
    //         return item.id;
    //     }).indexOf(req.body.id);
        
    //     db.splice(index, 1);

    //     res.send('Delete successful: index ' + req.body.id);
    // }
}