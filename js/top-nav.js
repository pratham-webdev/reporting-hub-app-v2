const topNavItems = [
    {
        id: 1,
        icon: "magnifying-glass",
        name: ""
    },
    {
        id: 2,
        icon: "ellipsis",
        name: "More"
    },
    {
        id: 3,
        icon: "table-columns",
        name: "Quick Links"
    },
    {
        id: 4,
        icon: "circle-user",
        name: ""
    },
]

function topNavSection() {
    return `<nav class="navbar navbar-light bg-white border border-bottom top-nav">
  <div class="container-fluid">
    <div><a class="navbar-brand" href="#">Reporting Hub Demo</a></div>
    <div id="top-nav-links" class="d-flex align-items-center">
    ${createTopNavLinksArray()}
    </div>
  </div>
  </nav>`;
}

function createTopNavLinks(el) {
    return `<a href="#" class="nav-link d-inline-flex align-items-center p-2 me-3">
    <i class="fa-solid fa-${el.icon} ${el.name ? 'me-2' : ''} ${el.icon === 'circle-user' ? 'fs-4' : ''}"></i>
    ${el.name ? el.name : ''}
    </a>`
}

function createTopNavLinksArray() {
    if (window.innerWidth > 1100) {
        return topNavItems.map(createTopNavLinks).join("");
    }
    else {
        let tempdropArr = topNavItems.map((el) => {
            return `<li>${createTopNavLinks(el)}</li>`
        })
        return `<div class="dropdown">
      <button class="btn btn-sm btn-outline-new dropdown-toggle" type="button" id="dropdown-top-nav-links" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-person-fill me-2"></i>John Doe
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdown-top-nav-links">
        ${tempdropArr.join("")}
      </ul>
    </div>`;
    }
}



$('#navbar-container').append(topNavSection);