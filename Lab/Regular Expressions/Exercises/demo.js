function demo(){
// regular expressions match text by pattern
//     let pattern = /(?<date>\d{4})s/;
    let pattern = /[A-Z][a-z]+/g;
    let text ='Lorem Ipsum is simply dummy text of the printing and typesetting industry.1920s'
    let match1 = pattern.exec(text)//the same like method match()
    // let match2 = text.match(pattern)
    console.log(match1)
    while(match1!==null){
        console.log(match1)
        match1 = pattern.exec(text)

    }
}
demo()
