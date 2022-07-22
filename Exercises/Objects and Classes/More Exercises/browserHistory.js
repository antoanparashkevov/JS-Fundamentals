function browserHistory(browser, commands) {
    let commandsHandler = {
        'Open': (object, site) => {
            object['Open Tabs'].push(site[0]);
            object["Browser Logs"].push(`Open ${site[0]}`);
            return object;
        },
        'Close': (object, site) => {
            if (object["Open Tabs"].includes(site[0])) {
                object["Browser Logs"]
                    .push(`Close ${site[0]}`);
                object["Recently Closed"]
                    .push(object["Open Tabs"]
                        .splice
                        (object["Open Tabs"].indexOf(site[0]), 1)
                        [0])
            }
            return object
        },
        'Clear': (object) => {
            object["Open Tabs"] = [];
            object["Browser Logs"] = [];
            object["Recently Closed"] = [];
            return object
        }
    }
    function outputFormatter (object){
        let result = `${Object.values(object)[0]}\n`;//this will return only the value from 0 index
        Object.entries(object).slice(1).forEach(kvp => {//start from Open tabs (first index) and foreach element in the key
            result += `${kvp[0]}: ${kvp[1].join(', ')}\n`;//.join because it is an array
        })
        return result;
    }

    for (const command of commands) {
        let [c, ...rest] = command.split(' ');
        commandsHandler[c](browser, rest);
        // console.log(c)//in c variable we keep Close, Open or Clear
        // console.log(rest)//in ...rest with spread operator we create an array which we keep the sites in commands array
    }

    return outputFormatter(browser);


}

console.log(browserHistory(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },

    ["Close Facebook", "Open StackOverFlow", "Open Google"]
))
