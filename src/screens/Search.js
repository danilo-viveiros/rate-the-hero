import { Button } from '../common-components/button/Button';
import { Header } from '../common-components/header/Header';
import { SearchField } from '../common-components/searchField/SearchField';
export function Search() {
	return (
		<div>
			<Header />
			<SearchField placeholder="Digite um nome de herói ou heroína" />
			<Button ghost={true}>Buscar</Button>
		</div>
	);
}

