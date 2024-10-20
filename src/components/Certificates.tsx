import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificatesProps {
  language: string;
  translations: any;
  theme: string;
}

const Certificates: React.FC<CertificatesProps> = ({
  language,
  translations,
  theme,
}) => {
  const certificates = [
    {
      name: 'Microsoft Word Temelleri',
      file: '/src/certificates/Microsoft_Word_Temelleri_Sertifika (1).pdf',
    },
    {
      name: 'LibreOffice',
      file: '/src/certificates/LibreOffice_Sertifika (1).pdf',
    },
    {
      name: 'Bilgi Güvenliği Yönetim Sistemi',
      file: '/src/certificates/Bilgi_Güvenliği_Yönetim_Sistemi_Sertifika.pdf',
    },
    {
      name: 'Kotlin Programlama Dili',
      file: '/src/certificates/Kotlin_Programlama_Dili_Sertifika.pdf',
    },
    {
      name: 'Javascript Temelleri',
      file: '/src/certificates/Javascript_Temelleri_Sertifika (2).pdf',
    },
    {
      name: 'C Programlama Dili',
      file: '/src/certificates/C_Programlama_Dili_Sertifika (3).pdf',
    },
    {
      name: 'KVKK ve GDPR Eğitim Seti',
      file: '/src/certificates/KVKK__GDPR_Eğitim_Seti_Sertifika.pdf',
    },
    {
      name: 'Angular 7',
      file: '/src/certificates/Angular_7_Sertifika (1).pdf',
    },
    {
      name: 'Kotlin ile Android Mobil Uygulama Geliştirme İleri Seviye',
      file: '/src/certificates/Kotlin_ile_Android_Mobil_Uygulama_Geliştirme_İleri_Seviye_Sertifika.pdf',
    },
    {
      name: 'Bilişim Hukuku',
      file: '/src/certificates/Bilişim_Hukuku_Sertifika.pdf',
    },
    {
      name: 'Etkili İletişim Stratejileri',
      file: '/src/certificates/Etkili_İletişim_Stratejileri_Sertifika (1).pdf',
    },
    {
      name: 'DoS ve DDos Saldırıları ve Koruma',
      file: '/src/certificates/DoS___DDos_Saldırıları_ve_Koruma_Sertifika.pdf',
    },
    {
      name: 'Genç Profesyoneller İçin Kariyeri Tehdit Eden Yaklaşımlar',
      file: '/src/certificates/Genç_Profesyoneller_İçin_Kariyeri_Tehdit_Eden_Yaklaşımlar_Sertifika.pdf',
    },
    {
      name: 'Girişimcilikte Sunum Teknikleri ve İletişim Yönetimi',
      file: '/src/certificates/Girişimcilikte_Sunum_Teknikleri_ve_İletişim_Yönetimi_Sertifika.pdf',
    },
    {
      name: 'Bilgi Teknolojilerine Giriş',
      file: '/src/certificates/Bilgi_Teknolojilerine_Giriş_Sertifika (1).pdf',
    },
    {
      name: 'A1 Seviye İngilizce',
      file: '/src/certificates/A1_Seviye_İngilizce_Sertifika (1).pdf',
    },
    {
      name: 'jQuery ile Web Programcılığı',
      file: '/src/certificates/jQuery_ile_Web_Programcılığı_Sertifika.pdf',
    },
    {
      name: 'İşletim Sistemlerine Giriş',
      file: '/src/certificates/İşletim_Sistemlerine_Giriş_Sertifika (1).pdf',
    },
    {
      name: 'İnternet Alan Adları Hukuku',
      file: '/src/certificates/İnternet_Alan_Adları_Hukuku_Sertifika.pdf',
    },
    {
      name: 'Ağ Temelleri',
      file: '/src/certificates/Ağ_Temelleri_Sertifika (3).pdf',
    },
    {
      name: 'E-Ticarete Giriş',
      file: '/src/certificates/E-Ticarete_Giriş_Sertifika.pdf',
    },
    {
      name: "Kişiselleştirilmiş GPT'ler",
      file: "/src/certificates/Kişiselleştirilmiş_GPT'ler__Sertifika.pdf",
    },
    {
      name: 'Kotlin ile Android Mobil Uygulama Geliştirme Temelleri',
      file: '/src/certificates/Kotlin_ile_Android_Mobil_Uygulama_Geliştirme_Temelleri__Sertifika.pdf',
    },
    {
      name: 'B1 Seviye İngilizce',
      file: '/src/certificates/B1_Seviye_İngilizce_Sertifika (1).pdf',
    },
    {
      name: 'Dart Programlama Dili',
      file: '/src/certificates/Dart_Programlama_Dili_Sertifika (2).pdf',
    },
    {
      name: 'HTML5 ile Web Geliştirme',
      file: '/src/certificates/HTML5_ile_Web_Geliştirme_Sertifika (2).pdf',
    },
    {
      name: 'Bilgi Güvenliğine Giriş',
      file: '/src/certificates/Bilgi_Güvenliğine_Giriş_Sertifika (1).pdf',
    },
    {
      name: 'Güvenli Yazılım Geliştirme',
      file: '/src/certificates/Güvenli_Yazılım_Geliştirme_Sertifika (1).pdf',
    },
    {
      name: 'Microsoft PowerPoint',
      file: '/src/certificates/Microsoft_PowerPoint_Sertifika (1).pdf',
    },
    {
      name: 'Girişimcilik Temelleri',
      file: '/src/certificates/Girişimcilik_Temelleri_Sertifika.pdf',
    },
    {
      name: 'İleri Seviye Java',
      file: '/src/certificates/İleri_Seviye_Java_Sertifika.pdf',
    },
    {
      name: 'Bootstrap 5',
      file: '/src/certificates/Bootstrap_5_Sertifika (2).pdf',
    },
    {
      name: 'Finansal Okuryazarlık',
      file: '/src/certificates/Finansal_Okuryazarlık_Sertifika.pdf',
    },
    {
      name: 'Kuika ile Az Kodlu Uygulama Geliştirme',
      file: '/src/certificates/Kuika_ile_Az_Kodlu_Uygulama_Geliştirme_Sertifika.pdf',
    },
    {
      name: 'JAVA ile Programlamaya Giriş',
      file: '/src/certificates/JAVA_ile_Programlamaya_Giriş_Sertifika (3).pdf',
    },
    {
      name: 'Firebase ile Proje Geliştirme',
      file: '/src/certificates/Firebase_ile_Proje_Geliştirme_Sertifika.pdf',
    },
    {
      name: 'İletişim ve Network Yönetimi',
      file: '/src/certificates/İletişim_ve_Network_Yönetimi_Sertifika.pdf',
    },
    {
      name: 'C# Programlama',
      file: '/src/certificates/C#Programlama_Sertifika (2).pdf',
    },
    {
      name: 'Kariyeri Tehdit Eden Yaklaşımlar',
      file: '/src/certificates/Kariyeri_Tehdit_Eden_Yaklaşımlar_Sertifika.pdf',
    },
    {
      name: 'A2 Seviye İngilizce',
      file: '/src/certificates/A2_Seviye_İngilizce_Sertifika (1).pdf',
    },
    {
      name: 'CSS Temelleri',
      file: '/src/certificates/CSS_Temelleri_Sertifika (2).pdf',
    },
    {
      name: 'B2 Seviye İngilizce',
      file: '/src/certificates/B2_Seviye_İngilizce_Sertifika (1).pdf',
    },
    {
      name: 'İkna Becerileri',
      file: '/src/certificates/İkna_Becerileri_Sertifika.pdf',
    },
    {
      name: 'Algoritma Programlama ve Veri Yapılarına Giriş',
      file: '/src/certificates/Algoritma_Programlama_ve_Veri_Yapılarına_Giriş_Sertifika (1).pdf',
    },
    {
      name: 'Dijital Perakende Uzmanlığı',
      file: '/src/certificates/Dijital_Perakende_Uzmanlığı_Sertifika.pdf',
    },
    {
      name: 'İleri Ağ Teknolojileri',
      file: '/src/certificates/İleri_Ağ_Teknolojileri_Sertifika.pdf',
    },
    {
      name: 'Google Flutter ile Mobil Uygulama',
      file: '/src/certificates/Google_Flutter_ile_Mobil_Uygulama_Sertifika (2).pdf',
    },
    {
      name: 'Docker Temelleri',
      file: '/src/certificates/Docker_Temelleri_Sertifika.pdf',
    },
    {
      name: 'DevOps Çözümleri (Jenkins)',
      file: '/src/certificates/DevOps_Çözümleri(Jenkins)Sertifika.pdf',
    },
    {
      name: 'Doküman Tipleri ve Veri Formatları',
      file: '/src/certificates/Doküman_Tipleri_ve_Veri_Formatları_Sertifika (1).pdf',
    },
    {
      name: 'Microsoft Excel Temelleri',
      file: '/src/certificates/Microsoft_Excel_Temelleri_Sertifika (1).pdf',
    },
    {
      name: "LinkedIn'de Etkili Profil Oluşturma",
      file: "/src/certificates/LinkedIn'de_Etkili_Profil_Oluşturma_Sertifika.pdf",
    },
    {
      name: 'Fikri ve Sınai Mülkiyet Hakları',
      file: '/src/certificates/Fikri_ve_Sınai_Mülkiyet_Hakları_Sertifika.pdf',
    },
    {
      name: 'Ekip Kurma ve Yönetme',
      file: '/src/certificates/Ekip_Kurma_ve_Yönetme_Sertifika.pdf',
    },
    {
      name: 'API ve API Testi',
      file: '/src/certificates/API_ve_API_Testi_Sertifika.pdf',
    },
    {
      name: 'Müşteriyi Tanımak',
      file: '/src/certificates/Müşteriyi_Tanımak_Sertifika.pdf',
    },
    {
      name: 'Mülakat Teknikleri',
      file: '/src/certificates/Mülakat_Teknikleri_Sertifika (1).pdf',
    },
    {
      name: 'Nesnelerin İnterneti (IoT) ve Güvenliği',
      file: '/src/certificates/Nesnelerin_İnterneti(IoT)ve_Güvenliği_Sertifika.pdf',
    },
    {
      name: 'Node.js ile Web Programlama',
      file: '/src/certificates/Node.js_ile_Web_Programlama_Sertifika.pdf',
    },
    {
      name: 'Pardus Arayüz Kullanımı',
      file: '/src/certificates/Pardus_Arayüz_Kullanımı_Sertifika (1).pdf',
    },
    {
      name: 'NoSQL - Doküman Veritabanları',
      file: '/src/certificates/NoSQL-_Doküman_Veritabanları_Sertifika.pdf',
    },
    {
      name: 'Pazar Araştırması ve Fiyatlandırma Stratejileri',
      file: '/src/certificates/Pazar_Araştırması_ve_Fiyatlandırma_Stratejileri_Sertifika.pdf',
    },
    {
      name: 'Program ve Portföy Yönetimi',
      file: '/src/certificates/Program_ve_Portföy_Yönetimi_Sertifika (1).pdf',
    },
    {
      name: 'Proje ve Risk Yönetimi',
      file: '/src/certificates/Proje_ve_Risk_Yönetimi_Sertifika.pdf',
    },
    {
      name: 'Proje Yönetim Temelleri',
      file: '/src/certificates/Proje_Yönetim_Temelleri__Sertifika (1).pdf',
    },
    {
      name: 'Proje Yönetimi',
      file: '/src/certificates/Proje_Yönetimi__Sertifika.pdf',
    },
    {
      name: 'Satış ve Pazarlama Yönetimi',
      file: '/src/certificates/Satış_ve_Pazarlama_Yönetimi_Sertifika.pdf',
    },
    {
      name: 'REACT ile Web Programcılığı',
      file: '/src/certificates/REACT_ile_Web_Programcılığı_Sertifika (2).pdf',
    },
    { name: 'Scrum', file: '/src/certificates/Scrum_Sertifika.pdf' },
    {
      name: 'Siber Güvenliğe Giriş',
      file: '/src/certificates/Siber_Güvenliğe_Giriş_Sertifika.pdf',
    },
    {
      name: 'Temel Ağ Teknolojileri',
      file: '/src/certificates/Temel_Ağ_Teknolojileri_Sertifika (1).pdf',
    },
    {
      name: 'Sözleşme Yönetimi Hukuku',
      file: '/src/certificates/Sözleşme_Yönetimi_Hukuku_Sertifika.pdf',
    },
    {
      name: 'TSQL ile Veri Tabanı Programlama',
      file: '/src/certificates/TSQL_ile_Veri_Tabanı_Programlama_Sertifika (1).pdf',
    },
    {
      name: 'Uluslararası İş Analizi Metodolojisi ve Teknikleri',
      file: '/src/certificates/Uluslararası_İş_Analizi_Metodolojisi_ve_Teknikleri_Sertifika (1).pdf',
    },
    {
      name: 'Unity ile 3D Oyun Geliştirme',
      file: '/src/certificates/Unity_ile_3D_Oyun_Geliştirme_Sertifika (2).pdf',
    },
    {
      name: 'Unity ile Dijital Oyun Geliştirmeye Giriş',
      file: '/src/certificates/Unity_ile_Dijital_Oyun_Geliştirmeye_Giriş_Sertifika (4).pdf',
    },
    {
      name: 'Unity İle Eğitici Oyunlar',
      file: '/src/certificates/Unity_İle_Eğitici_Oyunlar_Sertifika (1).pdf',
    },
    {
      name: 'Uygulamalarla Nesne Yönelimli Programlama',
      file: '/src/certificates/Uygulamalarla_Nesne_Yönelimli_Programlama_Sertifika (1).pdf',
    },
    {
      name: 'Uygulamalarla SQL Öğreniyorum',
      file: '/src/certificates/Uygulamalarla_SQL_Öğreniyorum_Sertifika (2).pdf',
    },
    {
      name: 'Uygulamalı Figma',
      file: '/src/certificates/Uygulamalı_Figma_Sertifika.pdf',
    },
    {
      name: 'Uygulamalı İş Modeli Üretimi',
      file: '/src/certificates/Uygulamalı_İş_Modeli_Üretimi_Sertifika.pdf',
    },
    {
      name: 'Uzaktan Erişim Araçları',
      file: '/src/certificates/Uzaktan_Erişim_Araçları_Sertifika.pdf',
    },
    {
      name: 'Veri Tabanına Giriş',
      file: '/src/certificates/Veri_Tabanına_Giriş_Sertifika (1).pdf',
    },
    {
      name: 'Versiyon Kontrolleri: Git ve GitHub',
      file: '/src/certificates/Versiyon_Kontrolleri__Git_ve_GitHub_Sertifika.pdf',
    },
    { name: 'Vue.JS', file: '/src/certificates/Vue.JS_Sertifika (2).pdf' },
    {
      name: 'Web Servislerine Giriş',
      file: '/src/certificates/Web_Servislerine_Giriş_Sertifika.pdf',
    },
    {
      name: 'Web Sitesi Kullanılabilirliği',
      file: '/src/certificates/Web_Sitesi_Kullanılabilirliği_Sertifika (1).pdf',
    },
    {
      name: 'Yazılım Tasarım Desenleri',
      file: '/src/certificates/Yazılım_Tasarım_Desenleri_Sertifika.pdf',
    },
    {
      name: 'Yazılım Test Otomasyonu',
      file: '/src/certificates/Yazılım_Test_Otomasyonu_Sertifika.pdf',
    },
    {
      name: 'Yazılım Testine Giriş',
      file: '/src/certificates/Yazılım_Testine_Giriş_Sertifika.pdf',
    },
    {
      name: 'Yeni Başlayanlar için Python Programlama',
      file: '/src/certificates/Yeni_Başlayanlar_için_Python_Programlama_Sertifika (2).pdf',
    },
    {
      name: 'Şirket Değerleme ve Yatırım Süreçleri',
      file: '/src/certificates/Şirket_Değerleme_ve_Yatırım_Süreçleri_Sertifika.pdf',
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const certificatesPerPage = 10;

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(
        Math.ceil(certificates.length / certificatesPerPage) - 1,
        prev + 1
      )
    );
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="mb-16 scroll-mt-24 animate-on-scroll">
      <h2 className="text-3xl font-bold mb-4">
        {translations[language].certificates}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates
          .slice(
            currentPage * certificatesPerPage,
            (currentPage + 1) * certificatesPerPage
          )
          .map((certificate, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } hover:underline`}
              >
                {certificate.name}
              </a>
            </div>
          ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="flex items-center text-blue-600 dark:text-blue-400 disabled:text-gray-400 dark:disabled:text-gray-600"
        >
          <ChevronLeft size={20} className="mr-1" />
          {translations[language].previous}
        </button>
        <button
          onClick={handleNext}
          disabled={
            currentPage ===
            Math.ceil(certificates.length / certificatesPerPage) - 1
          }
          className="flex items-center text-blue-600 dark:text-blue-400 disabled:text-gray-400 dark:disabled:text-gray-600"
        >
          {translations[language].next}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-2xl w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {selectedCertificate}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {translations[language].certificateViewerMessage}
            </p>
            <button
              onClick={closeCertificateModal}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              {translations[language].close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
