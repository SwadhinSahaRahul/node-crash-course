const hostDetails = (req, res, next) => {
    console.log('new request made');
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    next();
};

module.exports = {
    hostDetails
};