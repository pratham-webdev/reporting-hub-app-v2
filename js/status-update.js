
const statusArray = [
    {
        id:1,
        text:'$90,900',
        subtext:'Total Sales',
        img:'img/v-1.svg'
    },
    {
        id:2,
        text:'8,846',
        subtext:'Visits',
        img:'img/v-2.svg'
    },
    {
        id:3,
        text:'$6,560',
        subtext:'Payments',
        img:'img/v-3.svg'
    },
    {
        id:4,
        text:'78%',
        subtext:'Operational Effect',
        img:'img/v-4.svg'
    },
    {
        id:5,
        text:'$90,900',
        subtext:'Total Sales',
        img:'img/v-1.svg'
    },
]

function createStatusUpdate(el){
    return `<div class="col">
    <div class="card h-100">
      <div class="card-body">
            <img class="pb-3" src=${el.img}>
        <h2 class="fw-bold">${el.text}
        </h2>
        <div class="d-flex align-items-center justify-content-between">
          <h6 class="mb-0 text-muted fw-bold small">${el.subtext}
          </h6>
          <a href="" class="nav-link d-inline-flex align-items-center p-2" title="Search">
            <i class="fa-solid fa-circle-info"></i>
            </a>
        </div>
      </div>
    </div>
  </div>`
}

$('#status-updates').append(statusArray.map(createStatusUpdate).join(""));