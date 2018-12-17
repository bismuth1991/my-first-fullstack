artists = [
  huong_tram = Artist.new(name: "Huong Tram"),
  dam_vinh_hung = Artist.new(name: "Dam Vinh Hung"),
  vu_cat_tuong = Artist.new(name: "Vu Cat Tuong"),
  truc_nhan = Artist.new(name: "Truc Nhan"),
  huong_lan = Artist.new(name: "Huong Lan"),
  miu_le = Artist.new(name: "Miu Le"),
  quang_dung = Artist.new(name: "Quang Dung"),
  khanh_ly = Artist.new(name: "Khanh Ly"),
  hong_nhung = Artist.new(name: "Hong Nhung"),
  le_quyen = Artist.new(name: "Le Quyen"),
  kicm = Artist.new(name: "K-ICM"),
  nguyen_khoa = Artist.new(name: "Nguyen Khoa"),
  duy_zuno = Artist.new(name: "Duy Zuno")
]

albums = [
  em_gai_mua = Album.new(name: "Em Gai Mua"),
  voi_em_la_mai_mai = Album.new(name: "Voi Em La Mai Mai"),
  mot_minh_co_sao_dau = Album.new(name: "Mot Minh Co Sao Dau"),
  tinh_bo_vo = Album.new(name: "Tinh Bo Vo"),
  vet_mua = Album.new(name: "Vet Mua (single)"),
  giai_ma = Album.new(name: "Giai Ma"),
  muon_khoc_that_to = Album.new(name: "Muon Khoc That To"),
  ve = Album.new(name: "Ve"),
  em_la_ba_noi_cua_anh = Album.new(name: "Em La Ba Noi Cua Anh"),
  nguoi_xa_nguoi = Album.new(name: "Nguoi Xa Nguoi"),
  ca_dao_me = Album.new(name: "Ca Dao Me"),
  goi_giac_mo_xua = Album.new(name: "Goi Giac Mo Xua"),
  mot_coi_di_ve = Album.new(name: "Mot Coi Di Ve"),
  nhu_canh_vac_bay = Album.new(name: "Nhu Canh Vac Bay"),
  tinh_khuc_yeu_thuong = Album.new(name: "Tinh Khuc Yeu Thuong"),
  con_trai_cung = Album.new(name: "Con Trai Cung"),
  chuyen_tinh_toi = Album.new(name: "Chuyen Tinh Toi"),
  roi_xa_de_truong_thanh = Album.new(name: "Roi Xa De Truong Thanh")
]

artists.each do |artist|
  artist.save!
end

huong_tram.picture.attach(io: File.open("app/assets/images/Artists/HuongTram.jpg"), filename: "HuongTram.jpg")
dam_vinh_hung.picture.attach(io: File.open("app/assets/images/Artists/DamVinhHung.jpg"), filename: "DamVinhHung/jpg")
vu_cat_tuong.picture.attach(io: File.open("app/assets/images/Artists/VuCatTuong.jpg"), filename: "VuCatTuong.jpg")
truc_nhan.picture.attach(io: File.open("app/assets/images/Artists/TrucNhan.jpg"), filename: "TrucNhan.jpg")
miu_le.picture.attach(io: File.open("app/assets/images/Artists/MiuLe.jpg"), filename: "MiuLe.jpg")
huong_lan.picture.attach(io: File.open("app/assets/images/Artists/HuongLan.jpg"), filename: "HuongLan.jpg")
quang_dung.picture.attach(io: File.open("app/assets/images/Artists/QuangDung.jpg"), filename: "QuangDung.jpg")
khanh_ly.picture.attach(io: File.open("app/assets/images/Artists/KhanhLy.jpg"), filename: "KhanhLy.jpg")
hong_nhung.picture.attach(io: File.open("app/assets/images/Artists/HongNhung.jpg"), filename: "HongNhung.jpg")
le_quyen.picture.attach(io: File.open("app/assets/images/Artists/LeQuyen.jpg"), filename: "LeQuyen.jpg")
kicm.picture.attach(io: File.open("app/assets/images/Artists/K-ICM.jpg"), filename: "K-ICM.jpg")
nguyen_khoa.picture.attach(io: File.open("app/assets/images/Artists/NguyenKhoa.jpg"), filename: "NguyenKhoa.jpg")
duy_zuno.picture.attach(io: File.open("app/assets/images/Artists/DuyZuno.jpg"), filename: "DuyZuno.jpg")

