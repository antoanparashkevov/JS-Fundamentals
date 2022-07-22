function companyUsers(input){
let result = {}
    for(let company of input){
        let [nameOfCompany,employee] = company.split(' -> ')
        // console.log(nameOfCompany)
        if(result.hasOwnProperty(nameOfCompany) === false){
                result[nameOfCompany] = new Set();
        }
        
        result[nameOfCompany].add(employee)
    }
    // console.log(result)
    let resultEntries = Object.entries(result)
    // console.log(resultEntries)
    let sorted = resultEntries.sort((a,b)=>a[0].localeCompare(b[0]))
    // console.log(sorted)
    for(let [company,users] of sorted){
        // console.log(users)
        console.log(company)
        for(let user of users){//this is Set() of keys
            console.log(`-- ${user}`)
        }
    }
}
companyUsers(
    [
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )