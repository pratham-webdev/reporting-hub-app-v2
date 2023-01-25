const quickLinks= [
    {
    id: 1,
    name: "CEO Weekly Reports"
},
{
    id: 2,
    name: "Sales Dashboard"
}, {
    id: 3,
    name: "Sales Demo 1"
}, {
    id: 4,
    name: "Quarterly Cashflow"
}, {
    id: 5,
    name: "Annual Report"
}, {
    id: 6,
    name: "Retail Sales"
},
{
    id: 7,
    name: "PBI Dashboard"
},]

function QuickLinksSection(){
    return `
    <div id="quick-links-panel" class="collapse">
    <div class="p-3 quick-links-sub-panel">
        <div class="d-flex align-items-center justify-content-between border-bottom pt-1 pb-2">
            <div class="h5 mb-0">Bookmarks</div>
            <a href="#quick-links-panel" class="nav-link d-inline-flex align-items-center p-2" title="Close" data-bs-toggle="collapse">
            <i class="fs-5 fa-solid fa-xmark"></i></a>
        </div>
        ${quickLinks.map(createQuickLinks).join("")}
        </div>
    </div>
    `
}

function createQuickLinks(el){
    return `
    <div class="d-flex align-items-center justify-content-between pt-2">
        <a href="#" class="nav-link p-2">
            ${el.name}
        </a>
        <a href="#" class="nav-link  p-2">
            <i class="fa-solid fa-trash-can"></i>
        </a>
    </div>`
}

$('body').append(QuickLinksSection);