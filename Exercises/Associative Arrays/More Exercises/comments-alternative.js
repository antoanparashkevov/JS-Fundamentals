function comments(data) {
    let users = new Set()
    let articles = new Set()
    let webComments = {};

    while (data.length > 0) {
        let element = data.shift();
        if (element.includes('user')) {
            let user = element.split(' ')[1]
            users.add(user)
        }
        if (element.includes('article')) {
            let article = element.split(' ')[1]
            articles.add(article)
        }
        //'someUser posts on someArticle: NoTitle, stupidComment'
        else if (element.includes(':')) {
            element = element.split(": ")
            let userAndArticleInfo = element[0].split(' ')
            let userName = userAndArticleInfo.shift()//takes first element of the array
            let article = userAndArticleInfo.pop()//takes last element of the array
            let titleAndComment = element[1].split(', ')
            let title = titleAndComment.shift()
            let comment = titleAndComment.pop()

            if (users.has(userName) && articles.has(article)) {
                if (webComments.hasOwnProperty(article) === false) {
                    webComments[article] = [];
                }
                webComments[article].push({
                    user: userName,
                    comment: {
                        title,
                        comment
                    }
                });
            }
        }
    }
    let sortArticlesByCountOfComments = Object.keys(webComments)
        .sort((a, b) => Object.values(webComments[b]).length - Object.values(webComments[a]).length);//ascending

    sortArticlesByCountOfComments.forEach(article => {
        console.log(`Comments on ${article}`)
        let sortedUsers = webComments[article].sort((a, b) => a.user.localeCompare(b.user))
        sortedUsers.map(user => console.log(`--- From user ${user.user}: ${user.comment.title} - ${user.comment.comment}`))
    })



    // console.log(users)
    // console.log(articles)
    // console.log(sortArticlesByCountOfComments)
    // console.log(webComments[article])

}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])
