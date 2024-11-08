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
