const taskReminder = document.getElementById('showing')
console.log(taskToToggle.reminder)

const dontShow = () => {
    if (taskToToggle.reminder === true) {
        taskReminder.style.display = 'grid'
    }
    if (taskToToggle.reminder === false) {
        taskReminder.style.display = 'none'
    }
}
dontShow()