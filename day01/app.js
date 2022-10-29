// const http = require("http");
// const app = http.createServer((req, res) => {
//     // console.log(req.url);
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if (req.url === "/") {
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다");
//     }
// });
//
// app.listen(3001, () => {
//     console.log("http로 가동된 서버 입니다");
// });

const express = require("express");
const app = express();

// 앱셋팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // 기능
    res.render("home/index");
});

app.get("/login", (req, res) => {
    res.render("home/login");
});

app.listen(3000, function () {
    console.log("서버 가동")
});

// https://www.youtube.com/watch?v=dB1n8bKgn1E&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=6