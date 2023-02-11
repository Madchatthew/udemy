var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/references', {
    useNewUrlParser:        true,
    useUnifiedTopology:     true 
})

var Post = require('./models/post')
var User = require('./models/user')

// User.findOne({email: 'bob@gmail.com'}).populate('posts').exec(function(err, user) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// })

Post.create({
    title:      'How to cook the best fucking better than the ultimiate burger, burger!',
    content:    'You take the burger, season it and grill it to ultimate better than the ulitmate burger perfection'
}, function(err, post) {
    User.findOne({email: 'bob@gmail.com'}, function(err, foundUser) {
        if(err) {
            console.log(err)
        } else {
            foundUser.posts.push(post)
            foundUser.save(function(err, data) {
                if(err) {
                    console.log(err)
                } else {
                    console.log(data)
                }
            })
        }
    })
})

// User.create({
//     email:  'bob@gmail.com',
//     name:   'Bob Belcher'
// })