const { Router } = require('express');

const apiRouter = Router();

apiRouter.get('/health', (req, res) => {
  res.send({
    message: 'Application is awake and healthy',
  });
});

module.exports = apiRouter;
