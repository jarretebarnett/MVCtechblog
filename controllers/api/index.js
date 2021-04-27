const router = require('express').Router();
const bloggerRoutes = require('./bloggerRoutes');
const postRoutes = require('./postRoutes');

router.use('/bloggers', bloggerRoutes);
router.use('/posts', postRoutes);

module.exports = router;
