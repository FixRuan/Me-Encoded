import DevlandiaImage from "../assets/projects/devlandia.png";
import GoPizzaImage from "../assets/projects/gopizza.png";
import RentxImage from "../assets/projects/rentx.png";
import GoFinancesImage from "../assets/projects/gofinances.png";
import PokedexImage from "../assets/projects/pokedex.png";
import IgnewsImage from "../assets/projects/ignews.png";
import GithubBlogImage from "../assets/projects/githubBlog.png";
import RocketHelpImage from "../assets/projects/rocketHelp.png";
import LunaBusImage from "../assets/projects/lunabus.png";

interface Project {
	name: string;
	description: string;
	image: string;
	link: string;
}

const projectsArray: Project[] = [
	{
		name: "Devlândia",
		description: "Aplicativo para aprender programação gratuito.",
		image: DevlandiaImage,
		link: "https://github.com/404jv/dev-landia"
	},
	{
		name: "Go Pizza",
		description: "Um aplicativo para gerir entregas de pizzas.",
		image: GoPizzaImage,
		link: "https://github.com/FixRuan/Go-Pizza"
	},
	{
		name: "RentX",
		description: "Aplicativo para aluguel de carros",
		image: RentxImage,
		link: "https://github.com/FixRuan/RentX"
	},
	{
		name: "Go Finances",
		description: "Aplicativo para gerir finanças desenvolvido na Rocketseat.",
		image: GoFinancesImage,
		link: "https://github.com/FixRuan/Go-Finances"
	},
	{
		name: "Pokedex",
		description: "Aplicativo para visualizar pokemons",
		image: PokedexImage,
		link: "https://github.com/FixRuan/Pokedex-challenge"
	},
	{
		name: "IGnews",
		description: "Blog com opções de pagamento com stripe",
		image: IgnewsImage,
		link: "https://github.com/FixRuan/ig.News"
	},
	{
		name: "Github Blog",
		description: "Blog feito com api do github, desafio da trilha de React (rocketseat)",
		image: GithubBlogImage,
		link: "https://github.com/FixRuan/Github-Blog"
	},
	{
		name: "Rocket Help",
		description: "Aplicatipo para resoluções de problemas, desenvolvido no Ignite Lab (rocketseat)",
		image: RocketHelpImage,
		link: "https://github.com/FixRuan/Rocket-Help"
	},
	{
		name: "Luna bus",
		description: "Aplicativo para transporte público",
		image: RocketHelpImage,
		link: "https://github.com/404jv/lunabus"
	},
];

export { projectsArray };
