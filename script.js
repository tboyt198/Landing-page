/* =========================
   MOBILE NAVIGATION
========================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* =========================
   REFERRAL MODAL
========================= */

function openReferral() {

    const modal = document.getElementById("referralModal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeReferral() {

    const modal = document.getElementById("referralModal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

}


/* Close modal when clicking outside */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("referralModal");

    if (event.target === modal) {

        closeReferral();

    }

});


/* =========================
   REFERRAL FORM
========================= */

const referralForm = document.getElementById("referralForm");

referralForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();

    const lastName = document.getElementById("lastName").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const referralType = document.getElementById("referralType").value;


    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phone === "" ||
        referralType === ""
    ) {

        alert("Please fill in all required fields.");

        return;

    }


    /*
       In a real website, this information would be sent
       to your backend/database here.
    */

    closeReferral();

    document.getElementById("successMessage").classList.add("active");

    referralForm.reset();

});


/* =========================
   CLOSE SUCCESS MESSAGE
========================= */

function closeSuccess() {

    document.getElementById("successMessage")
        .classList.remove("active");

    document.body.style.overflow = "auto";

}


/* =========================
   PROPERTY SEARCH
========================= */

function searchProperties() {

    const location = document.querySelector(
        ".search-item input"
    ).value;

    const propertyType = document.querySelector(
        ".search-item select"
    ).value;


    if (location === "") {

        alert("Please enter a location to search.");

        return;

    }


    alert(
        "Searching for " +
        propertyType +
        " properties in " +
        location +
        "..."
    );

}


/* =========================
   PROPERTY DETAILS
========================= */

function showProperty(propertyName) {

    alert(
        "You selected: " +
        propertyName +
        "\n\nMore property information can be connected to a property details page."
    );

}


/* =========================
   CLOSE SUCCESS WITH ESC
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeReferral();

        closeSuccess();

    }

});