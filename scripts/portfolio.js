const buttons = [...document.querySelectorAll(".portfolio__text button")];
const bigImages = [
    {
        id: "Print",
        url: "images/portfolio/big_print_1.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/big_web_1.png"
    },
    {
        id: "Development",
        url: "images/portfolio/big_dev_1.png"
    }
]

const midImages = [
    {
        id: "Print",
        url: "images/portfolio/mid_print_1.png"
    },
    {
        id: "Print",
        url: "images/portfolio/mid_print_2.png"
    },
    {
        id: "Print",
        url: "images/portfolio/mid_print_3.png"
    },
    {
        id: "Print",
        url: "images/portfolio/mid_print_4.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/mid_web_1.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/mid_web_2.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/mid_web_3.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/mid_web_4.png"
    },
    {
        id: "Development",
        url: "images/portfolio/mid_dev_1.png"
    },
    {
        id: "Development",
        url: "images/portfolio/mid_dev_2.png"
    },
    {
        id: "Development",
        url: "images/portfolio/mid_dev_3.png"
    },
    {
        id: "Development",
        url: "images/portfolio/mid_dev_4.png"
    },
]

const smallImages = [
    {
        id: "Print",
        url: "images/portfolio/small_print_1.png"
    },
    {
        id: "Print",
        url: "images/portfolio/small_print_2.png"
    },
    {
        id: "Print",
        url: "images/portfolio/small_print_3.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/small_web_1.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/small_web_2.png"
    },
    {
        id: "Web Design",
        url: "images/portfolio/small_web_3.png"
    },
    {
        id: "Development",
        url: "images/portfolio/small_dev_1.png"
    },
    {
        id: "Development",
        url: "images/portfolio/small_dev_2.png"
    },
    {
        id: "Development",
        url: "images/portfolio/small_dev_3.png"
    },
]

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        buttons.forEach(item => {
            item.classList.remove("blue")
        })
        this.classList.add("blue")
    })
})

const bigDiv = [...document.querySelectorAll(".portfolio__gallery .big")];
const midDiv = [...document.querySelectorAll(".portfolio__gallery .mid")];
const smallDiv = [...document.querySelectorAll(".portfolio__gallery .small")];
const bigImagesSelected = [];
const midImagesSelected = [];
const smallImagesSelected = [];


const changeImages = function (a, b) {
    // console.log(a, b)

    a.forEach(div => {
        let min = 0;
        let max = Math.floor(b.length - 1);
        let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        div.style.backgroundImage = `url('${b[randomIndex].url}')`;

    })
}




const selectImage = function () {
    bigImagesSelected.length = 0;
    midImagesSelected.length = 0;
    smallImagesSelected.length = 0;
    const imageType = this.textContent;
    // console.log(imageType)
    for (let i = 0; i < bigImages.length; i++) {
        if (imageType === bigImages[i].id) {
            bigImagesSelected.push(bigImages[i])
        }
        else if (imageType === "All") {
            bigImagesSelected.push(bigImages[i])
        }

    }
    for (let i = 0; i < midImages.length; i++) {
        if (imageType === midImages[i].id) {
            midImagesSelected.push(midImages[i])
        }
        else if (imageType === "All") {
            midImagesSelected.push(midImages[i])
        }

    }
    for (let i = 0; i < smallImages.length; i++) {
        if (imageType === smallImages[i].id) {
            smallImagesSelected.push(smallImages[i])
        }
        else if (imageType === "All") {
            smallImagesSelected.push(smallImages[i])
        }

    }
    // console.log(bigImagesSelected)
    // console.log(midImagesSelected)
    // console.log(smallImagesSelected)
    changeImages(bigDiv, bigImagesSelected);
    changeImages(midDiv, midImagesSelected);
    changeImages(smallDiv, smallImagesSelected);

}

buttons.forEach(btn => {
    btn.addEventListener("click", selectImage)
})

