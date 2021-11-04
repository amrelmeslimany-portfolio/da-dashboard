/* LN Topnavbar */
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }
}

/* LN Sidebar Menue */
function changeIconSubmenu(sidebar) {
    sidebar.querySelectorAll(".menue-item").forEach(function (item) {
        if (item.querySelector(".sub-menue")) {
            item.addEventListener("mouseover", function () {
                changeIconHover(item, "add")
            })
            item.addEventListener("mouseout", function () {
                changeIconHover(item, "remove")
            })
        }
    })
}

function changeIconHover(item, status) {
    let icon = item.querySelector("span i")

    if (status == "add") {
        icon.classList.remove("fa-chevron-circle-down")
        icon.classList.add("fa-chevron-circle-up")
    } else if (status == "remove") {
        icon.classList.add("fa-chevron-circle-down")
        icon.classList.remove("fa-chevron-circle-up")
    }

}

/* LN Create Articel*/


function createPreviewImage(objectE, contianer, fileReader, file, toastCN) {
    if (objectE.typesAllowing.includes(file.type)) {
        // Add Active 
        contianer.classList.add("active")
        fileReader.onprogress = (pm) => {
            if (pm.lengthComputable) {
                let percent = Math.round((pm.loaded / pm.total) * 100)
                contianer.innerHTML = `
            <div class="progress w-25">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${percent}%;" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">${percent}%</div>
            </div>
            `
            }
        }
        fileReader.onload = (pm) => {
            contianer.querySelector(".progress").remove()
            contianer.innerHTML = `<img src="${fileReader.result}" alt="img" width="100%" height="100%">`
            createToastAlert("success", "Done! You Can Change Image By drag.", toastCN)
        }

        fileReader.onerror = () => {
            createToastAlert("danger", "Image Not Uploaded", toastCN)
        }
        fileReader.onabort = () => {
            createToastAlert("danger", "Image Not Uploaded", toastCN)
        }
        fileReader.readAsDataURL(file)
    } else {
        contianer.classList.remove("active")
        if (objectE.textDrop) {
            objectE.textDrop.textContent = "Drag Cover Img For Article"
        }

        // LN Create Toast
        createToastAlert("danger", "Must Be Images Only", toastCN)
    }
}

// Create Toast Alert
function createToastAlert(type, message, containerTag) {
    let toast = document.createElement("div")
    toast.className = `toast align-items-center bg-${type} text-light`
    toast.setAttribute("role", "alert")
    toast.ariaLive = "assertive"
    toast.ariaAtomic = true
    toast.innerHTML = `
            <div class="d-flex">
            <div class="toast-body">
                <h6 class="mb-0">${message}</h6>
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" data-bs-delay="10000"></button>
            </div>
            `
    containerTag.prepend(toast)

    const toastBS = new bootstrap.Toast(document.querySelector(".toast"))
    toastBS.show()

    setTimeout(() => {
        toast.remove()
    }, 11000)
}

// Create FN to handle Tags
function handleTags(tags, createToastAlert, toastContainerTag, that, event, orignalValue, tagsValue, wraper, inputTag) {
    // Check if user enter more than 3 tags
    if (tags && tags.length != 0 && tags.length > 2) {
        createToastAlert("danger", `Just ${tags.length} Tags`, toastContainerTag)
        // Hide Input From User When Tags become maximum
        that.classList.add("d-none")
        // Stop FN
        return false
    }
    // Check What is the enter key
    if (event.keyCode == 32 || event.keyCode == 188) {
        // Check if word have more than 3 letters
        if (orignalValue.length > 3) {
            let span = document.createElement("span")
            let smallTag = wraper.querySelector("small")
            let filterdValue = event.keyCode == 188 ? orignalValue.trim().slice(0, -1).replace(/ /g, "-") : orignalValue.trim().replace(/ /g, "-")
            // Chech If Tag is founded
            if (tagsValue.has(filterdValue)) {
                createToastAlert("danger", "Tag is found.", toastContainerTag)
                that.value = ""
            } else {

                // Create Tag Span
                span.className = "badge bg-light text-muted font-sm tag"
                span.style.cursor = "pointer"
                // Add Tag To List
                tagsValue.add(filterdValue)
                // Update Input Value
                inputTag.value = Array.from(tagsValue).join(",")
                // Insert Value To Tag Span
                span.innerHTML = `
                    ${filterdValue}<i class="fas fa-times ms-1 font-xs"></i>`
                // Remove Default word (No Tags)
                if (smallTag) {
                    smallTag.remove()
                }
                wraper.prepend(span)
                that.value = ""

                // When Click Tag > Remove It
                that.parentElement.querySelectorAll(".tags-list .tag").forEach(tag => {
                    tag.addEventListener("click", function () {
                        let thisValue = this.textContent.trim()
                        this.remove()
                        // Chech if tags value not empty and remove select element
                        if (tagsValue.size != 0) {
                            tagsValue.delete(thisValue)
                        }
                        // Update Input Value
                        inputTag.value = Array.from(tagsValue).join(",")
                        // Remove Display none
                        if (that.classList.contains("d-none")) {
                            that.classList.remove("d-none")
                            that.value = ""
                            inputTag.value = ""
                        }
                        // Return no tags and input to enter tags word
                        if (tagsValue.size == 0) {
                            wraper.innerHTML = `<small class="text-muted ms-2">no tags</small>`
                        }
                    })
                })

            }

        } else {
            createToastAlert("danger", "Not Allowed One Letter or Two in Tags", toastContainerTag)
            that.value = ""
        }
    }
}

export {
    toggleFullScreen,
    changeIconSubmenu,
    createToastAlert,
    createPreviewImage,
    handleTags
}