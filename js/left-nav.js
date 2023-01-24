const leftNavItems = [
    {
        id: 1,
        name: `Home`,
        icon:'home',
        items: [],
        parentClass: "false",
        childClass: "show",
    },
    {
        id: 2,
        name: `Executive Dashboards`,
        icon:'home',
        items: ["CEO Weekly Update", "Municipal Bi-Weekly Status Report", "Quarterly Reports", "Monthly Reports",],
        parentClass: "active",
        childClass: "show",
        aria: "true"
    },
    {
        id: 3,
        name: `Sales Reporting`,
        icon:'home',
        items: ["CEO Weekly Update", "Municipal Bi-Weekly Status Report", "Quarterly Reports", "Monthly Reports",],
        parentClass: "",
        childClass: "",
        aria: "false"
    },
    {
        id: 4,
        name: `Financial KPIs`,
        icon:'home',
        items: ["CEO Weekly Update", "Municipal Bi-Weekly Status Report", "Quarterly Reports", "Monthly Reports",],
        parentClass: "",
        childClass: "",
        aria: "false"
    },
    {
        id: 5,
        name: `Marketing`,
        icon:'home',
        items: ["CEO Weekly Update", "Municipal Bi-Weekly Status Report", "Quarterly Reports", "Monthly Reports",],
        parentClass: "",
        childClass: "",
        aria: "false"
    },
    {
        id: 6,
        name: `Row Level Security`,
        icon:'home',
        items: ["CEO Weekly Update", "Municipal Bi-Weekly Status Report", "Quarterly Reports", "Monthly Reports",],
        parentClass: "",
        childClass: "",
        aria: "false"
    },
    {
        id: 7,
        name: `Videos`,
        icon:'home',
        items: ["CEO Weekly Update", "Municipal Bi-Weekly Status Report", "Quarterly Reports", "Monthly Reports",],
        parentClass: "",
        childClass: "",
        aria: "false"
    },
]

function createNavLeftNavSection(el) {
    console.log(el.items);
    return `
    <nav class="bd-links pt-1 pb-2 px-lg-3 px-md-2 px-sm-2 px-2">
    <div class="mb-2">
    <button class="btn d-flex align-items-center rounded w-100 ${el.parentClass} ${el.aria ? 'drop' : ''}" data-bs-toggle="collapse" data-bs-target="#leftNav-${el.id}"
      aria-expanded=${el.aria} title="${el.name}">
      <i class="fa-solid fa-${el.icon} me-2"></i>
      <span>${el.name}</span>
      </button>
    <div id="leftNav-${el.id}" class="collapse ${el.childClass}">
    ${createNavLinks(el.items)}
    </div>
  </div>
  </nav>`;
}

function createNavLinks(items) {
    return items.map((item)=>{
        return `<a href="" class="d-block fw-normal pb-1 rounded">${item}</a>`;
    }).join("");
}

$('#left-nav-panel').append(leftNavItems.map(createNavLeftNavSection));