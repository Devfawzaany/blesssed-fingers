const WHATSAPP_NUMBER = "2349115965390";
const helloMessage = "Hello Blessed Fingers Naturals 👋, I’d love a little help choosing a product. Please could you tell me more?";
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const products = [
  {id:"glow-harvest",name:"Glow Harvest Brightening Lotion",label:"Glow Harvest Brightening Lotion",category:"body",price:20000,priceLabel:"₦20,000",description:"A smooth, comforting lotion to make body care feel like a ritual.",tag:"Body care",image:"glow a.jpeg",benefits:"A moisturising body lotion for a comforting, smooth-feeling finish after bathing.",ingredients:"The packaging references arbutin, kojic acid, aloe and botanical ingredients. Contact us to confirm the complete current list.",howToUse:"Smooth over clean, dry skin and massage until absorbed. Ask us about recommended use.",availability:"Available to order — please confirm current stock with us."},
  {id:"lustre-glow-oil-13k",name:"Lustre Glow Oil",label:"Lustre Glow Oil",category:"body",price:13000,priceLabel:"₦13,000",description:"A nourishing body oil for a little extra everyday softness.",tag:"Everyday glow",image:"lusture glow.jpeg",benefits:"A richly emollient body oil for a comforting, pampering moment after bathing.",ingredients:"Please contact us for the full ingredient list and current product details.",howToUse:"Smooth a small amount over clean, slightly damp skin. Patch test before first use.",availability:"Available to order — please confirm current stock with us."},
  {id:"purifying-clay-mask",name:"Purifying Clay Elixir Mask",label:"Purifying Clay Elixir Mask",category:"face",price:4000,priceLabel:"₦4,000",description:"A clay mask for a considered, at-home skincare moment.",tag:"Face ritual",image:"purifying clay elixir mask.jpeg",benefits:"A clay mask to complement your weekly face-care ritual.",ingredients:"Pink kaolin clay, turmeric, bentonite clay, neem, licorice root and peppermint are listed on the package.",howToUse:"Mix and apply as directed on the packaging. Avoid the eye area and discontinue if irritation occurs.",availability:"Available to order — please confirm current stock with us."},
  {id:"rose-toner",name:"Clear Bloom Rose Toner",label:"Clear Bloom Rose Toner",category:"face",price:5000,priceLabel:"₦5,000",description:"A gentle, refreshing rose toner for your everyday routine.",tag:"A daily favourite",image:"clear bloom rose toner.jpeg",benefits:"A refreshing facial toner to bring a little lift to your everyday skincare ritual.",ingredients:"Please contact us for the full ingredient list and current product details.",howToUse:"Apply to clean skin with a cotton pad or as directed on the packaging.",availability:"Available to order — please confirm current stock with us."},
  {id:"hydra-balance",name:"Hydra Balance Moisturizer",label:"Hydra Balance Moisturizer",category:"face",price:4800,priceLabel:"₦4,800",description:"A comforting moisturiser to finish your daily face-care ritual.",tag:"Daily hydration",image:"hydra balance moisture.jpeg",benefits:"A moisturising step to complement your everyday skincare routine.",ingredients:"Please contact us for the full ingredient list and current product details.",howToUse:"Smooth over clean skin as directed on the packaging.",availability:"Available to order — please confirm current stock with us."},
  {id:"lumibloom-face-wash",name:"Lumibloom Face Wash",label:"Lumibloom Face Wash",category:"cleanse",price:6500,priceLabel:"₦6,500",description:"A refreshing daily cleanse to start or end your skincare ritual.",tag:"Daily cleanse",image:"lumibloom.jpeg",benefits:"A face wash for a simple, considered cleansing step in your skincare ritual.",ingredients:"Please contact us for the full ingredient list and current product details.",howToUse:"Lather a small amount with water, cleanse gently and rinse thoroughly. Avoid the eye area.",availability:"Available to order — please confirm current stock with us."},
  {id:"botanical-serum",name:"Botanical Balance Serum",label:"Botanical Balance Serum",category:"face",price:6700,priceLabel:"₦6,700",description:"A thoughtful little step to add to your daily face-care ritual.",tag:"Botanical care",image:"collection.jpg",benefits:"A considered botanical serum made to complement your daily face-care routine.",ingredients:"Please contact us for the full ingredient list and current product details.",howToUse:"Apply a few drops to clean skin and gently press in. Ask us how to pair it with your routine.",availability:"Available to order — please confirm current stock with us."},
  {id:"turmeric-sugar-scrub",name:"Turmeric Sugar Scrub",label:"Turmeric Sugar Scrub",category:"body",price:7500,priceLabel:"₦7,500",description:"A botanical-inspired exfoliating step for your weekly reset.",tag:"Weekly ritual",image:"tumeric.jpeg",benefits:"A scrub to bring a gentle exfoliating moment to your body-care routine.",ingredients:"The product packaging lists ingredients; please contact us to confirm the full current list.",howToUse:"Gently massage over wet skin, then rinse thoroughly. Use as directed on the packaging.",availability:"Available to order — please confirm current stock with us."},
  {id:"herbal-soap",name:"Flawless Herbal Soap",label:"African Black & Green Herbal Soap",category:"cleanse",price:7800,priceLabel:"₦7,800",description:"A carefully made herbal cleansing bar for your everyday wash.",tag:"Herbal cleanse",image:"flawless harbal soap.jpeg",benefits:"A herbal soap for a simple, considered cleansing step in your body-care ritual.",ingredients:"African black soap and botanical ingredients are mentioned on the packaging. Please contact us to confirm the complete current list.",howToUse:"Lather between wet hands, cleanse gently and rinse well. Avoid the eye area.",availability:"Available to order — please confirm current stock with us."},
  {id:"luster-glow-oil",name:"Luster Glow Oil",label:"Luster Glow Oil",category:"body",price:8000,priceLabel:"₦8,000",description:"A nourishing body oil for a little extra everyday softness.",tag:"Everyday glow",image:"collection.jpg",benefits:"A richly emollient body oil for a comforting, pampering moment after bathing.",ingredients:"Please contact us for the full ingredient list and current product details.",howToUse:"Smooth a small amount over clean, slightly damp skin. Patch test before first use.",availability:"Available to order — please confirm current stock with us."},
  {id:"full-kit",name:"Full Kit",label:"Blessed Fingers Naturals full skincare kit",category:"kit",price:78000,priceLabel:"₦78,000",description:"A complete collection of skincare favourites in one thoughtful kit.",tag:"The full collection",image:"full kit.jpeg",benefits:"A collection of Blessed Fingers Naturals favourites in one kit.",ingredients:"Ingredients vary by product. Contact us for individual product details.",howToUse:"Products have different directions for use. Please ask us for help building your routine.",availability:"Available to order — please confirm current stock with us."}
];

