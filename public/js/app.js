// LN Imports
/* Objects Options */
import { ckEditorOptions } from "./models/objects.js";
/* Functions */
import {
  toggleFullScreen,
  changeIconSubmenu,
  createPreviewImage,
  createToastAlert,
  handleTags,
} from "./models/functions.js";
/* Graphics */
import {
  chart_1,
  chart_2,
  chart_3,
  chart_4,
  chart_5,
  chart_6,
  chart_7,
} from "./models/graphics.js";

/* Sidebar HTML Content*/
import { addSidebar, addLinksNavbar } from "./models/bars.js";

// LN Public

/* When Click on item in dropdown , display this word */
const dropdownsWrap = document.querySelectorAll(".dr-show-text");
if (dropdownsWrap.length > 0) {
  dropdownsWrap.forEach((dropdown) => {
    let drBTN = dropdown.querySelector(".dropdown-toggle span");
    dropdown.querySelectorAll(".dropdown-item").forEach((drItem) => {
      drItem.addEventListener("click", function () {
        drBTN.innerHTML = this.textContent;
      });
    });
  });
}

/* Sidebar & Navbar */
const fullscreenBTNTag = document.querySelector(".full-screen-box");
const mapBTNTag = document.querySelector(".map-h-site .dropdown-toggle");
const sidebarTag = document.querySelector("#top-navbar .wrap-nav");
const sidebarBTNTag = sidebarTag.querySelector(".toggle-sidebar-btn");
const sidebarListTag = document.querySelector("#vertical-menue");
const bodyContentTag = document.querySelector("#body-content");
/* Add Sidebar to page */
window.onload = () => {
  // Add Content Sidebar
  addSidebar(sidebarListTag);

  /* Add Riple Animation */
  const buttons = document.querySelectorAll(".anm-riple");
  if (buttons.length > 0) {
    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        let bounding = e.target.getBoundingClientRect();

        let x = e.clientX - bounding.x; // e.clientX - e.target.offsetLeft
        let y = e.clientY - bounding.y;

        let span = document.createElement("span");

        span.className = "riple";

        span.style.top = y + "px";
        span.style.left = x + "px";

        this.append(span);

        setTimeout(() => {
          span.remove();
        }, 500);
      });
    });
  }
  /* Add Riple Animation */
};
/* Fullscreen FN */
fullscreenBTNTag.addEventListener("click", toggleFullScreen);
/* Map button load content */
mapBTNTag.addEventListener("click", addLinksNavbar, {
  once: true,
});
// LN toggle nav
if (window.innerWidth <= 1024) {
  sidebarBTNTag.addEventListener("click", () => {
    sidebarListTag.classList.toggle("wide-side-work");
    changeIconSubmenu(sidebarListTag);
  });
} else if (window.innerWidth > 1024) {
  sidebarBTNTag.addEventListener("click", () => {
    sidebarTag.querySelector(".logo .lg-link span").classList.toggle("d-none");
    sidebarListTag.classList.toggle("small-side-work");
    document.querySelector("#top-navbar .logo").classList.toggle("narrow-with");
    bodyContentTag.classList.toggle("toggle-margin");

    // ***************
    let sidebarOpenedTag = document.querySelector(".small-side-work");
    if (sidebarOpenedTag) {
      sidebarOpenedTag.style.height = bodyContentTag.clientHeight - 105 + "px";
    }
  });

  // LN Add Arrow Up for sub menu
  changeIconSubmenu(sidebarListTag);
}
/* Side Navbar */

/* LN Start Home Admin Dashboard */
window.onresize = () => {
  bodyContentTag.querySelector(".wrap-inner-body").style.minHeight =
    window.innerHeight - (80 + 56) + "px";
};
bodyContentTag.querySelector(".wrap-inner-body").style.minHeight =
  window.innerHeight - (80 + 56) + "px";
