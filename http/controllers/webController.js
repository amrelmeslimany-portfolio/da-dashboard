function initController() {
  return {
    // LN Home Get

    getHome(req, res) {
      res.render("pages/home", {
        title: "AD - Admin Dashboard",
      });
    },

    // LN Create Article Get

    getCreateArticle(req, res) {
      res.render("pages/create-article", {
        title: "AD - Create New Article",
      });
    },

    getCreateBlogView(req, res) {
      res.render("pages/create-blog", {
        title: "AD - Create New Blog",
      });
    },

    getBlogView(req, res) {
      res.render("pages/blog-view", {
        title: "AD - Blog View",
      });
    },

    // LN Blog Dashboard Get

    getBlogDashboard(req, res) {
      res.render("pages/blog-dashboard", {
        title: "AD - Blog Dashboard",
      });
    },

    // LN Get Chat Veiw

    getChat(req, res) {
      res.render("pages/chat", {
        title: "AD - Chat",
      });
    },

    // LN Get File Manager Veiw

    getFileManager(req, res) {
      res.render("pages/file-manager", {
        title: "AD - File Manager",
      });
    },
    // ANC Emails Functions
    /* LN Inboxes */
    inboxesView(req, res) {
      res.render("pages/emails/inbox", {
        title: "AD - Inboxes",
      });
    },
    /* LN Read Mails */
    readEmailView(req, res) {
      res.render("pages/emails/read-emails", {
        title: "AD - Email Name",
      });
    },
    /* LN Read Mails */
    emailTemView(req, res) {
      res.render("pages/emails/email-templates", {
        title: "AD - Email Templates",
      });
    },
    /* LN Invoices List */
    invoicesListView(req, res) {
      res.render("pages/invoices/invoice-list", {
        title: "AD - Invoices",
      });
    },
    /* LN Invoice Detail */
    invoiceDetailView(req, res) {
      res.render("pages/invoices/invoice-detail", {
        title: "AD - Invoice Name",
      });
    },
    // ANC Contacts
    /* LN Contacts users grid */
    contactsUserGridView(req, res) {
      res.render("pages/contacts/users-grid", {
        title: "AD - Users Grid",
      });
    },
    /* LN Contacts users list */
    contactsUserListView(req, res) {
      res.render("pages/contacts/users-list", {
        title: "AD - Users List",
      });
    },
    /* LN Contacts users profile */
    contactsUserProfileView(req, res) {
      res.render("pages/contacts/user-profile", {
        title: "AD - User Profile",
      });
    },
  };
}

module.exports = initController;
