let proposta = document.getElementById("proposta");

proposta.addEventListener("mouseenter", function(){
    proposta.innerHTML = "";

    let html_link = document.createElement("a");
    let pdf_link = document.createElement("a");

    html_link.setAttribute("href", "./proposta.html");
    pdf_link.setAttribute("href", "./proposta.pdf");
    pdf_link.setAttribute("target", "_blank");

    html_link.innerHTML = "HTML";
    pdf_link.innerHTML = "PDF";

    proposta.style.padding = "0";
    proposta.style.display = "flex";
    proposta.style.border = "0";

    proposta.appendChild(html_link);
    proposta.appendChild(pdf_link);
});

proposta.addEventListener("mouseleave", function(){
    proposta.innerHTML = "Proposta";
    proposta.style.display = "";
    proposta.style.padding = "";
    proposta.style.border = "";
});