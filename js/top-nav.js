const topNavItems = [
    {
        id: 'top-nav-1',
        icon: "magnifying-glass",
        name: "",
        title: 'Search',
    },
    {
        id: 'top-nav-2',
        icon: "ellipsis",
        name: "More",
        title: 'More Options',
        options: [
            {
            id: 1,
            icon: "star",
            name: "Bookmarks"
        },
        {
            id: 2,
            icon: "share-nodes",
            name: "Share"
        }, {
            id: 3,
            icon: "file-export",
            name: "Export"
        }, {
            id: 4,
            icon: "up-right-and-down-left-from-center",
            name: "Fullscreen"
        },
    ],
    },
    {
        id: 'top-nav-3',
        icon: "table-columns",
        name: "Quick Links",
        title: 'Quick Links',
        href:'#quick-links-panel',
    },
    {
        id: 'top-nav-4',
        icon: "circle-user",
        name: "",
        title: 'User Settings',
        options: [
            {
            id: 1,
            icon: "gear",
            name: "Oranization Setup"
        },
        {
            id: 2,
            icon: "toggle-on",
            name: "Capacity Settings"
        }, {
            id: 3,
            icon: "swatchbook",
            name: "Edit Theme"
        }, {
            id: 4,
            icon: "users",
            name: "Manage Groups"
        }, {
            id: 5,
            icon: "diagram-project",
            name: "Manage Navigation"
        }, {
            id: 6,
            icon: "chart-pie",
            name: "Site Usage"
        },
        {
            id: 7,
            icon: "arrow-right-from-bracket",
            name: "Logout"
        },]
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
   if(el.options){
    return `
    <div class="position-relative">
    <a href="#${el.id}" class="nav-link d-inline-flex align-items-center p-2 me-3" title="${el.title}" data-bs-toggle="dropdown" role="button">
    <i class="fa-solid fa-${el.icon} ${el.name ? 'me-2' : ''} ${el.icon === 'circle-user' ? 'fs-4' : ''}"></i>
    ${el.name ? el.name : ''}
    </a>
    ${createDropDownOptions(el.options,el.id)}
    </div>
    `}
    else{
        return `<a href="${el.href ? el.href : ''}" class="nav-link d-inline-flex align-items-center p-2 me-3" title="${el.title}" ${el.href ? `data-bs-toggle="collapse"` : ''}>
        <i class="fa-solid fa-${el.icon} ${el.name ? 'me-2' : ''} ${el.icon === 'circle-user' ? 'fs-4' : ''}"></i>
        ${el.name ? el.name : ''}
        </a>
        `
    }
   }

function createTopNavLinksArray() {
        return topNavItems.map(createTopNavLinks).join("");
}

function createDropDownOptions(options,id) {
    return `<ul class="dropdown-menu p-2" id="${id}">
        ${options.map((el)=>{
            return `<a href="#" class="nav-link  p-2">
            <i class="fa-solid fa-${el.icon} me-2"></i>
            ${el.name}
            </a>`
        }).join("")}
      </ul>`
}

$('#navbar-container').append(topNavSection);