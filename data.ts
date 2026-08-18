export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/4c314364-2022-4688-ae16-e4ad0c3410e7/_result.png",
  beforeTerrace: "https://image.qwenlm.ai/generated-images/2a717c8a-bb22-412e-a246-8260f6c163db/_result.png",
  afterTerrace: "https://image.qwenlm.ai/generated-images/e1b6d5f7-d1f4-421b-a566-624c73fc2ab3/_result.png",
  beforeGarden: "https://image.qwenlm.ai/generated-images/73e2e0f5-3894-4d2a-bb92-25f580609317/_result.png",
  afterGarden: "https://image.qwenlm.ai/generated-images/08978dc4-e6e8-4e4e-9e3a-155ea2ab0307/_result.png",
  rooftop: "https://image.qwenlm.ai/generated-images/b93edbde-15c3-44de-ba64-c6cb029bc9dc/_result.png",
  balcony: "https://image.qwenlm.ai/generated-images/b36742fc-4699-4c6a-90d6-2cb3ff2d109f/_result.png",
  garden: "https://image.qwenlm.ai/generated-images/4f8c3e29-8dce-4d5d-ba9d-eb7fe4814596/_result.png",
  patio: "https://image.qwenlm.ai/generated-images/06dcfa58-4d41-4e23-bfd8-64176d4f2e39/_result.png",
  portrait: "https://image.qwenlm.ai/generated-images/5e09793e-c4e7-421a-9d67-c7b64b372f05/_result.png",
};

export const PHONE = "+41 79 639 00 21";
export const PHONE_HREF = "tel:+41796390021";
export const EMAIL = "info@conceptvegetal.ch";
export const ADDRESS = "Chemin du Liseron 7, 1009 Pully";

export type Service = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Terrasses & rooftops",
    desc: "Platelage bois ou grès cérame, pergolas bioclimatiques, cuisines extérieures et salons lounge pensés pour vivre dehors d'avril à octobre.",
    tags: ["Platelage", "Pergola", "Cuisine extérieure"],
    img: IMG.rooftop,
  },
  {
    num: "02",
    title: "Création de jardins",
    desc: "Conception sur plan, modelage du terrain, murets en pierre sèche, massifs structurés et pièces d'eau : un jardin qui a une vraie signature.",
    tags: ["Plans 3D", "Pierre sèche", "Massifs"],
    img: IMG.garden,
  },
  {
    num: "03",
    title: "Balcons urbains",
    desc: "Bacs légers, claustras et écrans de verdure pour transformer quelques m² en refuge végétal, sans surcharger la structure de l'immeuble.",
    tags: ["Bacs sur mesure", "Claustras", "Intimité"],
    img: IMG.balcony,
  },
  {
    num: "04",
    title: "Plantation & végétalisation",
    desc: "Sélection d'essences adaptées au climat lémanique : jardins méditerranéens, vivaces mellifères, alternatives au gazon sobres en eau.",
    tags: ["Essences locales", "Mellifère", "Sobre en eau"],
    img: IMG.patio,
  },
  {
    num: "05",
    title: "Éclairage & arrosage",
    desc: "Mise en lumière LED de vos végétaux et arrosage automatique piloté au goutte-à-goutte : votre extérieur reste beau, sans effort.",
    tags: ["LED", "Goutte-à-goutte", "Domotique"],
    img: IMG.hero,
  },
  {
    num: "06",
    title: "Entretien & suivi",
    desc: "Contrats annuels, taille de saison, soins du gazon et suivi de plantation : nous restons aux côtés de votre jardin année après année.",
    tags: ["Contrat annuel", "Taille", "Suivi"],
    img: IMG.afterGarden,
  },
];

export type Project = {
  title: string;
  place: string;
  cat: "Terrasse" | "Jardin" | "Balcon" | "Rooftop";
  year: string;
  img: string;
  surface: string;
};