/* Finish Home Admin Dashboard */
/* LN Create Article Page */
const formCreateARTTag = document.querySelector(".create-article-form");
const toastContainerTag = document.querySelector(".toast-container");
let tagsValue = new Set();
let newEditor;
if (formCreateARTTag && location.pathname == "/create-article") {
  let elementsInFormOBJ = {
    dropAreaTag: formCreateARTTag.querySelector(".droparea"),
    textDrop: formCreateARTTag.querySelector(".droparea h6"),
    upCoverBtnTag: formCreateARTTag.querySelector(".droparea button"),
    inputImgCoverTag: formCreateARTTag.querySelector("#uploadCover"),
    inputTagsTag: formCreateARTTag.querySelector(".article-tags"),
    typesAllowing: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
  };

  // Upload Img Cover The Button
  elementsInFormOBJ.upCoverBtnTag.addEventListener("click", () => {
    elementsInFormOBJ.inputImgCoverTag.click();
  });
  elementsInFormOBJ.inputImgCoverTag.addEventListener(
    "change",
    function ({ target }) {
      let file = target.files[0] || null;
      let that = elementsInFormOBJ.dropAreaTag;
      let fileReader = new FileReader();
      // Function Preview Image
      if (file) {
        createPreviewImage(
          elementsInFormOBJ,
          that,
          fileReader,
          file,
          toastContainerTag
        );
      } else {
        createToastAlert("danger", "Please Select Image", toastContainerTag);
      }
    }
  );
  // User Drag Over
  elementsInFormOBJ.dropAreaTag.addEventListener("dragover", function (event) {
    event.preventDefault();
    // Add Active
    this.classList.add("active");

    if (elementsInFormOBJ.textDrop) {
      elementsInFormOBJ.textDrop.textContent = "Drop Here";
    }
  });

  // User Drag Leave
  elementsInFormOBJ.dropAreaTag.addEventListener("dragleave", function (event) {
    event.preventDefault();
    // Add Active
    this.classList.remove("active");
    if (elementsInFormOBJ.textDrop) {
      elementsInFormOBJ.textDrop.textContent = "Drag Cover Img For Article";
    }
  });
  // User Drop
  elementsInFormOBJ.dropAreaTag.addEventListener("drop", function (event) {
    event.preventDefault();
    // VARS
    let that = this;
    let file = event.dataTransfer.files[0] || "no file";
    let fileReader = new FileReader();
    createPreviewImage(
      elementsInFormOBJ,
      that,
      fileReader,
      file,
      toastContainerTag
    );
  });

  let textareaArticleBodyTag = formCreateARTTag.querySelector(".article-body");
  // Make CKEditor
  ClassicEditor.create(textareaArticleBodyTag, ckEditorOptions)
    .then((editor) => {
      // window.editor = editor;
      newEditor = editor;
    })
    .catch((error) => {
      console.error(error);
    });

  // Handle The Tags Input
  elementsInFormOBJ.inputTagsTag.addEventListener("keyup", function (event) {
    event.preventDefault();
    // Vars Required
    let orignalValue = this.value;
    let wraper = this.parentElement.querySelector(".tags-list");
    let tags = wraper.querySelectorAll(".badge");
    let inputTag = wraper.nextElementSibling;
    handleTags(
      tags,
      createToastAlert,
      toastContainerTag,
      this,
      event,
      orignalValue,
      tagsValue,
      wraper,
      inputTag
    );
  });
}

/* Finish Create Article Page */
/* LN Start Create Blog */

