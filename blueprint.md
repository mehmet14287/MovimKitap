# Movim Kitap - Proje Blueprint

## Proje Özeti

Movim Kitap, kitapların bir vitrin formatında sergilendiği, görsel olarak çarpıcı ve modern bir web sitesidir. Kitap verileri, harici bir `books.json` dosyasından dinamik olarak yüklenir. Projenin ana odağı, kullanıcılara estetik ve etkileyşimli bir deneyim sunmaktır.

## Tasarım ve Özellikler

- **Modern ve Cesur Arayüz:** Canlı renkler, cesur tipografi, animasyonlar ve derinlik hissi veren gölgeler.
- **Dinamik Veri Yükleme:** Kitap verileri, `fetch` API kullanılarak `books.json` dosyasından asenkron olarak yüklenir.
- **Web Components:** Tekrar kullanılabilir ve yönetimi kolay `book-card` bileşeni.
- **Mobil Uyumlu Tasarım:** Farklı ekran boyutlarına uyum sağlayan esnek yapı.

## Geliştirme Planı (Güncellendi)

1.  **HTML Yapısı (`index.html`):**
    *   Etkileyici bir başlık (Hero Section) alanı.
    *   Kitapların listeleneceği ana bölüm.
    *   Alt bilgi (footer) bölümü.
2.  **Stil Dosyası (`style.css`):**
    *   **Görsel Geliştirmeler:**
        *   Canlı renk paleti (OKLCH renk uzayı).
        *   Çok katmanlı, derin gölgeler ile "lifted" kart tasarımı.
        *   Yumuşak giriş animasyonları.
        *   Arka plana zarif bir "noise" dokusu.
        *   Güçlü tipografik hiyerarşi.
3.  **JavaScript Fonksiyonları (`main.js`):**
    *   `fetch` API kullanarak `books.json` dosyasından verileri oku.
    *   Kitapları dinamik olarak listele ve giriş animasyonlarını tetikle.
    *   `book-card` adında bir Web Component.
4.  **Veri Dosyası (`books.json`):**
    *   Tüm kitap bilgilerini içeren merkezi bir JSON dosyası.
