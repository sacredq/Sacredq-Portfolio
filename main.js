const langBtn = document.getElementById("lang-btn");
const sections = document.querySelectorAll("section");

// loading page
document.addEventListener("DOMContentLoaded", () => {
    const loadingPage = document.getElementById("loading-page");
    const loadingBar = document.getElementById("loading-bar");
    const loadingText = document.getElementById("loading-perc-text");

    let progress = 0;

    const LoadingInterval = setInterval( () => {
        progress += Math.random() * 15;

        if(progress >= 100){
            progress = 100;
            clearInterval(LoadingInterval);

            setTimeout(() => {
                loadingPage.style.opacity = "0";
                loadingPage.style.pointerEvents = "none";
            })
        }

        loadingBar.style.width = progress + "%";
        loadingText.textContent = Math.round(progress) + "%";
    }, 125);
});

// Setting the active section on Header Bar
const headerLinks = document.querySelectorAll(".header-links a");
const homeSectionLink = document.getElementById("home-section-link");

function headerLink(){
    const scrollY = window.pageYOffset;

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 100;
        const sectionId = currentSection.getAttribute("id");

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            headerLinks.forEach(currentLink => {
                currentLink.classList.remove("active");
                if(currentLink.getAttribute("href") === `#${sectionId}`){
                    currentLink.classList.add("active");
                } 
            })
        }
    });
}
window.addEventListener("DOMContentLoaded", headerLink);
window.addEventListener("scroll", headerLink);
// AOS ANIMATIONS
AOS.init({
    offset: 140, duration: 1000, 
});

const typed = new Typed('.animated-text', {
    strings: ['Frontend Developer', 'Designer', 'Freelancer', 'Programmer', "Coder", 'Junior Level'],
    typeSpeed: 50, backSpeed: 50, backDelay: 1000, startDelay: 100, loop: true,
    cursorChar: '|', smartBackspace: true, 
});

// projects box - Read More
const readmoreBtns = document.querySelectorAll(".read-more");

readmoreBtns.forEach((readmoreBtn => {
    readmoreBtn.addEventListener("click", () => {
        const currentBox = readmoreBtn.closest(".projects-box");
        const currentText = currentBox.querySelector(".read-more-text");

        currentText.classList.toggle("readmoreManage");

        if(currentText.classList.contains("readmoreManage")){
            readmoreBtn.textContent = "Read Less";
        } else{
            readmoreBtn.textContent = "Read More";
        }
    })
}));

// contact form 
const contactBoxOpenBtn = document.getElementById("sendBtn-opener");
const contactBox = document.getElementById("contact-box");
const closeBox = document.getElementById("close-form");

const inputFields = document.querySelectorAll(".form-field");
const emailField = document.getElementById("email");

const sendBtn = document.getElementById("send-message");

const footerSection = document.querySelector("footer");
contactBoxOpenBtn.addEventListener("click", () => {
    contactBox.classList.add("windowManage");
    footerSection.classList.add("sectionBlur");

    sections.forEach((section => {
        section.classList.add("sectionBlur");
    }));
});

sendBtn.addEventListener("click", () => {
    inputFields.forEach((inputField => {
        if(inputField.value === ""){
            inputField.classList.add("input-error");
        } else{
            inputField.classList.remove("input-error");
        }
    }));

    if(!emailField.value.includes("@") || !emailField.value.includes(".com") || emailField.value === ""){
        emailField.classList.add("input-error");
    } else{
        emailField.classList.remove("input-error");
    }

    const errorsCheck = [...inputFields].some(field => 
        field.classList.contains("input-error")
    );

    if(!errorsCheck){
        alert("This is a frontend-only form, so messages are not sent. Backend functionality will be added later.");
    }
})

closeBox.addEventListener("click", () => {
    contactBox.classList.remove("windowManage");
    footerSection.classList.remove("sectionBlur");

    sections.forEach((section => {
        section.classList.remove("sectionBlur");
    }));

    inputFields.forEach((inputField => {
        inputField.value = "";
        inputField.classList.remove("input-error");
    }));
})

// bars menu
const barsIcon = document.getElementById("bars-icon");
const headerMenu = document.getElementById("header-menu");

barsIcon.addEventListener("click", () => {
    headerMenu.classList.toggle("openManage");

    barsIcon.classList.toggle("fa-xmark");
    barsIcon.classList.toggle("fa-bars");
})
