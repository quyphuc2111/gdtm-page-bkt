const circle = document.getElementById("circle");
const part = document.querySelectorAll(".part");
const part_1 = document.querySelector(".part.part_1");
const part_2 = document.querySelector(".part.part_2");
const part_3 = document.querySelector(".part.part_3");
const part_4 = document.querySelector(".part.part_4");
let temp = 0;
circle.addEventListener("click", () => {
    if (temp == 0) {
        part.forEach((e) => {
            if (!e.classList.contains("d-none")) {
                part_1.classList.replace("animate__fadeInTopLeft", "animate__fadeOutTopLeft")
                part_2.classList.replace("animate__fadeInTopRight", "animate__fadeOutTopRight")
                part_3.classList.replace("animate__fadeInBottomLeft", "animate__fadeOutBottomLeft")
                part_4.classList.replace("animate__fadeInBottomRight", "animate__fadeOutBottomRight")
                temp = 1
            }
        })
        part.forEach((e) => {
            e.classList.remove("d-none")
        })
    } else {
        part_1.classList.replace("animate__fadeOutTopLeft", "animate__fadeInTopLeft")
        part_2.classList.replace("animate__fadeOutTopRight", "animate__fadeInTopRight")
        part_3.classList.replace("animate__fadeOutBottomLeft", "animate__fadeInBottomLeft")
        part_4.classList.replace("animate__fadeOutBottomRight", "animate__fadeInBottomRight")
        temp = 0;
    }
})