if (location.pathname == "/create-blog") {
  const dropAreaTag = formCreateARTTag.querySelectorAll(".droparea");
  let elementsInFormOBJ = {
    typesAllowing: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
  };
  dropAreaTag.forEach((dropArea) => {
    let textDrop = dropArea.querySelector("h6");
    let upCoverBtnTag = dropArea.querySelector("button");
    let inputForImg = dropArea.nextElementSibling;

    // Upload Img Cover From The Button
    upCoverBtnTag.addEventListener("click", () => {
      inputForImg.click();
    });
    inputForImg.addEventListener("change", function ({ target }) {
      let file = target.files[0] || null;
      let that = dropArea;
      let fileReader = new FileReader();
      // Function Preview Image
      if (file) {
        createPreviewImage(
          elementsInFormOBJ,
          that,
          fileReader,
          file,
          toastContainerTag
        );
      } else {
        createToastAlert("danger", "Please Select Image", toastContainerTag);
      }
    });

    // ANC Drags Functions
    // User Drag Over
    dropArea.addEventListener("dragover", function (event) {
      event.preventDefault();
      // Add Active
      this.classList.add("active");

      if (textDrop) {
        textDrop.textContent = "Drop Here";
      }
    });

    // User Drag Leave
    dropArea.addEventListener("dragleave", function (event) {
      event.preventDefault();
      // Add Active
      this.classList.remove("active");
      if (textDrop) {
        textDrop.textContent = "Drag Cover Img For Article";
      }
    });
    // User Drop
    dropArea.addEventListener("drop", function (event) {
      event.preventDefault();
      // VARS
      let that = this;
      let file = event.dataTransfer.files[0] || "no file";
      let fileReader = new FileReader();
      createPreviewImage(
        elementsInFormOBJ,
        that,
        fileReader,
        file,
        toastContainerTag
      );
    });
  });
}

/* Finish Create Blog */
/* LN Products Pages */
// Range of price
const inputRangePrice = document.querySelector("#rangePrice");
const wrapSEValuesRange = document.querySelector(".se-values");
if (wrapSEValuesRange) {
  const resultTag = wrapSEValuesRange.querySelector(".result-range-price");
  wrapSEValuesRange.querySelector(".min").innerHTML = inputRangePrice.min;
  wrapSEValuesRange.querySelector(".max").innerHTML = inputRangePrice.max;
  resultTag.innerHTML = inputRangePrice.min + " - " + inputRangePrice.value;
  inputRangePrice.addEventListener("input", function () {
    resultTag.innerHTML = inputRangePrice.min + " - " + this.value;
  });
}

/* LN Products Cart */
const wrNumberInput = document.querySelectorAll(".numbers-withbuttons");

if (wrNumberInput.length > 0) {
  wrNumberInput.forEach((box) => {
    let minusBTN = box.querySelector(".minus");
    let plusBTN = box.querySelector(".plus");
    let inputTag = box.querySelector("input.form-control");
    let inputValue = inputTag.value;

    // if value is empty
    inputTag.addEventListener("blur", function () {
      if (this.value == "") {
        this.value = 1;
      }
    });

    // decrease
    minusBTN.addEventListener("click", function () {
      if (inputValue > 1) {
        inputValue--;
        inputTag.value = inputValue;
      } else {
        inputTag.value = 1;
      }
    });

    // increase
    plusBTN.addEventListener("click", function () {
      if (inputValue >= 1) {
        inputValue++;
        inputTag.value = inputValue;
      } else {
        inputTag.value = 1;
      }
    });
  });
}

/* LN Products Checkout */
// Insert Countries Data from API
const countriesForm = document.querySelector(
  ".products-checkout .countries-select"
);
const statesForm = document.querySelector(".products-checkout .states-select");
const countryInput = document.querySelector(".products-checkout #countryInput");
const stateInput = document.querySelector(".products-checkout #stateInput");
let countriesAPI =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json";
if (location.pathname == "/ecommerce/checkout") {
  // Fetch Countreis
  fetch(countriesAPI)
    .then((response) => response.json())
    .then((result) => {
      if (result.length > 0) {
        // **************
        if (countriesForm.querySelector(".spinner-border")) {
          countriesForm.querySelector(".spinner-border").remove();
        }
        // Show Countries
        result.forEach((country) => {
          let { name, iso3 } = country;
          let liTag = document.createElement("li");
          liTag.innerHTML = `<span class="dropdown-item cursor-pointer" data-countryvalue="${iso3}">${name}</span>`;
          countriesForm.querySelector("ul").append(liTag);
          // When choose show name of country
          liTag.querySelector("span").addEventListener("click", function () {
            countriesForm.querySelector("button span").innerText =
              this.textContent;
            // Set Value of country input
            countryInput.value = name;
            // Get States
            if (this.dataset.countryvalue == iso3) {
              let { states } = country;
              statesForm.querySelector("ul").innerHTML = "";
              if (states.length > 0) {
                states.forEach((state) => {
                  let liStateTag = document.createElement("li");
                  let { name, state_code } = state;
                  liStateTag.innerHTML = `<span class="dropdown-item cursor-pointer" data-statevalue="${state_code}">${name}</span>`;
                  statesForm.querySelector("ul").append(liStateTag);

                  liStateTag.addEventListener("click", function () {
                    statesForm.querySelector(" button span").innerText =
                      this.innerText;

                    stateInput.value = name;
                  });
                });
              } else {
                let liStateTag = document.createElement("li");
                liStateTag.innerHTML = `<span class="dropdown-header">No Items</span>`;
                statesForm.querySelector("ul").append(liStateTag);
              }
            }
          });
        });
      }
    })
    .catch((error) => console.log("error", error));
}

