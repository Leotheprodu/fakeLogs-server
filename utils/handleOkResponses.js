/**
 * Respuesta para enviar unicamente datos para mostrar al cliente
 * @param {*} res
 * @param {object} data
 */
const resOkData = (res, data) => {
    res.send(data);
};

module.exports = { resOkData };
