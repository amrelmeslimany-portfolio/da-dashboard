function initTasks() {
  return {
    // LN Tasks list
    tasksListView(req, res) {
      res.render("pages/tasks/task-list", {
        title: "AD - Tasks List",
      });
    },

    // LN Kanban Tasks Board
    kanbanBoardView(req, res) {
      res.render("pages/tasks/kanban-board", {
        title: "AD - Kanban Board",
      });
    },
    // LN Kanban Tasks Board
    createTaskView(req, res) {
      res.render("pages/tasks/create-task", {
        title: "AD - Create New Task",
      });
    },
  };
}

module.exports = initTasks;
