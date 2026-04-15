type Responsibility = {
  id: string;
  text: string;
};

type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  responsibilities: Responsibility[];
};

export const Exp: Experience[] = [
  {
    id: "media-essence",
    company: "MEDIA ESSENCE",
    position: "Web Developer",
    period: "Styczeń 2025 - Obecnie",
    responsibilities: [
      {
        id: "1",
        text: "rozwój, utrzymanie i implementacja responsywnych stron internetowych opartych na autorskim systemie CMS z wykorzystaniem PHP, Twig, HTML, SCSS, JavaScript oraz MySQL",
      },
      {
        id: "2",
        text: "wdrażanie stron internetowych na podstawie projektów graficznych przygotowanych w Figma",
      },
      {
        id: "3",
        text: "konfiguracja hostingu, przekierowań, SSL oraz wdrażanie stron na serwer",
      },
      {
        id: "4",
        text: "wdrażanie i rozwój stron na WordPress oraz Shoper",
      },
      {
        id: "5",
        text: "rozwój funkcjonalności w autorskim systemie CMS",
      },
      {
        id: "6",
        text: "współpraca z zewnętrzną firmą SEO przy optymalizacji stron",
      },
      {
        id: "7",
        text: "wprowadzanie zmian i aktualizacji na stronach zgodnie z wymaganiami klientów",
      },
    ],
  },
  {
    id: "intelliapp",
    company: "INTELLIAPP",
    position: "Mobile Developer",
    period: "Grudzień 2023 - Lipiec 2024",
    responsibilities: [
      {
        id: "1",
        text: "tworzenie, rozwijanie i utrzymywanie kodu zgodnie z wymaganiami projektowymi",
      },
      {
        id: "2",
        text: "współpraca przy identyfikacji i naprawie błędów w kodzie",
      },
      {
        id: "3",
        text: "debugowanie aplikacji oraz rozwiązywanie problemów technicznych",
      },
      {
        id: "4",
        text: "praca z wykorzystaniem technologii: React, React Native, Tailwind CSS, Git",
      },
    ],
  },
];
