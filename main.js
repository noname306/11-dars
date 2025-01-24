// const userLogin = +prompt("Login kiriting");
// const userPAssword = +prompt("Parol kiriting");
// const oquvchilar = [
//     {
//         login:1234,
//         parol:8755,
//         ism:"Abdulloh",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:6576,
//         parol:8755,
//         ism:"Safina",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:7687,
//         parol:8755,
//         ism:"Gulzoda",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:3543,
//         parol:8755,
//         ism:"Hondamir",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:7899,
//         parol:8755,
//         ism:"Dilmuhammad",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:4545,
//         parol:8755,
//         ism:"Jaloliddin",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:8979,
//         parol:8755,
//         ism:"Azizbek",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:4355,
//         parol:8755,
//         ism:"Sitora",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:9680,
//         parol:8755,
//         ism:"Dilshod",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:2965,
//         parol:8755,
//         ism:"Safina",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:8734,
//         parol:8755,
//         ism:"MuhammadSaid Jgay",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:1234,
//         parol:8755,
//         ism:"Akbar",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:1234,
//         parol:8755,
//         ism:"Mahmud BOt",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:1234,
//         parol:8755,
//         ism:"Jahongir Jannatiy",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
//     {
//         login:1234,
//         parol:8755,
//         ism:"Sardor",
//         coin:1129,
//         ustoz:"Sunnatbek",
//         group:1999,
//     },
// ]

// const botlar = [
//     {
//       ism: "Safina",
//       parol: 1234,
//       login: 1919,
//       group: 1999,
//       coin: 1122,
//       ustoz: "Sunnatbeeeeeek",
//     },
//     {
//         ism: "Sitora",
//         parol: 1243,
//         login: 1910,
//         group: 1999,
//         coin: 122,
//         ustoz: "Sunnatbeeek",
//     },
//     {
//       ism: "Gulzoda",
//       parol: 1321,
//       login: 1990,
//       group: 1999,
//       coin: 1189,
//       ustoz: "Sunnatbek",
//     },
//     {
//       ism: "Dilmuhammad",
//       parol: 9876,
//       login: 9089,
//       group: 1999,
//       coin: 1000,
//       ustoz: "Sunnatbek",
//     },
//     {
//       ism: "Mahmud",
//       parol: 1544,
//       login: 2219,
//       group: 1999,
//       coin: 1,
//       ustoz: "Sunnatbeek",
//     },
//     {
//       ism: "Shahzoda",
//       parol: 1724,
//       login: 1098,
//       group: 1999,
//       coin: 10000,
//       ustoz: "Sunnatbek",
//     },
//     {
//         ism: "Auio",
//         parol: 1278,
//         login: 2176,
//         group: 1999,
//         coin: 1902,
//         ustoz: "Sunnatbeeeeeek",
//     },
//     {
//         ism: "Gulnar",
//         parol: 1478,
//         login: 1001,
//         group: 1999,
//         coin: 1200,
//         ustoz: "Sunnatbek",
//     },
//     {
//         ism: "Safina",
//         parol: 1084,
//         login: 9999,
//         group: 1999,
//         coin: 1122,
//         ustoz: "Sunnatbeeeeeek",
//     }
//   ];
  
//   const userDate = +prompt("Login kiriting");
//   const userAge = +prompt("Parol kiriting");
  
//   let found = false;
  
//   botlar.forEach(objectlar => {
//     if (objectlar.login=== userDate && objectlar.parol === userAge) {
//       const newTag = document.createElement("h1");
//       const newaAge = document.createElement("h1");
//       const newaTuri = document.createElement("h1");
//       const newaYili = document.createElement("h1");
//       const newaFam = document.createElement("h1");
//       newaFam.textContent = `Coin: ${objectlar.coin}`;
//       newaYili.textContent = `Group: ${objectlar.group}`;
//       newaTuri.textContent = `Ustoz: ${objectlar.ustoz}`;
//       newTag.textContent = `Ism: ${objectlar.ism}`;
//       document.body.append(newTag, newaFam, newaYili, newaTuri);
//       found = true; 
//     }
//   });

//   if (!found) {
//     alert("Notogri: Boshqatan yozing");
//   }

const bg = prompt ("body color")
const text = prompt ("text color")

document.body.style.backgroundColor = bg
document.body.style.color = text

const title = document.querySelector(".fir");
