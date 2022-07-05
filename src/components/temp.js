const theTask = document.getElementsByClassName('task')

export const theToggle = () => {
    console.log(theTask[0].attributes[1].nodeValue)
}