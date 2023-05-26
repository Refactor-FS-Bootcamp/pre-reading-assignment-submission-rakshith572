const tasksDOM = document.querySelector('.tasks')
const formDOM = document.querySelector('.task-form')
const titleDOM = document.querySelector('.title')
const notesDOM = document.querySelector('.notes')
const deleteDOM = document.querySelector('.delete');
const editDOM = document.querySelector('.edit');

const tasks=[]

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const title = titleDOM.value;
    const notes= notesDOM.value;
    const index=tasks.length;
    const task={
        title,
        notes,
        index
    }
    titleDOM.value="";
    notesDOM.value="";
    tasks.push(task)
    // console.log(tasks);
    showTasks();
})

const showTasks = async () => {
    const allTasks = tasks.map((task) => {
            return `<h1>${task.title}</h1>
                <h5>${task.notes}</h5>
                <button type="button" class="delete" data-id="${task.index}">delete</button>
                <button type="button" class="edit">edit</button>
                <i class="fas fa-trash"></i>
                </button>
                </div>
                </div>`
    })
    .join('')
    tasksDOM.innerHTML = allTasks
}

tasksDOM.addEventListener('click', async (e) => {
    const el = e.target
    if (el.classList.contains('delete')) {
      const id = el.dataset.id;
      tasks.splice(id,1);
      showTasks();
    }
  })