export const PROJECTS: Project[] = [
  { title: "Rooftop sur le Léman", place: "Lausanne — Ouchy", cat: "Rooftop", year: "2025", img: IMG.rooftop, surface: "85 m²" },
  { title: "Balcon suspendu", place: "Pully — Chamblandes", cat: "Balcon", year: "2025", img: IMG.balcony, surface: "14 m²" },
  { title: "Jardin minimaliste", place: "Épalinges", cat: "Jardin", year: "2024", img: IMG.garden, surface: "420 m²" },
  { title: "Patio méditerranéen", place: "Lutry", cat: "Jardin", year: "2024", img: IMG.patio, surface: "95 m²" },
  { title: "Terrasse larch & corten", place: "Paudex", cat: "Terrasse", year: "2025", img: IMG.afterTerrace, surface: "60 m²" },
  { title: "Jardin en restanques", place: "Montreux", cat: "Jardin", year: "2023", img: IMG.afterGarden, surface: "310 m²" },
];

export type BeforeAfter = {
  title: string;
  place: string;
  before: string;
  after: string;
  duration: string;
  budget: string;
};

export const BEFORE_AFTER: BeforeAfter[] = [
  {
    title: "Terrasse d'appartement, Pully",
    place: "Chamblandes — 60 m²",
    before: IMG.beforeTerrace,
    after: IMG.afterTerrace,
    duration: "3 semaines de chantier",
    budget: "CHF 48'000",
  },
  {
    title: "Jardin en pente, Montreux",
    place: "Villa privée — 310 m²",
    before: IMG.beforeGarden,
    after: IMG.afterGarden,
    duration: "6 semaines de chantier",
    budget: "CHF 96'000",
  },
];

export type Review = {
  name: string;
  place: string;
  date: string;
  text: string;
  project: string;
  stars: number;
};

export const REVIEWS: Review[] = [
  {
    name: "Claire Moret",
    place: "Pully",
    date: "octobre 2025",
    project: "Terrasse 60 m²",
    stars: 5,
    text: "Du premier croquis à la dernière plantation, tout a été d'un professionnalisme rare. Notre terrasse est devenue notre pièce préférée de la maison — on ne compte plus les apéros face au lac. Chantier propre, délais tenus.",
  },
  {
    name: "Famille Rochat",
    place: "Lutry",
    date: "août 2025",
    project: "Création de jardin",
    stars: 5,
    text: "Ils ont su écouter nos envies tout en nous proposant des choix auxquels nous n'aurions jamais pensé. Le rendu dépasse les plans 3D. Les enfants adorent, la haie a déjà bien pris. Merci !",
  },
  {
    name: "Marc & Elena Vidal",
    place: "Lausanne — Ouchy",
    date: "juillet 2025",
    project: "Rooftop 85 m²",
    stars: 5,
    text: "Un rooftop complètement transformé : bacs sur mesure, éclairage magnifique, arrosage automatique. Voisins et amis n'en reviennent pas. Devis clair, pas de mauvaise surprise.",
  },
  {
    name: "Sophie Bianchi",
    place: "Épalinges",
    date: "juin 2025",
    project: "Jardin sobre en eau",
    stars: 5,
    text: "Jardin repensé avec des vivaces et graminées superbes, sobre en eau comme demandé. L'équipe est ponctuelle, soigneuse et passionnée — ça change tout. Je recommande sans réserve.",
  },
  {
    name: "Jean-Daniel Perret",
    place: "Paudex",
    date: "mai 2025",
    project: "Entretien annuel",
    stars: 5,
    text: "Contrat d'entretien depuis deux ans : taille impeccable, conseils pertinents à chaque passage, factures conformes au devis. Une équipe qui connaît vraiment ses plantes.",
  },
  {
    name: "Nathalie Favre",
    place: "Montreux",
    date: "avril 2025",
    project: "Jardin en restanques",
    stars: 5,
    text: "Terrain en pente réputé « impossible » : ils en ont fait un jardin en restanques magnifique avec murets en pierre sèche. Un vrai savoir-faire artisanal, et le suivi après chantier est sérieux.",
  },
  {
    name: "Antoine Keller",
    place: "Lausanne — Flon",
    date: "mars 2025",
    project: "Balcon urbain",
    stars: 4,
    text: "Petit balcon transformé en coin de verdure très cosy avec un olivier et des bacs sur mesure. Juste un petit retard de livraison d'une plante, vite compensé. Résultat superbe.",
  },
];

