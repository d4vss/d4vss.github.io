function main() {
    // Editor
    const editorShow = document.querySelector(".editor-button");
    const editor = document.querySelector(".editor");
    const closeEditor = document.querySelector(".close-editor");

    editorShow.addEventListener("click", () => {
        editor.classList.remove("hidden");
        editorShow.classList.add("hidden");
    });

    closeEditor.addEventListener("click", () => {
        editor.classList.add("hidden");
        editorShow.classList.remove("hidden");
    });

    // Avatar
    const avatarUpload = document.getElementById("avatar_upload");
    const avatar = document.querySelector(".avatar");
    const avatarRemove = document.querySelector(".avatar-remove");
    const avatarSet = document.querySelector(".avatar-set");

    avatarUpload.addEventListener("change", () => {
        const file = avatarUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                avatar.src = reader.result;
                avatarRemove.classList.remove("hidden");
                avatarSet.classList.add("hidden");
            });
            reader.readAsDataURL(file);
        }
    });

    avatarRemove.addEventListener("click", () => {
        avatar.src = "avatar_demo.png";
        avatarRemove.classList.add("hidden");
        avatarSet.classList.remove("hidden");
    });

    // Banner
    const bannerUpload = document.getElementById("banner_upload");
    const banner = document.querySelector(".banner");
    const noNitroBanner = document.querySelector(".no-nitro-banner");
    const bannerRemove = document.querySelector(".banner-remove");
    const bannerSet = document.querySelector(".banner-set");

    bannerUpload.addEventListener("change", () => {
        const file = bannerUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                banner.src = reader.result;
                banner.classList.remove("hidden");
                noNitroBanner.classList.add("hidden");
                bannerRemove.classList.remove("hidden");
                bannerSet.classList.add("hidden");
            });
            reader.readAsDataURL(file);
        }
    });

    bannerRemove.addEventListener("click", () => {
        banner.classList.add("hidden");
        noNitroBanner.classList.remove("hidden");
        bannerRemove.classList.add("hidden");
        bannerSet.classList.remove("hidden");
    });

    // No nitro banner color picker

    const noNitroBannerInput = document.querySelector("#set-color");
    const noNitroBannerColor = document.querySelector(".no-nitro-banner");

    noNitroBannerInput.addEventListener("input", () => {
        console.log(noNitroBannerInput.value);
        noNitroBannerColor.style.backgroundColor = noNitroBannerInput.value;
    });

    // About me and note expand
    function expand(id) {
        const element = document.getElementById(id);
        element.style.height = "24";
        element.style.height = element.scrollHeight + "px";
    }

    document.addEventListener("DOMContentLoaded", () => {
        expand("about-me");
        expand("note");
    });

    window.addEventListener("input", () => {
        expand("about-me");
        expand("note");
    });

    // Set note if exists
    const note_element = document.getElementsByClassName("save")[0];
    const note_load = localStorage.getItem("note");
    if (note_load) {
        note_element.value = note_load;
        note_element.style.height = note_element.scrollHeight + "px";
    }

    // Save note
    const note = document.getElementById("note");
    note.addEventListener("input", () => {
        localStorage.setItem("note", note.value);
    });
}

document.addEventListener("DOMContentLoaded", main);