const menu = [
    {
        part: part_1,
        title: "Smart Kid",
        content: ` <div>
        <div class="text">
        <i class='bx bxs-message-check bx-tada' ></i>
        <p>Là một ứng dụng thú vị</p> 
    </div>
    <div class="text">
        <i class='bx bxs-book-alt bx-tada' ></i>
        <p>Kết hợp bài giảng đa màu sắc</p>
    </div>
    <div class="text">
        <i class='bx bx-category-alt bx-tada' ></i>
        <p>Các chủ đề quen thuộc với cuộc sống</p>
    </div>
    <div class="text">
        <i class='bx bxs-music bx-tada' ></i>
        <p>Tiếp thu thụ động qua các bài hát</p>
    </div>
    <div class="text ">
        <i class='bx bx-pen bx-tada' ></i>
        <p>Thực hành ngay khi học</p>
    </div>
    </div>
        <div class="see-more-btn">
        <div class="wrapper">
            <a class="button" href="smartkid.html">Xem thêm</a>
        </div>
        
        <!-- Filter: https://css-tricks.com/gooey-effect/ -->
        <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>
    </div>
        `,
        background: "#0C8BDF"
    },
    {
        part: part_2,
        title: "BKT Smart English",
        content: `<div>
        <div class="text">
        <i class='bx bxs-message-check bx-tada' ></i>
        <p>Là một ứng dụng thú vị</p> 
    </div>
    <div class="text">
        <i class='bx bxs-book-alt bx-tada' ></i>
        <p>Kết hợp bài giảng đa màu sắc</p>
    </div>
    <div class="text">
        <i class='bx bx-category-alt bx-tada' ></i>
        <p>Các chủ đề quen thuộc với cuộc sống</p>
    </div>
    <div class="text">
        <i class='bx bxs-music bx-tada' ></i>
        <p>Tiếp thu thụ động qua các bài hát</p>
    </div>
    <div class="text ">
        <i class='bx bx-pen bx-tada' ></i>
        <p>Thực hành ngay khi học</p>
    </div>
    </div>
        <div class="see-more-btn">
        <div class="wrapper">
            <a class="button" href="#">Xem thêm</a>
        </div>
        
        <!-- Filter: https://css-tricks.com/gooey-effect/ -->
        <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>
    </div>`,
        background: "#B542D3"
    },
    {
        part: part_3,
        title: "Smart Learning",
        content: `<div>
        <div class="text">
        <i class='bx bxs-message-check bx-tada' ></i>
        <p>Là một ứng dụng thú vị</p> 
    </div>
    <div class="text">
        <i class='bx bxs-book-alt bx-tada' ></i>
        <p>Kết hợp bài giảng đa màu sắc</p>
    </div>
    <div class="text">
        <i class='bx bx-category-alt bx-tada' ></i>
        <p>Các chủ đề quen thuộc với cuộc sống</p>
    </div>
    <div class="text">
        <i class='bx bxs-music bx-tada' ></i>
        <p>Tiếp thu thụ động qua các bài hát</p>
    </div>
    <div class="text ">
        <i class='bx bx-pen bx-tada' ></i>
        <p>Thực hành ngay khi học</p>
    </div>
    </div>
        <div class="see-more-btn">
        <div class="wrapper">
            <a class="button" href="#">Xem thêm</a>
        </div>
        
        <!-- Filter: https://css-tricks.com/gooey-effect/ -->
        <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>
    </div>`,
        background: "#F35A9D"
    },
    {
        part: part_4,
        title: "Protal School",
        content: `<div>
        <div class="text">
        <i class='bx bxs-message-check bx-tada' ></i>
        <p>Là một ứng dụng thú vị</p> 
    </div>
    <div class="text">
        <i class='bx bxs-book-alt bx-tada' ></i>
        <p>Kết hợp bài giảng đa màu sắc</p>
    </div>
    <div class="text">
        <i class='bx bx-category-alt bx-tada' ></i>
        <p>Các chủ đề quen thuộc với cuộc sống</p>
    </div>
    <div class="text">
        <i class='bx bxs-music bx-tada' ></i>
        <p>Tiếp thu thụ động qua các bài hát</p>
    </div>
    <div class="text ">
        <i class='bx bx-pen bx-tada' ></i>
        <p>Thực hành ngay khi học</p>
    </div>
    </div>
        <div class="see-more-btn">
        <div class="wrapper">
            <a class="button" href="#">Xem thêm</a>
        </div>
        
        <!-- Filter: https://css-tricks.com/gooey-effect/ -->
        <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>
    </div>`,
        background: "#F9B823"
    },
    {
        part: circle,
        title: "Giáo dục thông minh",
        content: ` 
        <div>
        <div class="text">
        <i class='bx bxs-message-check'></i>
        <p>Với các tính năng tương tác linh hoạt</p> 
    </div>
    <div class="text">
        <i class='bx bxs-message-check'></i>
        <p>Áp dụng cho tất cả các lứa tuổi</p>
    </div>
    <div class="text">
        <i class='bx bxs-message-check'></i>
        <p>Tạo cảm giác hứng thú cho người dùng</p>
    </div>
    <div class="text">
        <i class='bx bxs-message-check'></i>
        <p>Các chủ đề đa dạng phong phú</p>
    </div>
    <div class="text ">
        <i class='bx bxs-message-check'></i>
        <p>Đơn giản hóa thao tác sử dụng</p>
    </div>
    </div>
    <div class="see-more-btn">
    <div class="wrapper">
        <a class="button" href="#">Xem thêm</a>
    </div>
    
    <!-- Filter: https://css-tricks.com/gooey-effect/ -->
    <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>
</div>`
    }
]
const title = document.querySelector(".left-column .title h1");
const content = document.querySelector(".left-column .content");
menu.map((item) => {
    item.part.addEventListener("click", (e) => {
        title.innerHTML = item.title;
        content.innerHTML = item.content;
        content.style.backgroundColor = item.background;
        content.style.color = "white"
        if (item.part == circle) {
            content.style.color = "#333"
            content.style.background = "#e5e5e5"
        }
    })
})

window.addEventListener("scroll", () => {
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 550) {
        circle.classList.remove("animate__bounce")
    } else {
        circle.classList.add("animate__bounce")
    }
})

