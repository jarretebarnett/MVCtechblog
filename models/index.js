const Blogger = require('./Blogger');
const Post = require('./Post');

Blogger.hasMany(Post, {
    foreignKey: 'blogger_id',
    onDelete: 'CASCADE'

});

Post.belongsTo(Blogger, {
    foreignKey: 'blogger_id'
});

module.exports = {
    Blogger,
    Post
};