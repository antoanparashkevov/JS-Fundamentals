function companyUsers2(companies) {
  let object = companies.reduce((a, b) => {
    // console.log(a)//first element
    let [company, employees] = b.split(" -> ");
    // console.log(company)
    if (!a.hasOwnProperty(company)) {
      a[company] = [];
    }

    if (!a[company].includes(employees)) {
      a[company].push(employees);
    }
    // console.log(a)
    return a;
  }, {}); //we will push the elements in objects.
  //   console.log(object)
  const sortByCompanyName = (a,b)=>a[0].localeCompare(b[0])
  const idParse = employee=> `-- ${employee}`
  const outputParse = ([company,employee] = e) =>r +=`${company}\n${employee.map(idParse).join('\n')}\n`;
  let r = '';
  Object.entries(object).sort(sortByCompanyName).map(outputParse)
  return r
}
console.log(companyUsers2([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]));
