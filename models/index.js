const Blogger = require('./Blogger');
const Post = require('./Post');

Blogger.hasMany(Post, {
    foreignKey: 'blogger_id',
    onDelete: 'CASCADE'

});

Post.belongTo(Blogger, {
    foreignKey: 'blogger_id'
});

module.exports = {
    Blogger,
    Post
};