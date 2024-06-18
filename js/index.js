window.onload = function () {
    document.querySelector(".block_item:last-child").classList.add("light-way");
    let inputKetNoi = document.getElementById("soKetNoi");
    inputKetNoi.style.display = "none";
}

function giaoDienTrang() {

    let kq = document.querySelector(".kq");
    let xoayXoay = document.querySelector(".shuriken");
    xoayXoay.classList.add("xoay");
    xoayXoay.style.background = "black";
    kq.style.border = "2px dashed black";
}


// Bài 1 - Quản lý tuyển sinh


document.getElementById("btnKetQua").onclick = function () {

    let diemChuan = document.getElementById("diemChuan").value * 1;
    let diemMon1 = document.getElementById("diemMon1").value * 1;
    let diemMon2 = document.getElementById("diemMon2").value * 1;
    let diemMon3 = document.getElementById("diemMon3").value * 1;
    let khuVuc = document.getElementById("selectKhuVuc").value * 1;
    let doiTuong = document.getElementById("selectDoiTuong").value * 1;
    let kq = document.querySelector(".kq")
    let ketQuaThi = document.getElementById("ketQuaThi");
    let tongDiem = 0;

    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        ketQuaThi.innerHTML = "Bạn đã tạch do có điểm 1 môn nhỏ hơn 0 :(((";
    }
    else {

        tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;

        if (tongDiem >= diemChuan) {
            ketQuaThi.innerHTML = `Bạn đã đậu oh yeah. Tổng điểm: ${tongDiem}`;
        }
        else {
            ketQuaThi.innerHTML = `Bạn đã rớt. huhu. Tổng điểm: ${tongDiem}`;
        }
    }
    giaoDienTrang();
}

//Bài 2 - Tính Số KW

document.getElementById("btnTinhTienDien").onclick = () => {
    let hoTen = document.getElementById("hoTen").value;
    let soKw = document.getElementById("soKw").value * 1;
    let kqTienDien = document.getElementById("kqTienDien");
    let tongTien = 0;
    let kwDauTien = timGiaTien50KwDauTien();
    let kwTiepTheo = timGiaTien50KwKe();
    let kw100TiepTheo = timGiaTien100KwKe();
    let kw150TiepTheo = timGiaTien150KwKe();
    let kwConLai = timGiaTienConLai();
    if (soKw >= 1 && soKw <= 50) {
        tongTien = soKw * kwDauTien;
        kqTienDien.innerHTML = `Họ Tên: ${hoTen}; Tiền điện: ${tongTien}`;
    }
    else if (soKw >= 51 && soKw <= 100) {
        tongTien = ((soKw - 50) * kwTiepTheo) + (kwDauTien * 50);
        kqTienDien.innerHTML = `Họ Tên: ${hoTen}; Tiền điện: ${tongTien}`;
    } else if (soKw >= 101 && soKw <= 200) {
        tongTien = (50 * kwDauTien) + (50 * kwTiepTheo) + ((soKw - 100) * kw100TiepTheo);
        kqTienDien.innerHTML = `Họ Tên: ${hoTen}; Tiền điện: ${tongTien}`;
    }
    else if (soKw >= 201 && soKw <= 350) {
        tongTien = (50 * kwDauTien) + (50 * kwTiepTheo) + (100 * kw100TiepTheo) + ((soKw - 200) * kw150TiepTheo);
        kqTienDien.innerHTML = `Họ Tên: ${hoTen}; Tiền điện: ${tongTien}`;
    }

    else {
        tongTien = (50 * kwDauTien) + (50 * kwTiepTheo) + (100 * kw100TiepTheo) + (150 * kw150TiepTheo) + (soKw - 350) * kwConLai;
        kqTienDien.innerHTML = `Họ Tên: ${hoTen}; Tiền điện: ${tongTien}`;
    }
}
let timGiaTien50KwDauTien = () => {
    return 500;
}

let timGiaTien50KwKe = () => {
    return 650;
}

let timGiaTien100KwKe = () => {
    return 850;
}
let timGiaTien150KwKe = () => {
    return 1100;
}
let timGiaTienConLai = () => {
    return 1300;
}


// Bài Tập 3 - Tính Thuế Thu Nhập cá nhân

const THUNHAPDEN60 = 0.05;
const THUNHAPTU60DEN120 = 0.1;
const THUNHAPTU120DEN210 = 0.15;
const THUNHAPTU210EN384 = 0.2;
const THUNHAPTU384DEN624 = 0.25;
const THUNHAPTU624DEN960 = 0.3;
const THUNHAPTREN960 = 0.35;

let thuNhapNam = document.getElementById("thuNhapNam");

function formatDataInput(tnn) {
    let TNN = parseFloat(tnn);
    if (tnn.includes("tr") || tnn.includes("TR") || tnn.includes("trieu") || tnn.includes("TRIEU") || tnn.includes("chiu") || tnn.includes("CHIU") || tnn.includes("củ") || tnn.includes("tỏi")) {
        return TNN *= 1e6;
    }
    else if (tnn.includes("k") || tnn.includes("K")) {
        return TNN *= 1e3;
    }

    else if (tnn.includes("e6") || tnn.includes("e+6")) {
        return TNN;
    }
    else {
        return alert("Nhập Sai định dạng rồi @@ , chép phạt 100 lần!!");
    }
}

