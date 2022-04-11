let proposta = document.getElementById("proposta");

proposta.addEventListener("mouseenter", function(){
    proposta.innerHTML = "";

    let html_link = document.createElement("a");
    let pdf_link = document.createElement("a");
    let tex_link = document.createElement("a");

    html_link.setAttribute("href", "#");
    pdf_link.setAttribute("href", "#");
    tex_link.setAttribute("href", "#");

    html_link.innerHTML = "HTML";
    pdf_link.innerHTML = "PDF";
    tex_link.innerHTML = "TeX";

    proposta.style.padding = "0";
    proposta.style.display = "flex";
    proposta.style.border = "0";

    proposta.appendChild(html_link);
    proposta.appendChild(pdf_link);
    proposta.appendChild(tex_link);
});

proposta.addEventListener("mouseleave", function(){
    proposta.innerHTML = "Proposta";
    proposta.style.display = "";
    proposta.style.padding = "";
    proposta.style.border = "";
});