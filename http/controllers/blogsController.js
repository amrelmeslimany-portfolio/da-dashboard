function initBlogs() {
  return {
    // LN Blogs Grid
    blogsGridView(req, res) {
      res.render("pages/blogs/blogs-grid", {
        title: "AD - Blogs Grid",
      });
    },
    // LN Blogs List
    blogsListView(req, res) {
      res.render("pages/blogs/blogs-list", {
        title: "AD - Blogs List",
      });
    },
    // LN Blog Details
    blogDetailView(req, res) {
      res.render("pages/blogs/blog-details", {
        title: "AD - Blog Name",
      });
    },
  };
}

module.exports = initBlogs;
