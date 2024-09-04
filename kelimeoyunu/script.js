document.addEventListener('DOMContentLoaded', () => {
    // Element Seçimleri
    const messageElem = document.getElementById('message');
    const timeLeftElem = document.getElementById('time-left');
    const gameArea = document.getElementById('gameArea');
    const targetWordElem = document.getElementById('target-word');
    const startButton = document.getElementById('startButton');

    // Kelime anlamlarını içeren nesne
    const wordMeanings = {
        'ALGORİTMA': 'Bir problemi çözmek için kullanılan adım adım yöntemler.',
        'AĞ': 'Bilgisayarları veya cihazları birbirine bağlayan sistem.',
        'AĞIRLIKLI': 'Bir şeyin önemli veya etkili olduğu durum.',
        'BELLEK': 'Bilgisayarın verileri geçici veya kalıcı olarak sakladığı yer.',
        'BİLGİ': 'Konu ile ilgili edinilen veriler.',
        'BİLGİSAYAR': 'Verileri işlemek için kullanılan elektronik cihaz.',
        'BLOKZİNCİR': 'Verileri şifreleyerek ve dağıtarak güvenli hale getiren bir teknoloji.',
        'BYTE': 'Bilgisayarda veri birimi, 8 bitlik grup.',
        'DEKODER': 'Şifreli verileri çözmek için kullanılan cihaz.',
        'DENEYSEL': 'Tecrübe ve testler yoluyla elde edilen bilgi.',
        'DONANIM': 'Bilgisayarın fiziksel parçaları.',
        'DİJİTAL': 'Verileri sayılarla temsil eden teknoloji.',
        'EKRAN': 'Bilgisayar veya telefonun görüntü sağlayan kısmı.',
        'FİREWALL': 'Bilgisayar ağlarını koruyan güvenlik duvarı.',
        'GÖRÜNTÜ': 'Ekranda görünen grafiksel bilgi.',
        'HİBRİT': 'Farklı teknolojilerin birleşimi.',
        'İŞLETİM SİSTEMİ': 'Bilgisayarın donanımını ve yazılımını yöneten yazılım.',
        'İNTERNET': 'Dünya genelinde bilgisayarların bağlı olduğu ağ.',
        'İŞLEMCI': 'Bilgisayarın beyni, verileri işleyen ana birim.',
        'KABLO': 'Veri iletimi için kullanılan iletken tel.',
        'KAREKOD': 'Veri saklamak için kullanılan iki boyutlu barkod.',
        'KULLANICI': 'Bir bilgisayarı veya uygulamayı kullanan kişi.',
        'LİNK': 'İnternet üzerinde bir sayfayı diğerine bağlayan köprü.',
        'MAİNBOARD': 'Bilgisayarın ana kartı, tüm bileşenleri bağlar.',
        'NETWORK': 'Bilgisayarları ve diğer cihazları birbirine bağlayan sistem.',
        'OPERATÖR': 'Bilgisayar veya sistemleri yöneten kişi veya yazılım.',
        'PROGRAM': 'Bilgisayarın belirli bir işlevi gerçekleştirmesini sağlayan yazılım.',
        'PROGRAMCI': 'Yazılım geliştiren kişi.',
        'PROTOKOL': 'Bilgisayarlar arasındaki veri iletim kuralları.',
        'ROUTER': 'Ağ trafiğini yönlendiren cihaz.',
        'SİSTEM': 'Bir bütün olarak çalışan bileşenler topluluğu.',
        'SUNUCU': 'Veri ve hizmetleri sağlayan bilgisayar veya yazılım.',
        'YAZILIM': 'Bilgisayarın çalışmasını sağlayan programlar ve uygulamalar.',
        'YAZICI': 'Bilgisayardan fiziksel kopya almak için kullanılan cihaz.',
        'ZAMANLAYICI': 'Belirli bir süreyi ölçen cihaz veya yazılım.',
        'ALAN ADI': 'Bir internet sitesinin adresi.',
        'KOD': 'Bilgisayar programlarında kullanılan yazılım dili.',
        'VERİ': 'İşlenebilir bilgi birimleri.',
        'ÇİFTLİK': 'Birden fazla bilgisayarı veya sunucuyu barındıran yer.',
        'KÜTÜPHANE': 'Yazılım geliştirmek için kullanılan hazır kod koleksiyonları.',
        'MULTİMEDYA': 'Metin, ses, video ve grafiklerin birleşimi.',
        'DİSK': 'Veri depolamak için kullanılan bir donanım bileşeni.',
        'SİBER': 'Bilgi teknolojileri ve internet ile ilgili terim.',
        'WEB': 'İnternet üzerindeki bilgi kaynaklarını oluşturur ve bağlar.',
        'XML': 'Veri depolamak ve taşımak için kullanılan bir işaretleme dili.',
        'HYPERTEXT': 'Metinleri bağlantılarla bağlayan bir bilgi sunma yöntemi.',
        'DATABASE': 'Verileri düzenli bir şekilde saklayan sistem.',
        'DEVELOPER': 'Yazılım ve uygulama geliştiren kişi.',
        'DEBUG': 'Yazılım hatalarını bulma ve düzeltme süreci.',
        'ENCRYPTION': 'Verileri şifreleyerek güvenli hale getirme yöntemi.',
        'HARDWARE': 'Bilgisayarın fiziksel bileşenleri.',
        'SOFTWARE': 'Bilgisayarın çalışmasını sağlayan programlar.',
        'APPLICATION': 'Kullanıcının belirli görevleri yerine getirmesine olanak tanıyan yazılım.',
        'ALGORITHM': 'Bir problemi çözmek için adım adım talimatlar.',
        'BROWSER': 'Web sitelerini görüntülemek için kullanılan yazılım.',
        'CACHE': 'Veri erişim hızını artırmak için geçici depolama.',
        'DISTRIBUTED': 'Veri veya işlem gücünün birçok cihaz arasında dağıtılması.',
        'FIRMWARE': 'Donanımı kontrol eden yazılım.',
        'GIT': 'Yazılım geliştirme sürecinde versiyon kontrol sistemi.',
        'HOST': 'Ağ üzerinde veri sağlayan veya depolayan cihaz.',
        'JAVA': 'Bir programlama dili.',
        'JAVASCRIPT': 'Web sayfalarını dinamik hale getiren bir dil.',
        'LAYER': 'Yazılımda belirli işlevleri gerçekleştiren katman.',
        'LOGIN': 'Kullanıcı adı ve şifre ile sisteme giriş yapma.',
        'MOLECULE': 'Bir veri birimi veya bilgi parçası.',
        'OPERATING': 'Bilgisayarın temel işlevlerini yöneten sistem.',
        'PARALLEL': 'Aynı anda birden fazla işlem gerçekleştirme.',
        'REPOSITORY': 'Kod ve verilerin saklandığı yer.',
        'SCRIPT': 'Bir dizi komut içeren yazılım programı.',
        'SERVER': 'Ağ üzerinde hizmet sağlayan bilgisayar veya yazılım.',
        'VERSION': 'Bir yazılımın güncel hali veya sürümü.',
        'VIRTUALIZATION': 'Fiziksel kaynakları sanal kaynaklara dönüştürme.',
        'Wi-Fi': 'Kablosuz internet bağlantısı.',
        'WINDOWS': 'Bir işletim sistemi.',
        'API': 'Uygulama programlama arayüzü.',
        'AGILE': 'Yazılım geliştirme için çevik yöntemler.',
        'BACKUP': 'Verilerin yedeğinin alınması.',
        'CLOUD': 'Veri ve uygulamaları internet üzerinden sağlama.',
        'CONFIGURATION': 'Sistem ayarları ve düzenlemeleri.',
        'DOMAIN': 'Bir internet sitesinin adresi.',
        'FRAMEWORK': 'Yazılım geliştirmek için yapı ve araçlar sunan sistem.',
        'NETWORKING': 'Bilgisayarlar ve cihazlar arasında bağlantı kurma süreci.',
        'PARSE': 'Verileri analiz etme ve yorumlama.',
        'QUERY': 'Veri arama ve çekme işlemi.',
        'SCRIPTING': 'Otomasyon ve işlevsellik sağlamak için kod yazma.',
        'SYNTAX': 'Programlama dilindeki kurallar ve yapılar.',
        'TESTING': 'Yazılımın doğruluğunu ve performansını kontrol etme.'
    };

    let isGameStarted = false;
    let targetWord = '';
    let correctCells = 0;
    let timeLeft = 60;
    let timerInterval;

    // Oyun Başlatma
    function startGame() {
        if (isGameStarted) return; // Eğer oyun zaten başladıysa yeniden başlatma

        isGameStarted = true;
        correctCells = 0;
        timeLeft = 60;
        timeLeftElem.textContent = timeLeft;
        messageElem.textContent = '';
        fetchNewWord();
        createLabyrinth();
        startTimer();
    }

    // Yeni Kelime Seçme
    function fetchNewWord() {
        const techWords = Object.keys(wordMeanings); // Kelime havuzunu al
        const randomIndex = Math.floor(Math.random() * techWords.length);
        targetWord = techWords[randomIndex]; // Rasgele kelime seç
        targetWordElem.textContent = targetWord;
    }

    // Labirenti Oluşturma
    function createLabyrinth() {
        gameArea.innerHTML = '';
        if (!targetWord) {
            messageElem.textContent = 'Kelime yüklenemedi, oyunu başlatmak için tekrar deneyin.';
            return;
        }

        const cellsArray = [...targetWord];
        const allLetters = cellsArray.concat(generateRandomLetters(100 - cellsArray.length));
        shuffleArray(allLetters);

        allLetters.forEach((letter, index) => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = letter;
            cell.dataset.index = index;
            gameArea.appendChild(cell);
            cell.addEventListener('click', handleCellClick);
        });
    }

    // Hücre Tıklama Olayı
    function handleCellClick(event) {
        const clickedCell = event.target;
        const letter = clickedCell.textContent;

        if (letter === targetWord[correctCells]) {
            clickedCell.classList.add('correct');
            correctCells++;
            if (correctCells === targetWord.length) {
                endGame(true); // Kelime tamamlandı
            }
        } else {
            clickedCell.classList.add('incorrect');
            setTimeout(() => clickedCell.classList.remove('incorrect'), 1000);
        }
    }

    // Zamanlayıcı Başlatma
    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            timeLeftElem.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                endGame(false); // Zaman doldu
            }
        }, 1000);
    }

    // Oyunu Bitirme
    function endGame(success) {
        if (success) {
            messageElem.textContent = 'Tebrikler! Kelimeyi tamamladınız!';


            // Kelimenin anlamını göster
            const meaning = wordMeanings[targetWord];
            if (meaning) {
                 // Önceki kelimeyi ekrana yaz
        const previousWord = targetWord;
        const previousMeaning = wordMeanings[previousWord];

        if (previousMeaning) {
            messageElem.textContent = `Önceki kelime: ${previousWord}. Anlamı: ${previousMeaning}.`;
        } 
                setTimeout(() => {
                  
                    fetchNewWord(); // Yeni kelime seç
                    createLabyrinth(); // Yeni kelime için labirenti oluştur
                    correctCells = 0; // Doğru hücreleri sıfırla
                    timeLeft = 60; // Süreyi yeniden başlat
                    timeLeftElem.textContent = timeLeft;
                    startTimer(); // Zamanlayıcıyı yeniden başlat
                }, 2000); // 2 saniye bekle, ardından yeni kelimeyi yükle
            } else {
                setTimeout(() => {
                    fetchNewWord(); // Yeni kelime seç
                    createLabyrinth(); // Yeni kelime için labirenti oluştur
                    correctCells = 0; // Doğru hücreleri sıfırla
                    timeLeft = 60; // Süreyi yeniden başlat
                    timeLeftElem.textContent = timeLeft;
                    startTimer(); // Zamanlayıcıyı yeniden başlat
                }, 2000); // 2 saniye bekle, ardından yeni kelimeyi yükle
            }
        } else {
            messageElem.textContent = 'Zaman doldu! Kelimeyi tamamlayamadınız.';
        }

        isGameStarted = false;
        gameArea.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', handleCellClick)); 
    }

    function generateRandomLetters(count) {
        const letters = 'ABCÇDEFGĞHİIJKLMNOÖPQRSŞTUÜVWYZ'; //ABCÇDEFGĞHİIJKLMNOÖPQRSŞTUÜVWYZ
        let result = '';
        for (let i = 0; i < count; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return result.split('');
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Başlat düğmesine tıklama olayı
    startButton.addEventListener('click', startGame);
});
