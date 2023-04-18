const TicketService = require('../service/email-service');

const createTicket = async (req,res) =>{
   try {
    const response = await TicketService.createTicket(req.body);
    return res.status(201).json({
        success:true,
        message:'succesfully created ticket in databases',
        err:{},
        data:response
    });
   } catch (error) {
    return res.status(500).json({
        success:false,
        message:'cannot created ticket in databases',
        err:error,
        data:{}
    });
   }
}
module.exports = {
    createTicket
}