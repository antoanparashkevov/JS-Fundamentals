function arenaTier(data) {
  let objects = {};
  function objectsOperation(object, name, technique, skill) {
    if (!object.hasOwnProperty(name)) {
      object[name] = {};
      object[name][technique] = Number(skill);
    } else {
      if (!object[name].hasOwnProperty(technique)) {
        object[name][technique] = Number(skill);
      } else {
        if (object[name][technique] < Number(skill)) {
          object[name][technique] = Number(skill);
        }
      }
    }
  }
  function fightOperation(object,gladiator1,gladiator2){
      if(object.hasOwnProperty(gladiator1) && object.hasOwnProperty(gladiator2)){
            let gladiator1Technique = Object.keys(object[gladiator1])
            let gladiator2Technique = Object.keys(object[gladiator2])
            let commonTechnique = gladiator1Technique.find(tech=>gladiator2Technique.includes(tech))
            if(commonTechnique !== undefined){//if we have common techniques
                    pvpMap[object[gladiator1][commonTechnique]>object[gladiator2]](object,gladiator1,gladiator2)
            }
      }
  }

  const pvpMap = {
      false:
          (object,gladiator1,_)=>{
              delete object[gladiator1]
      },
      true:
      (object,_,gladiator2)=>{
          delete object[gladiator2]
      }
  }

  const commandsMap = {
    true: (string, object) => {
      let [gladiator1, gladiator2] = string.split(" vs ");
      fightOperation(object,gladiator1,gladiator2)
    },
    false: (string, object) => {
      let [name, technique, skill] = string.split(" -> ");
      objectsOperation(object,name,technique, skill)
    },
  };
  while (data[0] !== "Ave Cesar") {
    let line = data.shift();
    commandsMap[line.includes("vs")](line,objects); //this statement inside of indexing operator gives Boolean Expr
  }
  const sortByPointsAndNames = ((a,b)=>{
      Object.values(b[1])
      .reduce((a,b)=>a+b)
       - Object.values(a[1])
      .reduce((a,b)=>a+b)
      || a[0].localeCompare(b[0])
  })
  const sortBySkills = (a,b)=>{
      b[1] - a[1] || a[0].localeCompare(b[0])
  }
  const skillsParse = ([key,value] = element) => {
      `- ${key} <!> ${value}`
  }
  const outputParse = ([name,skills]=element)=>{

      let totalPoints = 
      Object.values(skills).reduce((a,b)=>a+b);

      let sortedSkills = 
      Object.entries(skills)
      .sort(sortBySkills)
      .map(skillsParse)
      .join('\n')
      return `${name}: ${totalPoints} skill\n${sortedSkills}`
  }
  return Object.entries(objects)
  .sort(sortByPointsAndNames)
  .map(outputParse)
  .join('\n')
}
console.log(
  arenaTier([
    "Peter -> BattleCry -> 400",
    "Alex -> PowerPunch -> 300",
    "Stefan -> Duck -> 200",
    "Stefan -> Tiger -> 250",
    "Ave Cesar",
  ])
);
