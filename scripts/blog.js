const blogBtn = document.getElementById("blog_btn");
const blog = document.querySelector(".blog__content")

blogBtn.addEventListener("click", function () {
    blogBtn.classList.toggle("more");
    if (blogBtn.classList.contains("more")) {
        blogBtn.textContent = "Show less";
        for (let i = 0; i < 2; i++) {
            const mainDiv = document.createElement("div");
            mainDiv.classList.add("article");
            const date = document.createElement("div");
            date.classList.add("article_date");
            date.innerHTML = `
            <div>
                <p>${[24 + i]}</p>
                <p>Aug</p>
            </div>
            `;
            mainDiv.appendChild(date);

            const text = document.createElement("div");
            text.classList.add("article_text");
            text.innerHTML = `
            <h3>Hason Rajay Koy Ami Keho Noire Ami Keho Noi</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quas architecto deleniti
                eius doloremque accusantium, voluptatibus totam et illo voluptate sit? </p>
            <button>Read more <i class="fas fa-chevron-right"></i></button>
            `;
            mainDiv.appendChild(text)
            mainDiv.classList.add("more")
            mainDiv.id = "added"
            blog.appendChild(mainDiv)
            setTimeout(function () { mainDiv.classList.remove("more") }, 500);

        }
    } else {
        blogBtn.textContent = "View all"
        for (let i = 0; i < 2; i++) {
            document.getElementById("added").remove()
        }
    }

})