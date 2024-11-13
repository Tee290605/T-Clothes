function changeImage(color) {
    const ao = document.querySelectorAll('.ao');
    
    if (ao.length > 0) {
        if (color === 'black') {
            ao[0].src = "1344447_màu_đen-removebg-preview.png";
        } else if (color === 'grey') {
            ao[0].src = "1344447_màu_xám-removebg-preview.png";
        }
    }
}

function changeImage1(color1) {
    const ao1 = document.querySelectorAll('.ao1');
    
    if (ao1.length > 0) {
        if (color1 === 'yellow') {
            ao1[0].src = "image-removebg-preview (7).png";
        } else if (color1 === 'brown') {
            ao1[0].src = "image-removebg-preview (8).png";
        } else if (color1 === 'black') {
            ao1[0].src = "image-removebg-preview (9).png";
        } else if (color1 === 'green') {
            ao1[0].src = "7ccec356-zoro-removebg-preview.png";
        }
    }
}

function changeImage2(color2) {
    const ao2 = document.querySelectorAll('.ao2');
    
    if (ao2.length > 0) {
        if (color2 === 'blue') {
            ao2[0].src = "c3bff584-xanhduong-removebg-preview.png";
        } else if (color2 === 'pink') {
            ao2[0].src = "image-removebg-preview (1).png";
        } else if (color2 === 'beige') {
            ao2[0].src = "image-removebg-preview.png";
        }
    }
}

function changeImage4(color4) {
    const ao4 = document.querySelectorAll('.ao4');
    
    if (ao4.length > 0) {
        if (color4 === 'black') {
            ao4[0].src = "image-removebg-preview (6).png";
        } else if (color4 === 'grey') {
            ao4[0].src = "image-removebg-preview (4).png";
        } else if (color4 === 'beige') {
            ao4[0].src = "image-removebg-preview (2).png";
        } else if (color4 === 'white') {
            ao4[0].src = "image-removebg-preview (5).png";
        }
    }
}
//button left-right




document.addEventListener("DOMContentLoaded", function() {

    const buttonright = document.querySelector('.bx-chevron-right');
    const buttonleft = document.querySelector('.bx-chevron-left');
    let index = 0;
    const lengthSlider = document.querySelectorAll('.backgroundslider').length;
  
    if (buttonright) {
        buttonright.addEventListener('click', function() {
            index += 1;
            if (index === lengthSlider) {
                index = 0;
            }
            document.querySelector('.backgroundsliderContainer').style.right = index * 100 + "%";
        });
    }
  
    if (buttonleft) {
        buttonleft.addEventListener('click', function() {
            index -= 1;
            if (index < 0) {
                index = lengthSlider - 1;
            }
            document.querySelector('.backgroundsliderContainer').style.right = index * 100 + "%";
        });
    }
  //-----------------------------------------------------------------------------
    const buttonright1 = document.querySelector('.bx-chevron-right-1');
    const buttonleft1 = document.querySelector('.bx-chevron-left-1');
    let index1 = 0;
    const lengthSlider1 = document.querySelectorAll('.backgroundslider1').length;
  
    if (buttonright1) {
        buttonright1.addEventListener('click', function() {
            index1 += 1;
            if (index1 === lengthSlider1) {
                index1 = 0;
            }
            document.querySelector('.backgroundsliderContainer1').style.right = index1 * 100 + "%";
        });
    }
  
    if (buttonleft1) {
        buttonleft1.addEventListener('click', function() {
            index1 -= 1;
            if (index1 < 0) {
                index1 = lengthSlider1 - 1;
            }
            document.querySelector('.backgroundsliderContainer1').style.right = index1 * 100 + "%";
        });
    }
  //-------------------------------------------------------------------------------------
    const buttonright2 = document.querySelector('.bx-chevron-right-2');
    const buttonleft2 = document.querySelector('.bx-chevron-left-2');
    let index2 = 0;
    const lengthSlider2 = document.querySelectorAll('.backgroundslider2').length;
  
    if (buttonright2) {
        buttonright2.addEventListener('click', function() {
            index2 += 1;
            if (index2 === lengthSlider2) {
                index2 = 0;
            }
            document.querySelector('.backgroundsliderContainer2').style.right = index2 * 100 + "%";
        });
    }
  
    if (buttonleft2) {
        buttonleft2.addEventListener('click', function() {
            index2 -= 1;
            if (index2 < 0) {
                index2 = lengthSlider2 - 1;
            }
            document.querySelector('.backgroundsliderContainer2').style.right = index2 * 100 + "%";
        });
    }

    //-------------------------------------------------------------
    const buttonright3 = document.querySelector('.bx-chevron-right-3');
    const buttonleft3 = document.querySelector('.bx-chevron-left-3');
    let index3 = 0;
    const lengthSlider3 = document.querySelectorAll('.backgroundslider3').length;
  
    if (buttonright3) {
        buttonright3.addEventListener('click', function() {
            index3 += 1;
            if (index3 === lengthSlider3) {
                index3 = 0;
            }
            document.querySelector('.backgroundsliderContainer3').style.right = index3 * 100 + "%";
        });
    }
  
    if (buttonleft3) {
        buttonleft3.addEventListener('click', function() {
            index3 -= 1;
            if (index3 < 0) {
                index3 = lengthSlider3 - 1;
            }
            document.querySelector('.backgroundsliderContainer3').style.right = index2 * 100 + "%";
        });
    }
});

