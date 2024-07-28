import {
  FlagIcon,       // para Missão
  EyeIcon,        // para Visão
  ScaleIcon,      // para Valores
} from "@heroicons/react/24/solid";

export const contactData = [
  {
    title: "Missão",
    icon: FlagIcon,
    description:
      "Nossa missão é ser instrumento na defesa da Lei e proteção dos direitos, pautando nossa atuação em princípios éticos e humanizados.",
  },
  {
    title: "Visão",
    icon: EyeIcon,
    description:
      "Ser referência na advocacia, com reconhecimento em todo território nacional, com destaque nos resultados alcançados para os clientes.",
  },
  {
    title: "Valores",
    icon: ScaleIcon,
    description: (
      <ul className="list-disc ml-5">
        <li><strong>Compromisso com os clientes:</strong> Colocamos nossos clientes no centro de tudo o que fazemos, direcionando nossos esforços para garantir sua total satisfação.</li>
        <li><strong>Ética:</strong> Todas as nossas relações são orientadas pelos Princípios Éticos.</li>
        <li><strong>Confiança e Respeito:</strong> Asseguramos o respeito pela diversidade, a não discriminação e a igualdade de oportunidades para todos.</li>
        <li><strong>Confidencialidade:</strong> Para garantir a tranquilidade de nossos clientes, garantimos total sigilo sobre informações e dados, mediante a conscientização de nossa equipe e a segurança robusta de nossos sistemas, em conformidade com as normas da LGPD.</li>
      </ul>
    ),
  },
];

export default contactData;