albums.each do |album|
  album.save!
end

em_gai_mua.cover_image.attach(io: File.open("app/assets/images/Albums/EmGaiMua.jpg"), filename: "EmGaiMua.jpg")
voi_em_la_mai_mai.cover_image.attach(io: File.open("app/assets/images/Albums/VoiEmLaMaiMai.jpg"), filename: "VoiEmLaMaiMai.jpg")
mot_minh_co_sao_dau.cover_image.attach(io: File.open("app/assets/images/Albums/MotMinhCoSaoDau.jpg"), filename: "MotMinhCoSaoDau.jpg")
tinh_bo_vo.cover_image.attach(io: File.open("app/assets/images/Albums/TinhBoVo.jpg"), filename: "TinhBoVo.jpg")
vet_mua.cover_image.attach(io: File.open("app/assets/images/Albums/VetMua.jpg"), filename: "VetMua.jpg")
giai_ma.cover_image.attach(io: File.open("app/assets/images/Albums/GiaiMa.jpg"), filename: "GiaiMa.jpg")
muon_khoc_that_to.cover_image.attach(io: File.open("app/assets/images/Albums/MuonKhocThatTo.jpg"), filename: "MuonKhocThatTo.jpg")
ve.cover_image.attach(io: File.open("app/assets/images/Albums/Ve.jpg"), filename: "Ve.jpg")
em_la_ba_noi_cua_anh.cover_image.attach(io: File.open("app/assets/images/Albums/EmLaBaNoiCuaAnhOST.jpg"), filename: "EmLaBaNoiCuaAnhOST.jpg")
nguoi_xa_nguoi.cover_image.attach(io: File.open("app/assets/images/Albums/NguoiXaNguoi.jpg"), filename: "NguoiXaNguoi.jpg")
ca_dao_me.cover_image.attach(io: File.open("app/assets/images/Albums/CaDaoMe.jpg"), filename: "CaDaoMe.jpg")
goi_giac_mo_xua.cover_image.attach(io: File.open("app/assets/images/Albums/GoiGiacMoXua.jpg"), filename: "GoiGiacMoXua.jpg")
mot_coi_di_ve.cover_image.attach(io: File.open("app/assets/images/Albums/MotCoiDiVe.jpg"), filename: "MotCoiDiVe.jpg")
nhu_canh_vac_bay.cover_image.attach(io: File.open("app/assets/images/Albums/NhuCanhVacBay.jpg"), filename: "NhuCanhVacBay.jpg")
tinh_khuc_yeu_thuong.cover_image.attach(io: File.open("app/assets/images/Albums/TinhKhucYeuThuong.jpg"), filename: "TinhKhucYeuThuong.jpg")
con_trai_cung.cover_image.attach(io: File.open("app/assets/images/Albums/ConTraiCung.jpg"), filename: "ConTraiCung.jpg")
chuyen_tinh_toi.cover_image.attach(io: File.open("app/assets/images/Albums/ChuyenTinhToi.jpg"), filename: "ChuyenTinhToi.jpg")
roi_xa_de_truong_thanh.cover_image.attach(io: File.open("app/assets/images/Albums/RoiXaDeTruongThanh.jpg"), filename: "RoiXaDeTruongThanh.jpg")