document.getElementById("frmBaiTap3").onsubmit = function (event) {
    event.preventDefault();
    let hoTenThue = document.getElementById("hoTenThue").value;
    let tnn = thuNhapNam.value;
    let xLyDauVao = formatDataInput(tnn);
    let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
    let thuNhapChiuThue = xLyDauVao - 4000000 - (soNguoiPhuThuoc * 1600000);
    let tongTienThue = 0;
    let kqTienThue = document.getElementById("kqTinhThue");

    if (thuNhapChiuThue <= 60000000) {
        tongTienThue = thuNhapChiuThue * THUNHAPDEN60;
        kqTienThue.innerHTML = `Họ Tên: ${hoTenThue}; ` + `Tiền thuế thu nhập cá nhân: ` + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tongTienThue);
    }
    else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
        tongTienThue = thuNhapChiuThue * THUNHAPTU60DEN120;
        kqTienThue.innerHTML = `Họ Tên: ${hoTenThue}; ` + `Tiền thuế thu nhập cá nhân: ` + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tongTienThue);
    }
    else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
        tongTienThue = thuNhapChiuThue * THUNHAPTU120DEN210;
        kqTienThue.innerHTML = `Họ Tên: ${hoTenThue}; ` + `Tiền thuế thu nhập cá nhân: ` + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tongTienThue);
    }
    else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
        tongTienThue = thuNhapChiuThue * THUNHAPTU210EN384;
        kqTienThue.innerHTML = `Họ Tên: ${hoTenThue}; ` + `Tiền thuế thu nhập cá nhân: ` + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tongTienThue);
    }
    else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
        tongTienThue = thuNhapChiuThue * THUNHAPTU384DEN624;
        kqTienThue.innerHTML = `Họ Tên: ${hoTenThue}; ` + `Tiền thuế thu nhập cá nhân: ` + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tongTienThue);
    }
    else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
        tongTienThue = thuNhapChiuThue * THUNHAPTU624DEN960;
        kqTienThue.innerHTML = `Họ Tên: ${hoTenThue}; ` + `Tiền thuế thu nhập cá nhân: ` + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tongTienThue);
    }
    else {
        tongTienThue = thuNhapChiuThue * THUNHAPTREN960;
        kqTienThue.innerHTML = `Họ Tên: ${hoTenThue}; ` + `Tiền thuế thu nhập cá nhân: ` + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tongTienThue);
    }
    event.target.reset();
}
//Bài 4 - Tính tiền cáp

let loaiKh = document.getElementById("loaiKh");

const KHCN = 2;
const KHDN = 1;

document.getElementById("frmBaiTap4").onsubmit = function (event) {
    event.preventDefault();
    let loaiKH = loaiKh.value * 1;
    let maKh = document.getElementById("maKh").value;
    let soKenh = document.getElementById("soKenh").value * 1;
    let kqTiencap = document.getElementById("kqTienCap");
    let soKetNoi = document.getElementById("soKetNoi").value * 1;
    let phiCoBan = timKiemPhiDichVuCoBanTheoLoaiKhachHang(loaiKH, soKetNoi);
    let phiHoaDon = timKiemPhiXuLyHoaDonTheoLoaiKhachHang(loaiKH);
    let phiThueKenh = timKiemPhiThueKenhTheoLoaiKhachHang(loaiKH);
    let TienCap = 0;
    if (isNaN(loaiKH) || maKh <= 0 || soKenh <= 0) {
        alert("Vui lòng điền đầy đủ thông tin trước khi submit")
    }
    else {
        if (loaiKH == 2) {

            TienCap = phiCoBan + phiHoaDon + phiThueKenh * soKenh;
            kqTiencap.innerHTML = `Mã khách hàng: ${maKh}; Tiền cáp: ` + TienCap.toLocaleString("US", {
                style: "currency",
                currency: "USD",
            });
        }
        else {
            if (soKetNoi <= 10) {
                TienCap = phiCoBan + phiHoaDon + (phiThueKenh * soKenh);
            }
            else {
                TienCap = phiCoBan + phiHoaDon + (phiThueKenh * soKenh) + (soKetNoi - 10) * 5
            }

            kqTiencap.innerHTML = `Mã khách hàng:${maKh}; Tiền cáp: ` + TienCap.toLocaleString("US", {
                style: "currency",
                currency: "USD",
            });
        }
    }
}

function timKiemPhiXuLyHoaDonTheoLoaiKhachHang(loaiKH) {
    switch (loaiKH) {
        case KHCN: {
            return 4.5;
        }
        case KHDN: {
            return 15;
        }
        default: {
            return 0;
        }
    }
}


function timKiemPhiDichVuCoBanTheoLoaiKhachHang(loaiKH) {
    switch (loaiKH) {
        case KHCN: {
            return 20.5;
        }
        case KHDN: {
            return 75;
        }
        default: {
            return 0;
        }
    }
}
function timKiemPhiThueKenhTheoLoaiKhachHang(loaiKH) {
    switch (loaiKH) {
        case KHCN: {
            return 7.5;
        }
        case KHDN: {
            return 50;
        }
        default: {
            return 0;
        }
    }

}


function hienKetNoi() {
    let trangThai = document.getElementById("loaiKh");
    let skn = document.getElementById("soKetNoi");
    let kh = trangThai.value * 1;
    console.log(kh);
    if (kh == 2) {
        skn.style.display = "none";
    }
    else {
        skn.style.display = "block";
    }
}

document.getElementById("loaiKh").onchange = function () { hienKetNoi(); };


