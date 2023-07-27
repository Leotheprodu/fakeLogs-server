const { matchedData } = require('express-validator');
const { usersModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { resOkData } = require('../utils/handleOkResponses');
/**
 * Insertar un registro!
 * @param {*} req
 * @param {*} res

*/
const createItem = async (req, res) => {
    try {
        const ip =
            req.ip ||
            req.header('x-forwarded-for') ||
            req.connection.remoteAddress;
        const body = matchedData(req);
        body.ip = ip;
        const checkUser = await usersModel.findOne({
            where: { user: body.user },
        });
        if (checkUser) {
            await checkUser.update(body);
            resOkData(res, { message: 'Actualizado con exito' });
        } else {
            await usersModel.create(body);
            resOkData(res, { message: 'Creado con exito' });
        }
    } catch (error) {
        console.error(error);
        handleHttpError(res, 'Error guardar datos');
    }
};
module.exports = {
    createItem,
};
