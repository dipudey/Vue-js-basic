// import Hellow from "../components/Hellow"
import Inventory from "../components/Inventory"
// import Inventory from "../components/Cart"
import Test from "../components/Test"
import ItemDetails from "../components/ItemDetails"


export const routes = [
	{
		path:'',
		component: Inventory
	},
	{ path: '/test', component: Test},
	{ path: '/item/:id', component: ItemDetails},

]