const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if(!id){
    let img = document.createElement("img");
    img.src = "https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg";
    document.body.append(img);
    window.stop();
}