songs = [
  s1 = Song.new(title: "Chia Tay Trong Mua", album_id: em_gai_mua.id, artist_id: huong_tram.id),
  s2 = Song.new(title: "Em Gai Mua", album_id: em_gai_mua.id, artist_id: huong_tram.id),
  s3 = Song.new(title: "Hom Qua Mua", album_id: em_gai_mua.id, artist_id: huong_tram.id),
  s4 = Song.new(title: "Voi Em La Mai Mai", album_id: voi_em_la_mai_mai.id, artist_id: huong_tram.id),
  s5 = Song.new(title: "Trang Duoi Chan Minh", album_id: voi_em_la_mai_mai.id, artist_id: huong_tram.id),
  s6 = Song.new(title: "Ngai Ngung", album_id: voi_em_la_mai_mai.id, artist_id: huong_tram.id),
  s7 = Song.new(title: "Loi Yeu Thuong", album_id: mot_minh_co_sao_dau.id, artist_id: dam_vinh_hung.id),
  s8 = Song.new(title: "Toc May", album_id: mot_minh_co_sao_dau.id, artist_id: dam_vinh_hung.id),
  s9 = Song.new(title: "Toi Di Giua Hoang Hon", album_id: mot_minh_co_sao_dau.id, artist_id: dam_vinh_hung.id),
  s10 = Song.new(title: "Chieu Mua Bien Gioi", album_id: tinh_bo_vo.id, artist_id: dam_vinh_hung.id),
  s11 = Song.new(title: "Thuong Tinh Nhan", album_id: tinh_bo_vo.id, artist_id: dam_vinh_hung.id),
  s12 = Song.new(title: "Tinh Bo Vo", album_id: tinh_bo_vo.id, artist_id: dam_vinh_hung.id),
  s13 = Song.new(title: "Vet Mua", album_id: vet_mua.id, artist_id: vu_cat_tuong.id),
  s14 = Song.new(title: "Dong", album_id: giai_ma.id, artist_id: vu_cat_tuong.id),
  s15 = Song.new(title: "Muon Khoc That To", album_id: muon_khoc_that_to.id, artist_id: truc_nhan.id),
  s16 = Song.new(title: "Gio Mua Ve", album_id: muon_khoc_that_to.id, artist_id: truc_nhan.id),
  s17 = Song.new(title: "That bat Ngo", album_id: muon_khoc_that_to.id, artist_id: truc_nhan.id),
  s18 = Song.new(title: "Bon Chu Lam", album_id: ve.id, artist_id: truc_nhan.id),
  s19 = Song.new(title: "Ve", album_id: ve.id, artist_id: truc_nhan.id),
  s20 = Song.new(title: "Tu Do Em Buon", album_id: nguoi_xa_nguoi.id, artist_id: huong_lan.id),
  s21 = Song.new(title: "Diem Xua", album_id: em_la_ba_noi_cua_anh.id, artist_id: miu_le.id),
  s22 = Song.new(title: "Con Tuoi Nao Cho Em", album_id: em_la_ba_noi_cua_anh.id, artist_id: miu_le.id),
  s23 = Song.new(title: "Cat Bui", album_id: ca_dao_me.id, artist_id: dam_vinh_hung.id),
  s24 = Song.new(title: "Diem Xua", album_id: ca_dao_me.id, artist_id: dam_vinh_hung.id),
  s25 = Song.new(title: "Ha Trang", album_id: goi_giac_mo_xua.id, artist_id: quang_dung.id),
  s26 = Song.new(title: "Bien Nho", album_id: goi_giac_mo_xua.id, artist_id: quang_dung.id),
  s27 = Song.new(title: "Mot Coi Di Ve", album_id: mot_coi_di_ve.id, artist_id: khanh_ly.id),
  s28 = Song.new(title: "Tuoi Da Buon", album_id: nhu_canh_vac_bay.id, artist_id: hong_nhung.id),
  s29 = Song.new(title: "De Gio Cuon Di", album_id: nhu_canh_vac_bay.id, artist_id: hong_nhung.id),
  s30 = Song.new(title: "Da Khuc", album_id: tinh_khuc_yeu_thuong.id, artist_id: le_quyen.id),
  s31 = Song.new(title: "Con Trai Cung", album_id: con_trai_cung.id, artist_id: kicm.id),
  s32 = Song.new(title: "Chuyen Tinh Toi", album_id: con_trai_cung.id, artist_id: kicm.id),
  s33 = Song.new(title: "Roi Xa De Truong Thanh", album_id: roi_xa_de_truong_thanh.id, artist_id: duy_zuno.id),
]

songs.shuffle.each do |song|
  song.save!
end

