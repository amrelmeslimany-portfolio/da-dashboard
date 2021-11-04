const initController = require("../http/controllers/webController");
const initProducts = require("../http/controllers/productsController");
const inintProjects = require("../http/controllers/projectsController");
const initTasks = require("../http/controllers/tasksController");
const initAuthentications = require("../http/controllers/authenticationsController");
const initBlogs = require("../http/controllers/blogsController");

function initRoutes(app) {
  // LN Get Home
  app.get("/", initController().getHome);
  // LN Create Article Get
  app.get("/create-article", initController().getCreateArticle);
  // LN Create Blog Get
  app.get("/create-blog", initController().getCreateBlogView);
  // LN Blog View Get
  app.get("/blog-view", initController().getBlogView);
  // LN Create Blog Dashboard
  app.get("/blog-dashboard", initController().getBlogDashboard);
  // LN Chat Get
  app.get("/chat", initController().getChat);
  // LN File Manager Get
  app.get("/file-manager", initController().getFileManager);
  /* 
    ANC Road Map Products
        -- prodcuts view
        -- product details
        -- orders
        -- customers
        -- checkout
        -- shops
        -- add product
    */
  // LN Products View
  app.get("/ecommerce/products", initProducts().productsView);
  // LN Product Details
  app.get("/ecommerce/product-details", initProducts().productDetailView);
  // LN Orders
  app.get("/ecommerce/orders", initProducts().ordersView);
  // LN customers
  app.get("/ecommerce/customers", initProducts().customersView);
  // LN cart
  app.get("/ecommerce/cart", initProducts().cartView);
  // LN checkout
  app.get("/ecommerce/checkout", initProducts().checkoutView);
  // LN shops
  app.get("/ecommerce/shops", initProducts().shopsView);
  // LN add product
  app.get("/ecommerce/add-product", initProducts().addNewProductView);

  /* ANC Road Map Emails
        -- inboxes
        -- read emails
        -- templates
  */

  // LN inboxes
  app.get("/email/inboxes", initController().inboxesView);
  // LN read emails
  app.get("/email/read-email", initController().readEmailView);
  // LN email templates
  app.get("/email/email-templates", initController().emailTemView);

  /* ANC Road Map Ivoices
        -- Invoices List
        -- Invoice Detail
  */

  // LN Invoices List
  app.get("/invoices", initController().invoicesListView);
  // LN Invoices Details
  app.get("/invoices/invoice-detail", initController().invoiceDetailView);

  /* ANC Road Map Projects
        -- projects grid
        -- projects list
        -- project overview
        -- create new project
  */

  // LN projects grid
  app.get("/projects", inintProjects().projectsGridView);
  // LN projects list
  app.get("/projects/list", inintProjects().projectsListView);
  // LN project overview
  app.get("/projects/overview", inintProjects().projectOverviewView);
  // LN create new project
  app.get("/projects/create-project", inintProjects().createProjectView);

  /* ANC Road Map Tasks
        -- tasks list
        -- kanban board list
        -- create new task
  */

  // LN tasks list
  app.get("/tasks", initTasks().tasksListView);
  // LN kanban board
  app.get("/tasks/kanban-board", initTasks().kanbanBoardView);
  // LN create new task
  app.get("/tasks/create-task", initTasks().createTaskView);

  /* ANC Road Map Contacts
        -- users grid
        -- users list
        -- user profile
  */

  // LN users grid
  app.get("/contacts/users-grid", initController().contactsUserGridView);
  // LN users grid
  app.get("/contacts/users-list", initController().contactsUserListView);
  // LN users grid
  app.get("/contacts/user-profile", initController().contactsUserProfileView);

  /* ANC Road Map Authentication
        -- Login
        -- Register
        -- Recover Password
        -- Lockscreen
        -- Confirm Email
        -- Email Verification
        -- twostep verification
  */
  // LN login
  app.get("/authentication/login", initAuthentications().loginView);
  // LN register
  app.get("/authentication/register", initAuthentications().registerView);
  // LN recover password
  app.get(
    "/authentication/recover-password",
    initAuthentications().recoverPasswordView
  );
  // LN lockscreen
  app.get("/authentication/lockscreen", initAuthentications().lockscreenView);
  // LN confirm email
  app.get(
    "/authentication/confirm-email",
    initAuthentications().confirmEmailView
  );
  // LN email verification
  app.get(
    "/authentication/email-verification",
    initAuthentications().emailVerificationView
  );
  // LN two step verification
  app.get(
    "/authentication/twostep-verification",
    initAuthentications().twostepVerificationView
  );

  /* ANC Road Map Blogs
        -- Blogs Grid
        -- Blogs List
        -- Blog Details
  */
  // LN blogs grid
  app.get("/blogs", initBlogs().blogsGridView);
  // LN blogs list
  app.get("/blogs/list", initBlogs().blogsListView);
  // LN blog details
  app.get("/blogs/details", initBlogs().blogDetailView);
}

module.exports = initRoutes;