// Open Shipping section
const btnCheckoutPR = document.querySelector(
  ".products-checkout .footer-checkout-btns button"
);

if (btnCheckoutPR) {
  btnCheckoutPR.addEventListener("click", function () {
    document.querySelector(".shipping-btn").click();
  });
}

// Add New Product
Dropzone.autoDiscover = false;
if (document.querySelector("#dropzone-product")) {
  new Dropzone("#dropzone-product", {
    addRemoveLinks: true,
    url: "/new-product",
    acceptedFiles: "image/*",
    paramName: "productsImages",
  });
}

/* LN Tasks Section */
// Kanban Board in tasks
if (location.pathname.includes("/tasks/kanban-board")) {
  const wraperKANBoard = document.querySelector(".kanban-tasks");
  const tagsFor3Sections = {
    upcoming: wraperKANBoard.querySelector("#wr-task-upcoming"),
    inprogress: wraperKANBoard.querySelector("#wr-task-inprogress"),
    completed: wraperKANBoard.querySelector("#wr-task-completed"),
  };

  // Loop all opjects
  for (let tagSelf of Object.values(tagsFor3Sections)) {
    const wrapTasksSelf = tagSelf.querySelector(".tasks-outer");

    new Sortable(wrapTasksSelf, {
      group: "shared",
      ghostClass: "drop-class",
      dragClass: "dragging-item",
      animation: 200,
    });
  }
}

// Create Task
const creatTaskSection = document.querySelector(".create-task-section");
if (creatTaskSection) {
  const taskDesc = creatTaskSection.querySelector(
    ".form-repeater #taskdesc-editor"
  );
  const formWraperInner = creatTaskSection.querySelector(
    ".form-repeater .inner-repeater"
  );
  const addNewMemberBtn = formWraperInner.querySelector(".add-new-member-btn");
  let newEditorTask;
  // Make CKEditor
  ClassicEditor.create(taskDesc, ckEditorOptions)
    .then((editor) => {
      newEditorTask = editor;
    })
    .catch((error) => {
      console.error(error);
    });
  // Handle add new member

  addNewMemberBtn.addEventListener("click", function () {
    let div = document.createElement("div");
    let randomId = Math.random().toString(36).slice(2);
    div.className = "mb-3 row align-items-center wr-member-input";
    div.setAttribute("data-wrapp-id", randomId);
    div.innerHTML = `
            <div class="col-md-6">
                <input type="text" class="inner form-control" name="member[name]" placeholder="Enter Name...">
            </div>
            <div class="col-md-4">
                <div class="mt-2 mt-md-0">
                    <input class="form-control" name="member[img]" type="file">
                </div>
            </div>
            <div class="col-md-2">
                <div class="mt-2 mt-md-0 d-grid">
                    <input data-wrapp-id="${randomId}" type="button"
                        class="btn btn-primary delete-member-btn" value="Delete">
                </div>
            </div>
    `;
    formWraperInner.querySelector(".col-lg-10.ms-md-auto").append(div);
    div.querySelector(".delete-member-btn").addEventListener("click", () => {
      div.remove();
    });
  });
}

/* LN Content Section Public */
if (chart_1 || chart_2 || chart_3 || chart_4 || chart_5 || chart_6) {
  chart_1;
  chart_2;
  chart_3;
  chart_4;
  chart_5;
  chart_6;
  chart_7;
}
/* Content Section Public */