s1.url.attach(io: File.open("app/assets/Songs/ChiaTayTrongMua.mp3"), filename: "ChiaTayTrongMua.mp3")
s2.url.attach(io: File.open("app/assets/Songs/EmGaiMua.mp3"), filename: "EmGaiMua.mp3")
s3.url.attach(io: File.open("app/assets/Songs/HomQuaMua.mp3"), filename: "HomQuaMua.mp3")
s4.url.attach(io: File.open("app/assets/Songs/VoiEmLaMaiMai.mp3"), filename: "VoiEmLaMaiMai.mp3")
s5.url.attach(io: File.open("app/assets/Songs/TrangDuoiChanMinh.mp3"), filename: "TrangDuoiChanMinh.mp3")
s6.url.attach(io: File.open("app/assets/Songs/NgaiNgung.mp3"), filename: "NgaiNgung.mp3")
s7.url.attach(io: File.open("app/assets/Songs/LoiYeuThuong.mp3"), filename: "LoiYeuThuong.mp3")
s8.url.attach(io: File.open("app/assets/Songs/TocMay.mp3"), filename: "TocMay.mp3")
s9.url.attach(io: File.open("app/assets/Songs/ToiDiGiuaHoangHon.mp3"), filename: "ToiDiGiuaHoangHon.mp3")
s10.url.attach(io: File.open("app/assets/Songs/ChieuMuaBienGioi.mp3"), filename: "ChieuMuaBienGioi.mp3")
s11.url.attach(io: File.open("app/assets/Songs/ThuongTinhNhan.mp3"), filename: "ThuongTinhNhan.mp3")
s12.url.attach(io: File.open("app/assets/Songs/TinhBoVo.mp3"), filename: "TinhBoVo.mp3")
s13.url.attach(io: File.open("app/assets/Songs/VetMua.mp3"), filename: "VetMua.mp3")
s14.url.attach(io: File.open("app/assets/Songs/Dong.mp3"), filename: "Dong.mp3")
s15.url.attach(io: File.open("app/assets/Songs/MuonKhocThatTo.mp3"), filename: "MuonKhocThatTo.mp3")
s16.url.attach(io: File.open("app/assets/Songs/GioMuaVe.mp3"), filename: "GioMuaVe.mp3")
s17.url.attach(io: File.open("app/assets/Songs/ThatBatNgo.mp3"), filename: "ThatBatNgo.mp3")
s18.url.attach(io: File.open("app/assets/Songs/BonChuLam.mp3"), filename: "BonChuLam.mp3")
s19.url.attach(io: File.open("app/assets/Songs/Ve.mp3"), filename: "Ve.mp3")
s20.url.attach(io: File.open("app/assets/Songs/TuDoEmBuon.mp3"), filename: "TuDoEmBuon.mp3")
s21.url.attach(io: File.open("app/assets/Songs/DiemXua.mp3"), filename: "DiemXua.mp3")
s22.url.attach(io: File.open("app/assets/Songs/ConTuoiNaoChoEm.mp3"), filename: "ConTuoiNaoChoEm.mp3")
s23.url.attach(io: File.open("app/assets/Songs/CatBui.mp3"), filename: "CatBui.mp3")
s24.url.attach(io: File.open("app/assets/Songs/DiemXuaDVH.mp3"), filename: "DiemXuaDVH.mp3")
s25.url.attach(io: File.open("app/assets/Songs/HaTrang.mp3"), filename: "HaTrang.mp3")
s26.url.attach(io: File.open("app/assets/Songs/BienNho.mp3"), filename: "BienNho.mp3")
s27.url.attach(io: File.open("app/assets/Songs/MotCoiDiVe.mp3"), filename: "MotCoiDiVe.mp3")
s28.url.attach(io: File.open("app/assets/Songs/TuoiDaBuon.mp3"), filename: "TuoiDaBuon.mp3")
s29.url.attach(io: File.open("app/assets/Songs/DeGioCuonDi.mp3"), filename: "DeGioCuonDi.mp3")
s30.url.attach(io: File.open("app/assets/Songs/DaKhuc.mp3"), filename: "DaKhuc.mp3")
s31.url.attach(io: File.open("app/assets/Songs/ConTraiCung.mp3"), filename: "ConTraiCung.mp3")
s32.url.attach(io: File.open("app/assets/Songs/ChuyenTinhToi.mp3"), filename: "ChuyenTinhToi.mp3")
s33.url.attach(io: File.open("app/assets/Songs/RoiXaDeTruongThanh.mp3"), filename: "RoiXaDeTruongThanh.mp3")


User.create!(email: "demo@user.com", password: "password")

