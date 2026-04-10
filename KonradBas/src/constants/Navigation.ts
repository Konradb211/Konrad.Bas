interface NavgiationTypes {
  id: number | string;
  title: string;
  url: string;
  target?: string;
  rel?: string;
}

export const Navigation: NavgiationTypes[] = [
  { id: 1, title: "O mnie", url: "#o-mnie" },
  { id: 2, title: "Umiejętności", url: "#umiejetnosci" },
  { id: 3, title: "Doświadczenie", url: "#exp" },
  { id: 4, title: "Projekty", url: "#projekty" },
  {
    id: 5,
    title: "CV",
    url: "Konrad_Bas.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { id: 6, title: "Kontakt", url: "#kontakt" },
];
