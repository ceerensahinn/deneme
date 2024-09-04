const kelimeler = ["Tavşan", "Sincap", "Yarasa", "Timsah", "Kartal", "Baykuş", "Leopar", "Sırtlan", "Kaplan", "Akbaba", "Ceylan", "Civciv", "İbibik", "Fülfül", "Kuzgun", "Balina", "Neheng", "Bufalo", "İguana", "İmpala", "Jaguar", "Kunduz", "Maymun", "Karaca", "Kayman", "Langur", "Porsuk", "Panter", "Sansar", "Zürafa", "Yengeç", "Tırtıl","Ördek"];
let mevcutKelime, tahminEdilenHarfler, yanlisTahminSayisi, maxYanlisTahminSayisi;

document.addEventListener('DOMContentLoaded', () => {
    oyunuBaslat();

    document.getElementById('tahmin-et').addEventListener('click', harfTahmini);
    document.getElementById('tekrar-oyna').addEventListener('click', oyunuBaslat);
});

function oyunuBaslat() {
    mevcutKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)].toUpperCase();
    tahminEdilenHarfler = [];
    yanlisTahminSayisi = 0;
    maxYanlisTahminSayisi = 6;

    kelimeGoster();
    adamGuncelle();
    document.getElementById('mesaj').textContent = '';
    document.getElementById('harf-gir').value = '';
    document.getElementById('harf-gir').disabled = false;
    document.getElementById('tahmin-et').disabled = false;
    document.getElementById('tekrar-oyna').style.display = 'none';
}

function kelimeGoster() {
    let kelimeGoster = document.getElementById('kelime-göster');
    if (kelimeGoster) {
        let gosterilenKelime = mevcutKelime.split('').map(harf => 
            tahminEdilenHarfler.includes(harf) ? harf : '_'
        ).join(' ');
        kelimeGoster.textContent = gosterilenKelime;

        if (!gosterilenKelime.includes('_')) {
            document.getElementById('mesaj').textContent = 'Tebrikler, kazandınız!';
            document.getElementById('harf-gir').disabled = true;
            document.getElementById('tahmin-et').disabled = true;
            document.getElementById('tekrar-oyna').style.display = 'inline';
        }
    } else {
        console.error('kelime-göster öğesi bulunamadı!');
    }
}

function adamGuncelle() {
    document.getElementById('adam').style.backgroundImage = `url('images/adam${yanlisTahminSayisi}.svg')`;
}

function harfTahmini() {
    const harf = document.getElementById('harf-gir').value.toUpperCase();
    if (harf && !tahminEdilenHarfler.includes(harf)) {
        tahminEdilenHarfler.push(harf);
        if (mevcutKelime.includes(harf)) {
            kelimeGoster();
        } else {
            yanlisTahminSayisi++;
            adamGuncelle();
            if (yanlisTahminSayisi >= maxYanlisTahminSayisi) {
                document.getElementById('mesaj').textContent = `Üzgünüm, kaybettiniz! Doğru kelime: ${mevcutKelime}`;
                document.getElementById('harf-gir').disabled = true;
                document.getElementById('tahmin-et').disabled = true;
                document.getElementById('tekrar-oyna').style.display = 'inline';
            }
        }
    }
    document.getElementById('harf-gir').value = '';
}
