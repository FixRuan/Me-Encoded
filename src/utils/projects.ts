import DevlandiaImage from "../assets/projects/devlandia.png";
import GoPizzaImage from "../assets/projects/gopizza.png";
import RentxImage from "../assets/projects/rentx.png";
import GoFinancesImage from "../assets/projects/gofinances.png";
import PokedexImage from "../assets/projects/pokedex.png";
import IgnewsImage from "../assets/projects/ignews.png";

interface Project {
	name: string;
	description: string;
	image: string;
}

const projectsArray: Project[] = [
	{
		name: "Devlândia",
		description: "Aplicativo para aprender programação gratuito.",
		image: DevlandiaImage,
	},
	{
		name: "Go Pizza",
		description: "Um aplicativo para gerir entregas de pizzas.",
		image: GoPizzaImage,
	},
	{
		name: "RentX",
		description: "Aplicativo para aluguel de carros",
		image: RentxImage,
	},
	{
		name: "Go Finances",
		description: "Aplicativo para gerir finanças desenvolvido na Rocketseat.",
		image: GoFinancesImage,
	},
	{
		name: "Pokedex",
		description: "Aplicativo para visualizar pokemons",
		image: PokedexImage,
	},
	{
		name: "IGnews",
		description: "Blog com opções de pagamento com stripe",
		image: IgnewsImage,
	},
];

export { projectsArray };
