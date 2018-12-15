import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';
import { UrlfotoPipe } from './urlfoto/urlfoto';
@NgModule({
	declarations: [MomentPipe,
    UrlfotoPipe],
	imports: [],
	exports: [MomentPipe,
    UrlfotoPipe]
})
export class PipesModule {}
