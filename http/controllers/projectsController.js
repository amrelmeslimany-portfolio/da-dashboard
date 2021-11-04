function inintProjects() {
  return {
    // LN projects Grid
    projectsGridView(req, res) {
      res.render("pages/projects/projects-grid", {
        title: "AD - Projects Grid",
      });
    },
    // LN projects List
    projectsListView(req, res) {
      res.render("pages/projects/projects-list", {
        title: "AD - Projects List",
      });
    },
    // LN project pverview
    projectOverviewView(req, res) {
      res.render("pages/projects/project-overview", {
        title: "AD - Project Name",
      });
    },
    // LN projects Grid
    createProjectView(req, res) {
      res.render("pages/projects/create-project", {
        title: "AD - Create New Project",
      });
    },
  };
}

module.exports = inintProjects;
