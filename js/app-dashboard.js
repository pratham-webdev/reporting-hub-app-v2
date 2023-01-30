

function createCard(el){
return `
        <div class="card mx-3 mb-3">
      <div class="card-body">
          <div class="h6 fw-bold text-dark d-flex align-items-center">Test
          </div>
        <div id="card-4">
        </div>
      </div>
    </div>`
}

$('#tabs-container').append(createCard());