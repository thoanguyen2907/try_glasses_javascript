/**
 * B1: Hiển thị Danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dựng chức năng so sánh
 */

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },

    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

//Import các lớp đối tượng vào main
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";
let glassesList = new GlassesList();

// hàm rút gọn cú pháp lấy elementbyID
const getEle = (id) => {
    return document.getElementById(id);
}
// hiển thị danh sách kính 
const showGlasses = () => {
    let divGlassesList = getEle("vglassesList");
    // tạo đối tượng kính và thêm kính vào danh sách kính 
    // duyệt mảng dữ liệu 
    dataGlasses.map((item) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        glassesList.addGlasses(gl);  // push vào mảng glassList
    });
    divGlassesList.innerHTML = glassesList.renderGlasses();
}
// gọi hàm 
showGlasses();

const tryOnGlasses = (e) => {
    let glassesID = e.target.getAttribute("data-id");
    let glassesChosen = {};
    for (let glasses of glassesList.glassesList) {
        if (glasses.id === glassesID) {
            glassesChosen = glasses;
        }
    }
    showInfo(glassesChosen);
}

window.tryOnGlasses = tryOnGlasses;

let divAvatar = getEle("avatar");
let divInfo = getEle("glassesInfo");

const showInfo = (glassesChosen) => {
    let status = "";
    if (glassesChosen.status) {
        status = "Stocking";
    } else {
        status = "Sold out";
    }
    divAvatar.innerHTML = `<img src=${glassesChosen.virtualImg} id="glasses" alt=${glassesChosen.id}/>`;
    divInfo.innerHTML = `<h5> ${glassesChosen.name} - ${glassesChosen.brand} - ${glassesChosen.color} </h5>
   <p class="card-text">
   <span class="btn btn-danger btn-sm mr-2"> $${glassesChosen.price}</span>
   <span class="text-success"> $${status}</span>
   </p>
   <p class="card-text">
   ${glassesChosen.desc}
   </p>
   `;
    divInfo.style.display = "block";
}
const removeGlasses = (display) => {
    let glassesShow = getEle("glasses"); 
    if(glassesShow !== null || glassesShow !== undefined){
        if (display) {
            glassesShow.style.display = "block";
    
        } else {
            glassesShow.style.display = "none";
        }
    }
   
}
window.removeGlasses = removeGlasses; 