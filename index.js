function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Tuesday() {
    console.log("Go for a file-mile run");
    console.log("Swim 40 laps");
}

function Wednesday() {
    console.log("Go for a five-mile run")
    console.log("Go for a five-mile run")
}

function Thursday() {
    console.log("Go for a five-mile run")
    console.log("Pump iron")
}

function Friday() {
    console.log("Go for five-mile run")
    console.log("Swim 40 laps")
}

function runFiveMiles(){
    console.log("Go for a five-mile run")
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}

function Monday(){
    exerciseRoutine(liftWeights)
}

exerciseRoutine(function () {
    console.log("Stretch! Work that core!")
} )

exerciseRoutine( () => {
    console.log("Stretch! Work that core!")
} )

exerciseRoutine( () => console.log("Stretch! Work that core!") )