// Tô border cho color và size:
// Bước đầu tiên hết phải duyệt qua mảng Cha mới có thể click cho 'Con'
// Khi dùng function nhớ truyền "THAM SÔ" để nó hoạt động
//-------mỗi khi DUYỆT phải TRUYỀN 'tham số' và dùng tham số 'đó' để làm việc
//------ HÀNH ĐỘNG thì KHÔNG TRUYỀN, dùng tham số 'CHA' để làm
// 1 lần click gồm 2 giai đoạn:
// Đầu tiên xóa tất cả border của span  VÀ  sau đó là thêm border
document.addEventListener("DOMContentLoaded", function() {
    const colors = document.querySelectorAll('.color span');
    colors.forEach(function(color) {//THAM SỐ

        color.addEventListener('click', function() {//duyệt mảng
            
             colors.forEach(function(removeColor){// phải truyền tham số để xóa border

                removeColor.style.border = 'none';// xóa tất cả border của span
             })

        color.style.border = "2px solid red";// thêm màu border cho span
        })
            
    });
    
    
    const sizes =  document.querySelectorAll('.size span');
    sizes.forEach(function(size){//THAM SỐ

        size.addEventListener('click',function(){
            const nameSize = size.getAttribute('sizeName')
            console.log(nameSize);
            sizes.forEach(function(removeSize){// phải truyền tham số để xóa border

                removeSize.style.border = 'none'; // tất cả border
            })

        size.style.border = '2px solid red'; // border-color cho phần tử được chọn
        })
    })

    const bgProduct = document.querySelectorAll('.backgroundProduct div');
    bgProduct.forEach(function(bgProducts){

        bgProducts.addEventListener('click',function(){
        bgProduct.forEach(function(product){

            product.style.border = 'none';
        })
          
    })
    })
   
});



document.addEventListener("DOMContentLoaded",function(){
   
})

document.addEventListener("DOMContentLoaded", function() {
    const imgTop = document.querySelectorAll('.imgTop img');  // Chọn tất cả các phần tử
    let top = 0;

    function moveSlider() {
        top += 1;  
    if(top > imgTop.length-1){
        top = 0;
  
    } 
    document.querySelector('.imgTopSlider').style.right = top*100 + '%';
    }
    setInterval(moveSlider, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    let num = 0;
  const numCart = document.querySelectorAll('.addCart');
  const soLuong = document.querySelector('.soluong')
  const addContainer = document.querySelector('.giohangSilder')
  numCart.forEach(function(clickCart){

        clickCart.addEventListener('click',function(){
                num+=1;
                soLuong.innerHTML = num;
            const newDivCart = document.createElement("div")
            newDivCart.textContent = "Sản phẩm được thêm vào giỏ hàng thứ "+ num; 
            newDivCart.classList.add("cartProduct")
           
            addContainer.appendChild(newDivCart);
        })
  })
});