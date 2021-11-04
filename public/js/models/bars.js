// Add links to sidebar
function addSidebar(menu) {
  let element = menu;
  let scrollWrap = document.createElement("div");

  // Remove The old content
  element.innerHTML = "";
  // Add classes
  scrollWrap.className = "scroll-bar";
  scrollWrap.setAttribute("data-simplebar", "init");
  // Add Content HTML
  scrollWrap.innerHTML = `
    <div class="fix-wrap">
    <ul class="wrap-menue mb-0 list-unstyled">
        <li class="title-menue text-uppercase my-1">
            menue
        </li>
        <li class="menue-item">
            <a href="javascript: void(0);" class="anm-riple btn text-capitalize">
                <i class="fas fa-home"></i>
                <span>dashboard <i class="fas fa-chevron-circle-down float-end"></i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/create-article" class="text-capitalize">create article</a>
                </li>
                <li class="sub-item">
                    <a href="/create-blog" class="text-capitalize">create blog</a>
                </li>
                <li class="sub-item">
                    <a href="/blog-view" class="text-capitalize">blog view</a>
                </li>
            </ul>
        </li>
        <li class="menue-item">
            <a href="/blog-dashboard" class="anm-riple btn text-capitalize">
                <i class="fas fa-columns"></i>
                <span>blog dashboard</span>
            </a>
        </li>
        <li class="title-menue text-uppercase my-1">
            apps
        </li>
        <li class="menue-item">
            <a href="/chat" class="anm-riple btn text-capitalize">
                <i class="fas fa-comment"></i>
                <span>chat</span>
            </a>
        </li>
        <li class="menue-item">
            <a href="/file-manager" class="anm-riple btn text-capitalize">
                <i class="fas fa-folder"></i>
                <span>file manager</span>
            </a>
        </li>
        <li class="menue-item">
            <a href="#!" class="anm-riple btn text-capitalize">
                <i class="fas fa-store"></i>

                <span>ecommerce <i class="badge bg-success p-1 position-relative float-end" style="font-size:10px;top:4px">new</i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/ecommerce/products" class="text-capitalize">products</a>
                </li>
                <li class="sub-item">
                    <a href="/ecommerce/product-details" class="text-capitalize">product details</a>
                </li>
                <li class="sub-item">
                    <a href="/ecommerce/orders" class="text-capitalize">orders</a>
                </li>
                <li class="sub-item">
                    <a href="/ecommerce/customers" class="text-capitalize">customers</a>
                </li>
                <li class="sub-item">
                    <a href="/ecommerce/cart" class="text-capitalize">cart</a>
                </li>
                <li class="sub-item">
                    <a href="/ecommerce/checkout" class="text-capitalize">checkout</a>
                </li>
                <li class="sub-item">
                    <a href="/ecommerce/shops" class="text-capitalize">shops</a>
                </li>
                <li class="sub-item">
                    <a href="/ecommerce/add-product" class="text-capitalize">add product</a>
                </li>
            </ul>
        </li>
        <li class="menue-item">
            <a href="#!" class="anm-riple btn text-capitalize">
                <i class="fas fa-envelope"></i>

                <span>email <i class="fas fa-chevron-circle-down float-end"></i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/email/inboxes" class="text-capitalize">inboxe</a>
                </li>
                <li class="sub-item">
                    <a href="/email/read-email" class="text-capitalize">read email</a>
                </li>
                <li class="sub-item">
                    <a href="/email/email-templates" class="text-capitalize">templates</a>
                </li>
            </ul>
        </li>
        <li class="menue-item">
            <a href="#!" class="anm-riple btn text-capitalize">
                <i class="fas fa-receipt"></i>

                <span>invoice <i class="fas fa-chevron-circle-down float-end"></i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/invoices" class="text-capitalize">invoice list</a>
                </li>
                <li class="sub-item">
                    <a href="/invoices/invoice-detail" class="text-capitalize">invoice details</a>
                </li>
            </ul>
        </li>
        <li class="menue-item">
            <a href="#!" class="anm-riple btn text-capitalize">
                <i class="fas fa-briefcase"></i>
                <span>projects <i class="badge bg-info p-1 position-relative float-end" style="font-size:10px;top:4px">04</i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/projects" class="text-capitalize">projects grid</a>
                </li>
                <li class="sub-item">
                    <a href="/projects/list" class="text-capitalize">projects list</a>
                </li>
                <li class="sub-item">
                    <a href="/projects/overview" class="text-capitalize">project overview</a>
                </li>
                <li class="sub-item">
                    <a href="/projects/create-project" class="text-capitalize">create new</a>
                </li>
            </ul>
        </li>
        <li class="menue-item">
            <a href="#!" class="anm-riple btn text-capitalize">
                <i class="fas fa-tasks"></i>

                <span>tasks <i class="fas fa-chevron-circle-down float-end"></i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/tasks" class="text-capitalize">task list</a>
                </li>
                <li class="sub-item">
                    <a href="/tasks/kanban-board" class="text-capitalize">kanban board</a>
                </li>
                <li class="sub-item">
                    <a href="/tasks/create-task" class="text-capitalize">create task</a>
                </li>
            </ul>
        </li>
        <li class="title-menue text-uppercase my-1">
            pages
        </li>
        <li class="menue-item">
        <a href="#!" class="anm-riple btn text-capitalize">
            <i class="fab fa-blogger"></i>
            <span>blog <i class="fas fa-chevron-circle-down float-end"></i></span>
        </a>
        <ul class="sub-menue list-unstyled">
            <li class="sub-item">
                <a href="/blogs" class="text-capitalize">blog grid</a>
            </li>
            <li class="sub-item">
                <a href="/blogs/list" class="text-capitalize">blog list</a>
            </li>
            <li class="sub-item">
                <a href="/blogs/details" class="text-capitalize">blog details</a>
            </li>
        </ul>
    </li>
        <li class="menue-item">
            <a href="#!" class="anm-riple btn text-capitalize">
                <i class="fas fa-address-card"></i>
                <span>contacts <i class="fas fa-chevron-circle-down float-end"></i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/contacts/users-grid" class="text-capitalize">users grid</a>
                </li>
                <li class="sub-item">
                    <a href="/contacts/users-list" class="text-capitalize">user list</a>
                </li>
                <li class="sub-item">
                    <a href="/contacts/user-profile" class="text-capitalize">profile</a>
                </li>
            </ul>
        </li>
        <li class="menue-item">
            <a href="#!" class="anm-riple btn text-capitalize">
                <i class="fas fa-user-circle"></i>
                <span>authentication <i class="fas fa-chevron-circle-down float-end"></i></span>
            </a>
            <ul class="sub-menue list-unstyled">
                <li class="sub-item">
                    <a href="/authentication/login" class="text-capitalize">login</a>
                </li>
                <li class="sub-item">
                    <a href="/authentication/register" class="text-capitalize">register</a>
                </li>
                <li class="sub-item">
                    <a href="/authentication/recover-password" class="text-capitalize">recover password</a>
                </li>
                <li class="sub-item">
                    <a href="/authentication/lockscreen" class="text-capitalize">lockscreen</a>
                </li>
                <li class="sub-item">
                    <a href="/authentication/confirm-email" class="text-capitalize">confirm email</a>
                </li>
                <li class="sub-item">
                    <a href="/authentication/email-verification" class="text-capitalize">email verification</a>
                </li>
                <li class="sub-item">
                    <a href="/authentication/twostep-verification" class="text-capitalize">two step verification</a>
                </li>
            </ul>
        </li>
    </ul>
</div>
    `;

  element.prepend(scrollWrap);
}

