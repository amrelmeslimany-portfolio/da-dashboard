function initAuthentications() {
  return {
    // LN login
    loginView(req, res) {
      res.render("pages/authentication/login", {
        title: "AD - Login",
        layout: "./layouts/authLayout",
      });
    },
    // LN Register
    registerView(req, res) {
      res.render("pages/authentication/register", {
        layout: "./layouts/authLayout",
        title: "AD - Register",
      });
    },
    // LN Recover Password
    recoverPasswordView(req, res) {
      res.render("pages/authentication/recover-password", {
        layout: "./layouts/authLayout",
        title: "AD - Recover Password",
      });
    },
    // LN Lockscreen
    lockscreenView(req, res) {
      res.render("pages/authentication/lockscreen", {
        layout: "./layouts/authLayout",
        title: "AD - Lockscreen",
      });
    },
    // LN Confirm Email
    confirmEmailView(req, res) {
      res.render("pages/authentication/confirm-email", {
        layout: "./layouts/authLayout",
        title: "AD - Confirm Email",
      });
    },
    // LN  Email Verification
    emailVerificationView(req, res) {
      res.render("pages/authentication/email-verification", {
        layout: "./layouts/authLayout",
        title: "AD - Email Verification",
      });
    },
    // LN  Twostep Verification
    twostepVerificationView(req, res) {
      res.render("pages/authentication/twostep-verification", {
        layout: "./layouts/authLayout",
        title: "AD - Twostep Verification",
      });
    },
  };
}

module.exports = initAuthentications;
