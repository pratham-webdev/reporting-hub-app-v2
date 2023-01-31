const tableRowsArray = [
    {
        number:'#',
        first:'First',
        last:'Last',
        sales:'Sales',
        date:'Date'
    },
    {
        number:'1',
        first:'Mark',
        last:'Otto',
        sales:'$12,000',
        date:'Jan 30, 2023'
    },
    {
        number:'2',
        first:'James',
        last:'Dean',
        sales:'$9,000',
        date:'Jan 29, 2023'
    },
    {
        number:'3',
        first:'Kate',
        last:'Lycan',
        sales:'$4,000',
        date:'Jan 28, 2023'
    },
    {
        number:'4',
        first:'Gigi',
        last:'Hudson',
        sales:'$2,000',
        date:'Jan 30, 2023'
    },
]

function addTable(){
    return `<div class="mx-2 mb-3 row row-cols-md-5 g-3">
    ${tableRowsArray.map(createTableRows).join("")}
  </div>`
}

function createTableRows(el){
    let tempArray = [];
    console.log(el);
    for (let value in el){
        tempArray.push(` <div class="col pb-2 border-bottom small">${el[value]}</div>`);
    }
    return tempArray.join("");
}

$('.add-table').append(addTable);