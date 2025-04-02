import{S as f,i}from"./assets/vendor-BcHpxt-b.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="?key=49634928-8ee73fd5b07957627ef2b531c";function g(o){const l=new URLSearchParams({q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}${m}&${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(o){return o.map(({webformatURL:l,largeImageURL:t,tags:s,likes:e,views:r,comments:a,downloads:u})=>`
      <li class="gallery-card">
          <a class="gallery-link" href="${t}">
              <img class="gallery-img" src="${l}" alt="${s}" loading="lazy" />
              <ul class="gallery-list">
                  <li class="gallery-list-info">
                      <p class="gallery-info-name">Likes</p>
                      <p class="gallery-info-value">${e}</p>
                  </li>
                  <li class="gallery-list-info">
                      <p class="gallery-info-name">Views</p>
                      <p class="gallery-info-value">${r}</p>
                  </li>
                  <li class="gallery-list-info">
                      <p class="gallery-info-name">Comments</p>
                      <p class="gallery-info-value">${a}</p>
                  </li>
                  <li class="gallery-list-info">
                      <p class="gallery-info-name">Downloads</p>
                      <p class="gallery-info-value">${u}</p>
                  </li>
              </ul>
          </a>
      </li>
          `).join("")}const d=document.querySelector(".search-form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(o){o.preventDefault();const l=document.querySelector(".search-input").value;if(l===""){i.warning({title:"Caution",message:"Please enter a query!",position:"topRight",backgroundColor:"orange",maxWidth:"300px"});return}return c.classList.add("active"),g(l).then(t=>{if(c.classList.remove("active"),!t.total)return n.innerHTML="",i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"orange",maxWidth:"600px"}),[];n.innerHTML=y(t.hits),h.refresh()}).catch(t=>{console.log(t)})}d.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
