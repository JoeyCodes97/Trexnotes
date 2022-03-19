


window.addEventListener('DOMContentLoaded', () => {
    // Grab benu and dropdown elements
    let menuBtn = document.querySelector('#menuBtn');
    let dropDown = document.querySelector('#dropDown');
    let chev = document.querySelector('.chev');
    let chev2 = document.querySelector('.chev2');
    let chev3 = document.querySelector('.chev3');

  

    // ROTATE CHEVRON 1
    chev.addEventListener('click', ()=> {
      if(chev.classList.contains('-rotate-90')) {
        chev.classList.remove('-rotate-90');
        chev.classList.add("rotate-1");
      
      } else {
       if(chev.classList.contains('rotate-1')) {
         chev.classList.remove('rotate-1');
         chev.classList.add("-rotate-90");
       }
      }
    })

    // ROTATE CHEVRON 2
    chev2.addEventListener('click', ()=> {
      if(chev2.classList.contains('-rotate-90')) {
        chev2.classList.remove('-rotate-90');
        chev2.classList.add("rotate-1");
      
      } else {
       if(chev2.classList.contains('rotate-1')) {
         chev2.classList.remove('rotate-1');
         chev2.classList.add("-rotate-90");
       }
      }
    })

    // ROTATE CHEVRON 3
    chev3.addEventListener('click', ()=> {
      if(chev3.classList.contains('-rotate-90')) {
        chev3.classList.remove('-rotate-90');
        chev3.classList.add("rotate-1");
      
      } else {
        if(chev3.classList.contains('rotate-1')) {
          chev3.classList.remove('rotate-1');
          chev3.classList.add("-rotate-90");
        }
      }
    })

////////////////////////////////////////////////////////////////

    // DROP DOWN 1
    menuBtn.addEventListener('click', () => {
      if (dropDown.classList.contains('hidden')) {
        dropDown.classList.remove('hidden');
        dropDown.classList.add('flex');
       
      
        
      } else {
        if (dropDown.classList.contains('flex')) {
          dropDown.classList.remove('flex');
          dropDown.classList.add('hidden');
        }
      }
    })
  })

  // DROP DOWN 2
  window.addEventListener('DOMContentLoaded', () => {
    // Grab benu and dropdown elements
    let menuBtn2 = document.querySelector('#menuBtn2');
    let dropDown2 = document.querySelector('#dropDown2');

    menuBtn2.addEventListener('click', () => {
      if (dropDown2.classList.contains('hidden')) {
        dropDown2.classList.remove('hidden');
        dropDown2.classList.add('flex');
      } else {
        if (dropDown2.classList.contains('flex')) {
          dropDown2.classList.remove('flex');
          dropDown2.classList.add('hidden');
        }
      }
    })
  })

  // DROP DOWN 3
  window.addEventListener('DOMContentLoaded', () => {
    // Grab benu and dropdown elements
    let menuBtn3 = document.querySelector('#menuBtn3');
    let dropDown3 = document.querySelector('#dropDown3');

    menuBtn3.addEventListener('click', () => {
      if (dropDown3.classList.contains('hidden')) {
        dropDown3.classList.remove('hidden');
        dropDown3.classList.add('flex');
      } else {
        if (dropDown3.classList.contains('flex')) {
          dropDown3.classList.remove('flex');
          dropDown3.classList.add('hidden');
        }
      }
    })
  })




 window.addEventListener('DOMContentLoaded', ()=> {

        // MODAL 1
        let modal = document.querySelector('.modal');
        let showModal = document.querySelector('.showModal');
        let closeBtn = document.querySelector('.closeBtn');

        showModal.addEventListener('click', () => {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          
        })

        closeBtn.addEventListener('click', () => {
          modal.classList.remove('flex');
          modal.classList.add('hidden');
        })




 })



 
 window.addEventListener('DOMContentLoaded', ()=> {

  let modalBtn = document.querySelector('.modalBtn');
  let modalBg = document.querySelector('.modalBg');
  let modalClose = document.querySelector('.modalClose');

  modalBtn.addEventListener('click', () => {
    if (modalBg.classList.contains('hidden')) {
      modalBg.classList.remove('hidden');
      modalBg.classList.add('flex');
    }
  })

  modalClose.addEventListener('click', () => {
    if (modalBg.classList.contains('flex')) {
      modalBg.classList.remove('flex');
      modalBg.classList.add('hidden');
    }
  })



  // SCOPE DROPDOWN

  let selectField2 = document.getElementById('selectField2');
  let selectText2 = document.getElementById('selectText2');
  let options2 = document.getElementsByClassName('options2');
  let list2 = document.getElementById('list2');
  let arrow2 = document.getElementById('arrow2');

  selectField2.onclick = function () {
    list2.classList.toggle('hidden');
    arrow2.classList.toggle('rotate-180')
  }

  for (option of options2) {
    option.onclick = function () {
      selectText2.innerHTML = this.textContent;
      list2.classList.toggle('hidden');
      arrow2.classList.toggle('rotate-180')
    }
  }


  // PROJECT DROPDOWN

  // MODAL
  let selectField = document.getElementById('selectField');
  let selectText = document.getElementById('selectText');
  let options = document.getElementsByClassName('options');
  let list = document.getElementById('list');
  let arrow = document.getElementById('arrow');

  selectField.onclick = function () {
    list.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180')
  }

  for (option of options) {
    option.onclick = function () {
      selectText.innerHTML = this.textContent;
      list.classList.toggle('hidden');
      arrow.classList.toggle('rotate-180')
    }
  }


  // Copy
  let btnCopy = document.querySelector('.btn-copy');
  let txtCopy = document.querySelector('.box')

  btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(txtCopy.textContent);
  })



  // TEXT EDITOR
   
  


})