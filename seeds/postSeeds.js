const { Post } = require("../models");

const postData = [
    {"title":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","post_text":"In blandit ultrices enim.","user_id":3},
{"title":"Etiam vel augue.","post_text":"Nam tristique tortor eu pede.","user_id":3},
{"title":"Integer non velit.","post_text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.","user_id":3},
{"title":"Nunc nisl.","post_text":"Nulla tempus.","user_id":1},
{"title":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","post_text":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.","user_id":3},
{"title":"Fusce posuere felis sed lacus.","post_text":"Nulla ac enim.","user_id":3},
{"title":"Morbi vel lectus in quam fringilla rhoncus.","post_text":"Pellentesque eget nunc.","user_id":1},
{"title":"Fusce posuere felis sed lacus.","post_text":"Maecenas pulvinar lobortis est.","user_id":3},
{"title":"Integer tincidunt ante vel ipsum.","post_text":"In blandit ultrices enim.","user_id":2},
{"title":"In eleifend quam a odio.","post_text":"Integer non velit.","user_id":2},
{"title":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.","post_text":"Quisque id justo sit amet sapien dignissim vestibulum.","user_id":2},
{"title":"Pellentesque viverra pede ac diam.","post_text":"Vivamus in felis eu sapien cursus vestibulum.","user_id":3}
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;