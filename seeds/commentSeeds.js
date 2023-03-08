const { Comment } = require('../models');

const commentData = [
{"comment_text":"Nulla ut erat id mauris vulputate elementum.","post_id":3,"user_id":2},
{"comment_text":"Sed vel enim sit amet nunc viverra dapibus.","post_id":4,"user_id":3},
{"comment_text":"Sed sagittis.","post_id":3,"user_id":3},
{"comment_text":"Nunc rhoncus dui vel sem.","post_id":4,"user_id":2},
{"comment_text":"Vivamus in felis eu sapien cursus vestibulum.","post_id":3,"user_id":3},
{"comment_text":"Suspendisse potenti.","post_id":4,"user_id":2},
{"comment_text":"Curabitur in libero ut massa volutpat convallis.","post_id":3,"user_id":3},
{"comment_text":"Duis ac nibh.","post_id":4,"user_id":1}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;