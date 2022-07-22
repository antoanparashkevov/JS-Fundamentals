function partyTime(input) {
    let vipInvites = []
    let regularInvites = []

    while (input[0] !== "PARTY") {
        let guests = input.shift()
        // console.log(guests)
        // console.log(guests[0])
        if (isNaN(Number(guests[0]))) {
            regularInvites.push(guests)
        } else {
            vipInvites.push(guests)
        }
    }
    console.log(vipInvites, regularInvites)
    // console.log(input)
    input.shift()
    // console.log(input)
    for (let guest of input) {
        if (vipInvites.includes(guest)) {

            vipInvites.splice(vipInvites.indexOf(guest), 1)
        }
        if (regularInvites.includes(guest)) {
            regularInvites.splice(regularInvites.indexOf(guest), 1)
        }
    }
    // console.log(vipInvites,regularInvites)
    let counter = vipInvites.length + regularInvites.length
    console.log(counter)
    console.log(vipInvites.join('\n'))
    console.log(regularInvites.join('\n'))
}

partyTime(['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)
