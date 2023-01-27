import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { DetailsComponent } from './description/details/details.component';
import { ProductComponent } from './product.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
	{
		path: ':id',
		component: ProductComponent,
		children: [
			{
				path: 'type',
				component: TypeComponent,
			},
			{
				path: 'description',
				component: DescriptionComponent,
				children: [
					{
						path: 'root',
						component: DetailsComponent,
					},
				],
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'description',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