// Add links to map site btn in top navbar
function addLinksNavbar() {
  let wrap = document.querySelector(".map-site-dropdown");
  let row = document.createElement("div");

  wrap.innerHTML = "";

  row.className = "row row-cols-3 g-2";

  row.innerHTML = `
    <div class="col">
    <h6 class="pb-2 text-capitalize border-bottom">pages</h6>
    <div class="wrap-links">
        <a href="/ecommerce/products"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>products</span> <i
                class="fas fa-box"></i></a>
        <a href="/ecommerce/orders"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>orders</span> <i
                class="fas fa-list"></i></a>
        <a href="/chat"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>chat</span> <i
                class="fas fa-paper-plane"></i></a>
        <a href="/blog-view"
            class="text-capitalize text-decoration-none text-black-50 p-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>blog view</span> <i
                class="fab fa-blogger"></i></a>
    </div>
</div>
<div class="col">
    <h6 class="pb-2 text-capitalize border-bottom">to create</h6>
    <div class="wrap-links">
        <a href="/create-article"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>create article</span> <i
                class="fas fa-newspaper"></i></a>
        <a href="/create-blog"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>create blog</span> <i
                class="fas fa-envelope-open-text"></i></a>
        <a href="/tasks/create-task"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>create task</span> <i
                class="fas fa-tasks"></i></a>
        <a href="/projects/create-project"
            class="text-capitalize text-decoration-none text-black-50 p-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>create project</span> <i
                class="fas fa-briefcase"></i></a>
    </div>
</div>
<div class="col">
    <h6 class="pb-2 text-capitalize border-bottom">to check</h6>
    <div class="wrap-links">
        <a href="/file-manager"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>file manager</span> <i
                class="fas fa-folder"></i></a>
        <a href="/invoices"
            class="text-capitalize text-decoration-none text-black-50 p-1 mb-1 d-flex align-items-center justify-content-between"
            target="_blank" rel="noopener noreferrer"><span>invoice</span> <i
                class="fas fa-file-invoice"></i></a>

    </div>
</div>

    `;

  wrap.prepend(row);
}

export { addLinksNavbar, addSidebar };
