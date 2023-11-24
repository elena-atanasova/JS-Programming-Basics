function projectsCreation(input) {
    let name = input[0]
    let numberOfProjects = Number(input[1])
    let hoursToComplete = numberOfProjects * 3

    console.log(`The architect ${name} will need ${hoursToComplete} hours to complete ${numberOfProjects} project/s.`)
}

projectsCreation(["Sanya", "9"])