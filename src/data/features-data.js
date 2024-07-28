import {
  UsersIcon,
  BriefcaseIcon,
  ShieldCheckIcon, 
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "gray",
    title: "Previdenciário",
    icon: UsersIcon,
    description:
      "Aposentadorias, auxílio acidente, auxílio reclusão, auxílio-doença, pensão por morte, LOAS, auxílio maternidade e planejamento previdenciário.",
  },
  {
    color: "gray",
    title: "Trabalhista",
    icon: BriefcaseIcon,
    description:
      "Rescisão trabalhista, carteira assinada, periculosidade ou insalubridade, adicional noturno, pagamento de valores devidos e danos morais.",
  },
  {
    color: "gray",
    title: "Criminalista",
    icon: ShieldCheckIcon,
    description:
      "Flagrantes, defesas em fase inicial e recursal, revisão criminal, progressão de regime e liberdade condicional.",
  },
];

export default featuresData;
