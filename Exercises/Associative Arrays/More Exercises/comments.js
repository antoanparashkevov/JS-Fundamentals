function comments(data){
    let users = new Set()
    let articles = new Set()
    let webComments= new Map()

    while(data.length>0){
        let element = data.shift();
        if(element.includes('user')){
            let user = element.split(' ')[1]
            users.add(user)

        }

        if(element.includes('article')){
            let article = element.split(' ')[1]
            articles.add(article)
        }
        //'someUser posts on someArticle: NoTitle, stupidComment'
        else if(element.includes(':')){
           element = element.split(": ")
            let userAndArticleInfo = element[0].split(' ')
            let userName = userAndArticleInfo.shift()//takes first element of the array
            let article = userAndArticleInfo.pop()//takes last element of the array
            let titleAndComment = element[1].split(', ')
            let title = titleAndComment.shift()
            let comment = titleAndComment.pop()

            if(users.has(userName) && articles.has(article)){
                if(!webComments.has(article)){
                    webComments.set(article,{})
                }
                webComments.set(article,{
                    user:userName,
                    comment:{
                        title:title,
                        comment:comment
                    }
                });
            }
        }
    }
    let sortArticlesByCountOfComments = Array.from(webComments.keys())
        .sort((a,b)=>(Array.from(webComments.values()).length) - (Array.from(webComments.values()).length))//ascending

sortArticlesByCountOfComments.map(article =>{
    console.log(`Comments on ${article}`)
})

    let sortedUsers = webComments[articles].map(user => console.log(`--- From user ${user.get(user)}: ${user.comment.title} - ${user.comment.comment}`))

    // console.log(users)
    // console.log(articles)
    // console.log(webComments)
    console.log(sortedUsers)

}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])
