let currentPage = 0;
const pages = document.querySelectorAll(".page");

function goToPage(targetPage) {
    if (targetPage < 0 || targetPage >= pages.length) return;

    // 隐藏当前页面
    pages[currentPage].classList.remove("active");
    pages[currentPage].classList.add("hidden");

    // 等待翻页动画结束后显示新页面
    setTimeout(() => {
        pages[targetPage].classList.add("active");
        pages[targetPage].classList.remove("hidden");
        currentPage = targetPage;
    }, 800);
}

// 绑定封面点击事件
document.getElementById("cover").addEventListener("click", function () {
    goToPage(1);
});