export const STATS = [
  { value: 250, suffix: "+", label: "projets réalisés depuis 2016" },
  { value: 12500, suffix: " m²", label: "aménagés sur la Riviera" },
  { value: 4.9, suffix: "/5", label: "note moyenne — 47 avis Google", decimals: 1 },
  { value: 48, suffix: " h", label: "pour recevoir votre devis" },
];

export const STEPS = [
  {
    num: "01",
    title: "Rencontre & diagnostic",
    text: "Nous venons chez vous, gratuitement et sans engagement. Relevé du site, exposition, sol, contraintes… et surtout : votre façon de vivre dehors.",
    meta: "Gratuit · 1 h sur place",
  },
  {
    num: "02",
    title: "Concept & plans 3D",
    text: "Plan d'aménagement, palette végétale, matériaux et visualisation 3D photoréaliste. Vous validez chaque détail avant le premier coup de pelle.",
    meta: "Sous 2 semaines",
  },
  {
    num: "03",
    title: "Réalisation du chantier",
    text: "Nos équipes réalisent l'intégralité des travaux — maçonnerie paysagère, platelage, plantation, éclairage. Un interlocuteur unique, un planning tenu.",
    meta: "Suivi quotidien par le chef de projet",
  },
  {
    num: "04",
    title: "Suivi & entretien",
    text: "Garantie de reprise sur les plantations, visite de contrôle à 6 mois, et contrat d'entretien si vous le souhaitez. Votre jardin vieillit bien.",
    meta: "Garantie 2 ans sur les végétaux",
  },
];

export const FAQ = [
  {
    q: "Combien coûte un aménagement paysager ?",
    a: "Chaque projet est unique : comptez environ CHF 300 à 900 / m² pour une création complète selon les matériaux et la complexité. Un balcon démarre autour de CHF 6'000, une terrasse complète entre CHF 25'000 et 60'000. Le déplacement et le devis sont toujours gratuits et sans engagement.",
  },
  {
    q: "Quels délais pour un projet de terrasse ou de jardin ?",
    a: "Comptez 2 semaines pour la conception et les plans 3D, puis 2 à 6 semaines de chantier selon l'ampleur. En haute saison (mars–juin), réservez votre créneau 4 à 6 semaines à l'avance.",
  },
  {
    q: "Vous occupez-vous des autorisations et démarches ?",
    a: "Oui. Nous identifions les autorisations nécessaires auprès de votre commune (Pully, Lausanne, Montreux…) et préparons les dossiers : mise à l'enquête, plans, coupes. Vous n'avez rien à faire.",
  },
  {
    q: "Les plantes sont-elles garanties ?",
    a: "Tous nos végétaux sont garantis 2 ans et remplacés gratuitement en cas de reprise insuffisante, pour autant que l'arrosage recommandé ait été respecté. Nous sélectionnons des essences adaptées au climat lémanique.",
  },
  {
    q: "Intervenez-vous en dehors de Lausanne ?",
    a: "Nous couvrons tout l'arc lémanique : Lausanne, Pully, Paudex, Lutry, Épalinges, Montreux, Vevey, Morges et Nyon. Au-delà, parlons-en — les beaux projets voyagent.",
  },
  {
    q: "Proposez-vous un entretien après la création ?",
    a: "Oui, avec des contrats annuels adaptés : 2, 4 ou 12 passages par an, taille de saison, soins du gazon, hivernage des plantes sensibles. Votre jardin reste aussi beau qu'au premier jour.",
  },
];

export const ZONES = [
  "Lausanne", "Pully", "Paudex", "Lutry", "Épalinges", "Montreux", "Vevey", "Morges", "Nyon", "Renens", "Prilly", "Chavannes",
];