const productGrid = document.querySelector("#product-grid");
const modal = document.querySelector("#product-modal");
const modalContent = document.querySelector("#modal-content");
const whatsappIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.3 14.7L2.2 22l5.4-1.4A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 19.8Zm4.4-6c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.7-.2-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.3-.9.9-.9 2s.9 2.4 1 2.6c.1.1 1.7 2.6 4.2 3.6.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.4-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Z"/></svg>`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl(helloMessage);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

function productWhatsAppMessage(name) {
  return `Hello Blessed Fingers Naturals 👋, I’m interested in ordering ${name}. Please I’d like to know more about it.`;
}

function renderProducts(category = "all") {
  const filtered = products.filter((product) => category === "all" || product.category === category || (category === "body" && product.category === "kit"));
  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-image" data-view-product="${product.id}" role="button" tabindex="0" aria-label="View details for ${product.name}">
        <img src="${product.image}" alt="${product.label}" loading="lazy">
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-info">
        <div class="product-meta"><h3>${product.name}</h3><span class="product-price">${product.priceLabel}</span></div>
        <p class="product-description">${product.description}</p>
        <div class="product-actions"><button class="button button-outline" data-view-product="${product.id}">View product <span>↗</span></button><a class="button-whatsapp" href="${whatsappUrl(productWhatsAppMessage(product.name))}" target="_blank" rel="noopener noreferrer">${whatsappIcon} Order on WhatsApp</a></div>
      </div>
    </article>`).join("");
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  modalContent.innerHTML = `
    <div class="modal-image"><img src="${product.image}" alt="${product.label}"></div>
    <div class="modal-details">
      <span class="eyebrow">${product.tag}</span><h2 id="modal-title">${product.name}</h2><span class="modal-price">${product.priceLabel}</span>
      <p class="modal-description">${product.description}</p>
      <div class="detail-list">
        <div class="detail-item"><h3>A little about it</h3><p>${product.benefits}</p></div>
        <div class="detail-item"><h3>Ingredients</h3><p>${product.ingredients}</p></div>
        <div class="detail-item"><h3>How to use</h3><p>${product.howToUse}</p></div>
      </div>
      <p class="availability">${product.availability}</p>
      <a class="button button-dark modal-order" href="${whatsappUrl(productWhatsAppMessage(product.name))}" target="_blank" rel="noopener noreferrer">${whatsappIcon} Order on WhatsApp <span>↗</span></a>
    </div>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeProduct() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

productGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-view-product]");
  if (trigger) openProduct(trigger.dataset.viewProduct);
});
productGrid.addEventListener("keydown", (event) => {
  const trigger = event.target.closest("[data-view-product][role='button']");
  if (trigger && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProduct(trigger.dataset.viewProduct);
  }
});
document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filter-button.active")?.classList.remove("active");
  button.classList.add("active");
  renderProducts(button.dataset.filter);
}));
modal.addEventListener("click", (event) => { if (event.target.closest("[data-close-modal]")) closeProduct(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal.classList.contains("is-open")) closeProduct(); });

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a:not([data-whatsapp])").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}));

renderProducts();


const reviewForm = document.querySelector("#review-form");
reviewForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!reviewForm.reportValidity()) return;
  const formData = new FormData(reviewForm);
  const subject = `Customer review: ${formData.get("product")}`;
  const body = `Name: ${formData.get("name")}\nProduct: ${formData.get("product")}\nRating: ${formData.get("rating")}\n\nReview:\n${formData.get("review")}`;
  document.querySelector("#review-form-status").textContent = "Opening your email app with the review ready to send.";
  window.location.href = `mailto:idayatqazeem445@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});