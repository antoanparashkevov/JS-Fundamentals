function companyUsers3(companies) {
  let object = companies.reduce((a, b) => {
    // console.log(a)//take first element only
    // console.log(b)//take others element but from second
    let [company, users] = b.split(" -> ");
    if (!a.hasOwnProperty(company)) {
      a[company] = [];
    }
    if (!a[company].includes(users)) {
      a[company].push(users); //because this is an array
    }
    return a;
  }, {});
  // return object
  function sortByCompanyName(a, b) {
    return a[0].localeCompare(b[0]);
  }
  function idParse(employee) {
    return `-- ${employee}`;
  }
  function outputParse(e) {
    let [company, users] = e;
    return (r += `${company}\n${users.map(idParse).join("\n")}\n`);
  }
  let r = "";

  Object.entries(object).sort(sortByCompanyName).map(outputParse);
  return r;
}
console.log(
  companyUsers3([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
  ])
);
